const request = require('request-promise');
const requestURL = 'https://economia.awesomeapi.com.br/json/all/USD-BRL';

module.exports = class DollarToBRL{
    static get = async () => {
        const res = await request.get(requestURL);
        const resJSON = await JSON.parse(res);
        return resJSON.USD.high;
    }
}

