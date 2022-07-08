# p4-evolutionary-starter

Credit: Adam Smith

Banana + Slug + Windows XP Grassy Hill

Remixed by Kai Turner
    Much appreciated assistance from Div.

# 3 inspiration images:

>> The Windows XP grass hill background
>> a banana
>> a slug

# Description:
 
Using and building up the evolutionary code starter, this code is now (somewhat) successfully building images using P5 ellipses, and then mutating the size, oval x/y, position and opacity with start suggestions. This works best with the Windows XP image and the Banana, but with the "slug" it's a little harder to make out what you're looking at. Maybe that's just me. Theoretically, you should be able to change how quickly the output image mutates with the slider, and with anything under 50, the image never really appears. Therefore, the soldier is working. Best results come from 85-100.
 
# Parameter Choices
 
I decided early that to get “painting” looking images, I would use ellipses and put emphasis on keeping opacity settings low such that the final image would be a combination of many see-through ellipses instead of fewer, more dense opaque ellipses. I chose ellipses of course because of their stretchy curvy characteristics, and that they mesh together well. I included two parameters for the X/Y size of each ellipse, but found that combining the two into one "size" parameter allowed the mutation function to decide if the ellipses should be bigger or smaller. There is also a "rotation" (elipR) parameter which I added hoping that I'd be able to randomize the angle at which the ellipses appear. Unfortunately, because of P5's unintuitive and poor-designed (in my opinion) use of angles, I was unable to implement this parameter. The last parameter, "iterations", is used within the mutation function. It gives you another option for fine tuning the end results.
 
# Mutation:
 
The mutation code is derived from Adam's shared "mut" function that "restrains" what the parameters are doing, based on the successful rate of the color matching. Also included is Div's generously donated "get_from_mut" function that uses Adam's mut function and reiterates to match with the parameters. These two functions do most of the heavy lifting, evolving the parameters of X/Y position, size, opacity, and intervals.
 
# Artist statement.
 
My choices for the images were based on the idea that I'd be "combining" different images together "dall-e mini" style. I picked a banana, a slug, and the Windows XP grassy hill as the background such that they could be combined into a lovely landscape being attacked by a giant mutant banana slug. 
 
Despite this not actually being the assignment, I kept the images for consistency's sake, as also because I had good success with the Windows background and the banana. The slug however was very finicky, his pointy eye stocks are too thin for my chunky ellipses to properly rasterize. Perhaps being able to implement the rotation on the ellipses would have helped. Then the ellipses would (with some encouragement) point in the right direction and literally become the eyestocks.
 
using Adam's "mut" function was the core of why this implementation works. Thanks to that function, we can see evolutions happen in front of us without much code assistance. While I’ll admit that this implementation is extremely computing costly, the end results are not bad. Also, using ellipses at lower opacity was the right solution to create a more abstract looking final image.