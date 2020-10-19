const Jimp = require('jimp');
const fs = require('fs');
const defaultimageURL = './assets/img/default.png';
const generatedImageURL = './assets/img/new.png';

class ImageGenerator{
    /**
     * Generates the image with the dollar value rounded to two decimal places, saves it to new.png 
    on assets/img, then returns the content encoded in base64.
    @param {number} dollarValue The current dollar value in BRL.
    @returns {string} the generated image's content encoded in base64.*/   
    static generate = async (dollarValue) => {
        const textString = `${dollarValue} reais`;

        const image = await Jimp.read(defaultimageURL);
        const font = await Jimp.loadFont(Jimp.FONT_SANS_12_BLACK);

        const generatedImage =  image.print(font, 49, 158, textString);
        await generatedImage.writeAsync(generatedImageURL);

        return fs.readFileSync(generatedImageURL,{encoding: 'base64'});
    }
}

module.exports = ImageGenerator;