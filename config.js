// This configuration file contains only production + sqlite settings with disabled 'useUpdateCheck'.
// For additional settings please check config.example.js

var path = require('path');
var config;

var productionSettings = {
    url: process.env.OPENSHIFT_APP_DNS || 'my-ghost-blog.com',
    server: {
        host: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
        port: process.env.OPENSHIFT_NODEJS_PORT || '2368'
    }
};

config = {
    production: {
        url: 'http://' + productionSettings.url,
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: productionSettings.server.host,
            port: productionSettings.server.port
        },
        privacy: {
            useUpdateCheck: false
        }
    }
};

module.exports = config;
