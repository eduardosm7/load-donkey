const TestEngine = require("../testengine/TestEngine");

class LoadTester {

    static test(specs) {
        const testEngine = new TestEngine(specs);
        const results = testEngine.performLoadTest();
        return results;
    }
}

module.exports = LoadTester;