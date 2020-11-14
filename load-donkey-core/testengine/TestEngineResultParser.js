class TestEngineResultParser {

    static parse(results, configs) {

        return configs.map(config => {
            return {
                key: config.key,
                title: config.title,
                data: results.map(result => {
                    return {
                        key: result.provider,
                        value: result.result.match(config.regex)[1]
                    };
                })
            };
        });
    }
}

module.exports = TestEngineResultParser;