#!/usr/bin/env node

module.exports = function (context) {

    /** @external */
    var fs = context.requireCordovaModule('fs'),
        path = context.requireCordovaModule('path');

    var androidPlatformDir = path.join(context.opts.projectRoot,
            'platforms', 'android'),
        googleServicesFileName = 'google-services.json';

    if (fs.existsSync(androidPlatformDir)) {
        if (fs.existsSync(googleServicesFileName)) {
            fs.writeFileSync(path.join(androidPlatformDir, googleServicesFileName), fs.readFileSync(googleServicesFileName));
        } else {
            console.log('WARNING  : File google-services.json is missing. The Kapsel Push plugin requires this file for Android.\n Expected Location: ' + path.resolve(googleServicesFileName));
        }
    }
};