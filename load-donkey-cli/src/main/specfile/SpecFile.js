const fs = require('fs');
const yaml = require('js-yaml');

class SpecFile {

    static load(specFilePath) {
        const content = fs.readFileSync(specFilePath, 'utf8');
        return yaml.safeLoad(content);
    }
}

module.exports = SpecFile;