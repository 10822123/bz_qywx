module.exports.userinfo = (req, res, next) => {
    res.send({
        code: 200,
        msg: "success",
        data: {
            username: "admin",
            roles: ["Admin"],
            permissions: ["read:system", "write:system", "delete:system"],
            avatar: "https://i.gtimg.cn/club/item/face/img/2/16022_100.gif"
        }
    });

};
