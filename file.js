const Jimp = require('jimp');

const inputImagePath = 'input.jpg';
const outputImagePath = 'output.jpg';

const blurRadius = 10; // adjust the blur radius to your liking

Jimp.read(inputImagePath)
  .then(image => {
    // resize the image to improve performance
    image.resize(800, Jimp.AUTO);

    // blur the image using the Gaussian blur algorithm
    image.blur(blurRadius);

    // composite the original image over the blurred image
    image.composite(image, 0, 0);

    // save the output image
    return image.writeAsync(outputImagePath);
  })
  .then(() => {
    console.log(`Successfully added background blur effect to ${inputImagePath}`);
  })
  .catch(err => {
    console.error(`Error adding background blur effect to ${inputImagePath}: ${err}`);
  });
