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
    resizeCanvas(inspiration.image.width / 4, inspiration.image.height / 4);
    if (inspiration.name.indexOf("grassXP") != -1) {
    return {
      key: "grassXP",
      posX: {min: 0, max: 1},
      posY: {min: 0, max: 1},
      elipX: {min: 1, max: 50},
      elipY: {min: 1, max: 50},
      //elipR: {min: 0,max:  PI/2},
    };
  }
}

function p4_render(design, inspiration) {}

function p4_mutate(design, inspiration, rate) {}
