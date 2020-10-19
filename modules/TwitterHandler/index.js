const Twit = require('twit');

class TwitterHandler{
    constructor(config){
        this.app = new Twit(config);
    }
    /**
     * Post a tweet with an image to twitter
     * 
     * @param {string} b64Image an image, encoded in base64.
     * @returns {void}
     */
    postImage = async (b64Image) => {
        const imageUploadRes = await this.app.post('media/upload', {media_data: b64Image});
        const id = imageUploadRes.data.media_id_string; //Getting it's ID
        await this.app.post('statuses/update', { status: '', media_ids: [id] });
    }
}

module.exports = TwitterHandler;