function TestEngineNotRecognizedException(testEngine) {
    return new Error(`${testEngine} was not recognized as a test engine`);
}

TestEngineNotRecognizedException.prototype = Object.create(Error.prototype);

module.exports = TestEngineNotRecognizedException;