const ApacheAB = require("./apacheab/ApacheAB");
const TestEngineDecider = require("./TestEngineDecider");

class TestEngine {

    constructor(specs) {
        this.specs = specs;
    }

    performLoadTest() {
        const engine = TestEngineDecider.decide(this.specs.testEngine);
        return engine.perform(this.specs);
    }
}

module.exports = TestEngine;