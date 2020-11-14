const fs = require('fs');

class FileUtils {

    static createFile(filepath, content) {
        fs.writeFileSync(filepath, content);
    }
}

module.exports = FileUtils