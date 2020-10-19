const request = require('request-promise');
const requestURL = 'https://economia.awesomeapi.com.br/json/all/USD-BRL';

class DollarToBRL{
    /**
     * Get current dollar value in BRL.
     * @returns {number} The current dollar value in BRL.
     */
    static get = async () => {
        const res = await request.get(requestURL);
        const resJSON = await JSON.parse(res);
        return Number(resJSON.USD.high).toFixed(2);
    }
}

module.exports = DollarToBRL;
