const fs = require("fs");
const execSync = require("child_process").execSync;
const stdout = execSync("git describe --tags").toString();
const version = stdout.replace(/(\r\n|\n|\r)/gm, "");
const year = new Date().getFullYear();
fs.writeFileSync(".env.local", `REACT_APP_GIT_VERSION = "${version}"\nREACT_APP_YEAR = "${year}"`);
