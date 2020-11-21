const axios = require('axios');

const baseUrl = 'https://vgmdb.info';

class Vgmdbinfo {
    static async getAlbum(albumId, format = 'json') {
        const qs = {
            params: {
                format,
            }
        };
        const res = await axios.get(`${baseUrl}/album/${albumId}`, qs);
        return res.data;
    }

    static async searchAlbum(query, format = 'json') {
        const qs = {
            params: {
                format,
            }
        };
        const res = await axios.get(`${baseUrl}/search/albums/${query}`, qs);
        return res.data;
    }
}

module.exports = Vgmdbinfo;
