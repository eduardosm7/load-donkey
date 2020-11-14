const ApacheAB = require("./apacheab/ApacheAB");
const TestEngineNotRecognizedException = require("../common/exception/TestEngineNotRecognizedException");

class TestEngineDecider {

    static decide(testEngineName) {
        switch (testEngineName) {
            case 'ab':
                return ApacheAB;
        }

        throw TestEngineNotRecognizedException(testEngineName);
    }
}

module.exports = TestEngineDecider;