// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    // mount: {},
    // plugins: [],
    installOptions: {
        dest: "web_modules"
    },
    devOptions: {
        port: 8000
    },
    // buildOptions: {},
};
