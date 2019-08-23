const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/poxyA', {
        target: 'http://localhost:9000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/poxyA": "/"
        },
        // cookieDomainRewrite: "http://localhost:3000"
    }));
};