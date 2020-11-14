#!/usr/bin/env node

const loadtester = require('load-donkey-core/loadtester/LoadTester');
const specfile = require('./specfile/SpecFile');
const report = require('./report/Report');

class Application {
    static main() {
        const specs = specfile.load(process.argv[2]);
        console.log("Running performance tests...");
        const results = loadtester.test(specs);
        report.generate(results);
        console.log("Benchmarking report was successfully generated!");
    }
}

Application.main()