const axios = require('axios');

class QywxApi {
    constructor(corpid, corpsecret) {
        this.corpid = corpid;
        this.corpsecret = corpsecret;
        this.accessToken = null;
        this.expiresAt = null;
    }

    async getAccessToken() {
        if (!this.accessToken || Date.now() >= this.expiresAt) {
            await this.refreshAccessToken();
        }
        return this.accessToken
    }

    async refreshAccessToken() {
        const url = `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${this.corpid}&corpsecret=${this.corpsecret}`;

        try {
            const response = await axios.get(url);
            this.accessToken = response.data;
            this.expiresAt = Date.now() + (response.data.expires_in - 60) * 1000; // 提前一分钟过期

            return response.data;
        } catch (error) {
            console.error('Failed to fetch access token:', error.response.data);
            throw error;
        }
    }

    clearAccessToken() {
        this.accessToken = null;
        this.expiresAt = null;
    }
}

module.exports = QywxApi;
