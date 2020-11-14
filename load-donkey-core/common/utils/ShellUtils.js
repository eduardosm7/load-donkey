const { execSync } = require('child_process');

class ShellUtils {

    static run(cmd) {
        return execSync(cmd).toString();
    }
}

module.exports = ShellUtils;