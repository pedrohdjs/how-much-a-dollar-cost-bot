const DollarToBRL = require('./modules/DollarToBRL');
const ImageGenerator = require('./modules/ImageGenerator');
const TwitterHandler = require('./modules/TwitterHandler');
const {twitter:config} = require('./config.json');

const handler = new TwitterHandler(config);
let lastDollarBRLValue = 0;

/**
 * The bot's default action. Checks if the dollar value has changed, and, if so, the
 * bot generates the image and then posts it to twitter.
 */
async function action () {
    const dollarBRLValue = await DollarToBRL.get();

    //Generate and post the image only on dollar value update.
    if (dollarBRLValue === lastDollarBRLValue) return;

    lastDollarBRLValue = dollarBRLValue;
    const generatedImageB64 = await ImageGenerator.generate(dollarBRLValue);
    await handler.postImage(generatedImageB64);
}


async function init () {
    await action();
    setTimeout(action,1000*60*15);//Check for dollar value updates every 15 minutes.
}

init();