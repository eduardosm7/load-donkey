const fs = require('fs');

class FileUtils {

    static createFile(dir, filename, content) {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(`${dir}/${filename}`, content);
    }
}

module.exports = FileUtils