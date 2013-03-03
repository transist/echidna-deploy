var config = {
  ECHIDNA_DEPLOY_PORT: parseInt(process.env.ECHIDNA_DEPLOY_PORT) || 0
};

var githubhook = require('githubhook'),
    servers = {
        'echidna-ui': 'https://github.com/transist/echidna-ui.git',
        'echidna-api': 'https://github.com/transist/echidna-api.git',
        'echidna-dicts': 'https://github.com/transist/echidna-dicts.git',
        'echidna-spider': 'https://github.com/transist/echidna-spider.git',
        'echidna-streaming': 'https://github.com/transist/echidna-streaming.git',
        'echidna-monitoring': 'https://github.com/transist/echidna-monitoring.git',
    };

var thishook = githubhook(config.ECHIDNA_DEPLOY_PORT, servers, function (err, payload) {
    if (!err) {
        console.log(payload); // payload is the JSON blob that github POSTs to the server
    } else {
        console.log(err);
    }
});