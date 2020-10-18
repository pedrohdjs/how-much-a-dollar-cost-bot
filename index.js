const DollarToBRL = require('./modules/DollarToBRL');
const ImageGenerator = require('./modules/ImageGenerator');

async function run () {
    const valorDoDolar = await DollarToBRL.get();
    const generatedImage = await ImageGenerator.generate(valorDoDolar);
}

run();