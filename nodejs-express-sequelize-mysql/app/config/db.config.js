module.exports = {
    HOST: "us-cdbr-east-05.cleardb.net",
    USER: "b4e86179a0a68e",
    PASSWORD: "b2a3db63",
    DB: "heroku_1bc3ef3ee27a279?",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
