module.exports = {
    server: {
        port: 5001,
        corsOptions: {
            allowedOrigins: ['http://localhost:3000'],
            optionsSuccessStatus: 200
        }

    },
    mongodb: {
        connectionString: ""
    },
    firebase: {
        projectId: 'mypage-app-prod',
        privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxqIoVAFO9nvb8\n5Kg5K7V+gczjq0z2zZVJIYRVvHvw10B/r3uZEVNMtEvagcgpS6r3SRKlGhfnQvZb\nA/ic3FVf3VzkaQRP4CxCS/2fLwaLJ+eoDt1CA48IJamzOUzpjKr9J7ANBCLu7wj5\nWxPvyQ7ATZLIJJsOet5Cv8bcBwl7SmS3u4WIdkHf9ZhwP0qT0OHYDkz2ye8PWBd2\nIw/vgqV8nLZwo7T+eNoQGyhPnoY0jkm3yU1xvAIkdF9Ta3gnVC4NQqkrRos2kXx7\nuIlGepmefyCeRq93kwEqPxUplJOOpXU1fkywNm4Mqv//XgztBggsTs60nZO/Q2gQ\n1zhGgp4xAgMBAAECggEAD4kgghOkPwm+qYDJYS58UZLCOwqI0XBK5LlEnEa+Q+Je\n5ouO8GS+dw+xLmt4+HuAeN1v/vYYLwYBCxZ+0CDIaniuHd89HEsLM8T3acsv9E1K\nCb07BgHPqTO58k1Jd4bwkPC+iXTaJTDMBRo81RQs8Q4Xjt78nDiMZSPmHOmUn65N\ncMIOY7kiHOmS5qxc1x4D1gHyGyWsGFwBmlNXGAmbWfIB9aU+GuUUoCloT0xwFCIt\njQlFYJFXlQorbjvq0bWZ/nfljcDfCJiszh0GAKsnQn3PUAXJZuQ2l0GscExSlVs9\nA3HXJr50berKIxzkhKObtlgktkQSD0rcWIacTiZJXQKBgQDYst6np1FTnxp8z2cO\nIHDtmLqDrGWbg2TQOLR4Z+byoMbaHCgBE0FkX412GCIQy5l7EI2AN82kGFvkW7k9\n2Q5Z1lMLBvukLSTUrmRFIiKiu3AsfWRRkep7yathi+g1WEnD2k7zm20qj+OcN7uP\nO26iOWYkuiFkdGumYeLGjFtzCwKBgQDR4Q94cfvMKykb4qF+RZhfoad91wVZN+DJ\nb7ADhfgDSJbWIu+WEtR+bxyHFExJyYUacpOO9uUdNwiw6PwE5dyZ6wDFEHwuqmGP\nPk47Cw3Fln33N9cAdpUzykC4N9Z/GnKi5cF6vFvFdWYNhxYRKwqskr4AkvOG0/sy\nDeEQt0/5MwKBgQCnqBRuYByi9vkWUZ0pJ95XZZAAqhRe8pTAKO8wLStY0x2myJwG\n4O/6CZe4I8nPdsbDmTXxWrtm11XZY0H54QKibRkI8hkll6vkRRzdBCEKCL0sHsPL\n/HoP1iMbsJQzGaDQwAnPnpQilvsB9XjOw6vAJWqqxbtqLkzPiPJcrWFfqwKBgGa/\nW6eHhdHKP3HbXVxIDfSjWzAMGB45cN6swuq2p1hULSPgLpK13TmYg8rNcRuegH8W\nII8Y58mJq8OQC/EJ5xmjJtlS3LiryN8rjXjyTGey6TAiMiuT4i9ckJqfG29WL1D4\nUeQYWoUsmC1/OJpnC+64WDRHvNkA5jT2/nwEgi5pAoGBAJjKmA3BFU/V0L3ThZi3\nWR8E3bYAXDAdwVmWUI4jacB1uN0XdOiq5agKC0GESS77S+a+F0RS9li0fjjvZSIY\nJf5vSt1w594LL4lbpU1kVc/sAJf1dR1rd2kM87ixGV27t3RjBAcnyoKotA1MgPQx\nbeaJCcSsgB5eHMmISBwylbfp\n-----END PRIVATE KEY-----\n',
        clientEmail: 'firebase-adminsdk-adew1@mypage-app-prod.iam.gserviceaccount.com'
    }
}