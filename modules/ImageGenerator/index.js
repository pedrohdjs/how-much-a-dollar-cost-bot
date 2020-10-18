const jimp = require('jimp');
const defaultimageURL = './assets/img/default.png';
const generatedImageURL = './assets/img/new.png';

module.exports = class ImageGenerator{
    static generate = async (dollarValue) => {
        const roundedValue = Number(dollarValue).toFixed(2);
        const textString = `${roundedValue} reais`;

        const image = await jimp.read(defaultimageURL);
        const font = await jimp.loadFont(jimp.FONT_SANS_12_BLACK);
        const generatedImage = await image.print(font,49,158,textString);
        generatedImage.write(generatedImageURL);
        return generatedImage;
    }
}