module.exports.constructor = async (req, res, next) => {
    const QywxApi = require('../lib/QywxApi')
    try {
        const corpid = '1000086';
        const corpsecret = 'OH3RmuQjF9buCngb7Sp9ngPQvzEDeXvmf1C_-FSZ8C4';
        
        
        const qywxApi = new QywxApi(corpid, corpsecret);        
        qywxApi.getAccessToken()
            .then(data => {   
                console.log('Access token:', data);    
                res.send({
                    status: 200,
                    message: 'success',
                    data: data
                })
            })            

            .catch(error => console.error('Failed to fetch access token:', error));
    } catch (error) {
        next(error);
    }
};