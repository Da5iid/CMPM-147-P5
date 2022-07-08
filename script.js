/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */
let img;

function p4_inspirations() {
  //img = [loadImage('assets/grassXP.jpg'), loadImage('assets/banana.jpg'), loadImage('assets/slug.jpg')];
  //console.log(img)
  //return img[0];

  return [
    {name:"grassXP" , assetUrl: "./assets/grassXP.jpg"},
    {name: "banana", assetUrl: "./assets/banana.jpg"},
    {name: "slug", assetUrl: "./assets/slug.jpg"},
  ];
}

function p4_initialize(inspiration) {
  resizeCanvas(inspiration.image.width / 2, inspiration.image.height / 2);
  if (inspiration.name.indexOf("grassXP") != -1) {
    return {
      name: "grassXP",
      size: {min: 10, max: 40},
      posX: {min: 0, max: 1},
      posY: {min: 0, max: 1},
      elipX: {min: 10, max: 50},
      elipY: {min: 5, max: 25},
      elipR: {min: 0, max:  10},
      opacity: {min: 25, max: 180},

      iterations: 8
    };
  }

  if (inspiration.name.indexOf("banana") != -1) {
    return {
      name: "grassXP",
      size: {min: 5, max: 30},
      posX: {min: 0, max: 1},
      posY: {min: 0, max: 1},
      elipX: {min: 10, max: 50},
      elipY: {min: 5, max: 25},
      elipR: {min: 0, max:  15},
      opacity: {min: 40, max: 180},

      iterations: 5
    };
  }

  if (inspiration.name.indexOf("slug") != -1) {
    return {
      name: "grassXP",
      size: {min: 10, max: 40},
      posX: {min: 0, max: 1},
      posY: {min: 0, max: 1},
      elipX: {min: 10, max: 50},
      elipY: {min: 5, max: 25},
      elipR: {min: 0, max:  10},
      opacity: {min: 25, max: 180},

      iterations: 6
    };
  }
}

function p4_render(design, inspiration) {
  push();
  background(255);
  noStroke();
  angleMode(DEGREES);
  scale(0.5);

  //divide the image into grids
  let iw = inspiration.image.width / design.intervals;
  let ih = inspiration.image.height / design.intervals;
  let [x, y] = [0, 0];

  //horizontal grid
  for (let i = 0; i < design.intervals; i++) {


    //Borrowed from P3
    y = 0;
    //vertical grid
    for (let j = 0; j < design.intervals; j++) {
      //inside the grid, fill ovals
      for (let n = 0; n < 10; n++) {
        let sx = random(x + design.posX.min * iw, x + design.posX.max * iw);
        let sy = random(y + design.posY.min * ih, y + design.posY.max * ih);
        let pixel_color = inspiration.image.get(sx, sy);
        pixel_color[3] = random(design.opacity.min, design.opacity.max);
        fill(pixel_color);

        //circle(random(x, x + iw), random(y, y + ih), random(design.size.min, design.size.max));
        ellipse(random(x, x + iw), random(y, y + ih), random(design.size.min, design.size.max), random(design.size.min, design.size.max));
      }
      y += ih;
    }
    x += iw;
  }
  pop();
}

// Copied from Adam Smith's slides
function mut(num, min, max, rate) {
  return constrain(randomGaussian(num, (rate * (max - min)) / 20), min, max);
}

const MAX_R = {grassXP: 150, banana: 150, slug: 50};
const MIN_R = {grassXP: 20, banana: 10, slug: 5};

const MAX_C = {grassXP: 25, banana: 20, slug: 50};
const MIN_C = {grassXP: 0, banana: 1, slug: 1};

const INIT_INTERVALS = 8;

function gen_mut_param(param, mn, mx, rate) {
  let i = mut(mn, param.min, param.max, rate);
  let j = mut(param.max, param.min, mx, rate);
  param.max = max(i, j);
  param.min = min(i, j);
  return param;
}

function p4_mutate(design, inspiration, rate) {

  design.size = gen_mut_param(design.size, MIN_R[design.name], MAX_R[design.name], rate);
  design.opacity = gen_mut_param(design.opacity, 0, 255, rate);

  design.intervals = floor(mut(design.intervals, 2, 20, rate));

  //elipse x/y
  design.posX = gen_mut_param(design.posX, 0, 1, rate);
  design.posY = gen_mut_param(design.posY, 0, 1, rate);

  //elipse hight/width
  //design.elipX = gen_mut_param(design.elipX, 0, 1, rate);
  //design.elipY = gen_mut_param(design.elipY, 0, 1, rate);

  design.elipR = gen_mut_param(design.elipR, MIN_C[design.name], MAX_C[design.name], rate);
}
