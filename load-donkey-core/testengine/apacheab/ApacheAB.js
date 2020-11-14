const ShellUtils = require('../../common/utils/ShellUtils');
const TestEngineResultParser = require('../TestEngineResultParser');
const ApacheABResultConfigs = require('./ApacheABResultConfigs');

class ApacheAB {

    static perform(specs) {
        const results = specs.functions.map(entry => {
            return {
                provider: entry.provider,
                result: ShellUtils.run(buildCommand(specs, entry.address))
            }
        });

        return TestEngineResultParser.parse(results, ApacheABResultConfigs);
    }
}

buildCommand = (specs, host) => {
    let command = "ab";

    command += ` -n ${specs.parameters.requestCount}`;

    if (specs.parameters.concurrencyCount) {
        command += ` -c ${specs.parameters.concurrencyCount}`;
    }

    if (specs.request.method && specs.request.method == 'POST') {
        command += ` -p ${specs.request.bodyFile}`;
    }
    
    if (specs.request.headers) {
        specs.request.headers.forEach(element => {
            command += ` -H '${element.key}: ${element.value}'`;
        });
    }

    if (specs.request.contentType) {
        command += ` -T ${specs.request.contentType}`;
    }

    command += ` ${host}`;

    if (specs.request.queryParameters) {
        if (!host.includes("?")) {
            command += '?';
        }
        specs.request.queryParameters.forEach(element => {
            command += `&${element.key}=${element.value}`;
        });
    }

    return command;
}

module.exports = ApacheAB;