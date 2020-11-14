const FileUtils = require("../common/utils/FileUtils");
const pug = require('pug');
const os = require('os');

const REPORTS_FOLDER_PATH = `${os.homedir()}/load-donkey-reports`;
const REPORT_TEMPLATE_PATH = __dirname + '/../resources/templates/report.pug';

class Report {

    static generate(results) {
        var content = pug.renderFile(REPORT_TEMPLATE_PATH, {
            title: 'Load Donkey Report',
            results: results
        });
        FileUtils.createFile(REPORTS_FOLDER_PATH, `report-${new Date().getTime()}.html`, content);
    }
}

module.exports = Report