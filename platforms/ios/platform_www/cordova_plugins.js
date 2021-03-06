cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova-plugin-contacts.contacts",
        "file": "plugins/cordova-plugin-contacts/www/contacts.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "id": "cordova-plugin-contacts.Contact",
        "file": "plugins/cordova-plugin-contacts/www/Contact.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "id": "cordova-plugin-contacts.convertUtils",
        "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
        "pluginId": "cordova-plugin-contacts"
    },
    {
        "id": "cordova-plugin-contacts.ContactAddress",
        "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactError",
        "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactField",
        "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactFindOptions",
        "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactName",
        "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactOrganization",
        "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "id": "cordova-plugin-contacts.ContactFieldType",
        "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
        "pluginId": "cordova-plugin-contacts",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-contacts.contacts-ios",
        "file": "plugins/cordova-plugin-contacts/www/ios/contacts.js",
        "pluginId": "cordova-plugin-contacts",
        "merges": [
            "navigator.contacts"
        ]
    },
    {
        "id": "cordova-plugin-contacts.Contact-iOS",
        "file": "plugins/cordova-plugin-contacts/www/ios/Contact.js",
        "pluginId": "cordova-plugin-contacts",
        "merges": [
            "Contact"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-file.DirectoryEntry",
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "id": "cordova-plugin-file.DirectoryReader",
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "id": "cordova-plugin-file.Entry",
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "id": "cordova-plugin-file.File",
        "file": "plugins/cordova-plugin-file/www/File.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "id": "cordova-plugin-file.FileEntry",
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "id": "cordova-plugin-file.FileError",
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "id": "cordova-plugin-file.FileReader",
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "id": "cordova-plugin-file.FileSystem",
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "id": "cordova-plugin-file.FileUploadOptions",
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "id": "cordova-plugin-file.FileUploadResult",
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "id": "cordova-plugin-file.FileWriter",
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "id": "cordova-plugin-file.Flags",
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "id": "cordova-plugin-file.LocalFileSystem",
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "id": "cordova-plugin-file.Metadata",
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "id": "cordova-plugin-file.ProgressEvent",
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "id": "cordova-plugin-file.fileSystems",
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "pluginId": "cordova-plugin-file"
    },
    {
        "id": "cordova-plugin-file.requestFileSystem",
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "id": "cordova-plugin-file.isChrome",
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "id": "cordova-plugin-file.iosFileSystem",
        "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "id": "cordova-plugin-file.fileSystems-roots",
        "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "id": "cordova-plugin-file.fileSystemPaths",
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-geolocation.Coordinates",
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.Position",
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "id": "cordova-plugin-screen-orientation.screenorientation.ios",
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.ios.js",
        "pluginId": "cordova-plugin-screen-orientation",
        "merges": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.printer.Printer",
        "file": "plugins/de.appplant.cordova.plugin.printer/www/printer.js",
        "pluginId": "de.appplant.cordova.plugin.printer",
        "clobbers": [
            "plugin.printer",
            "cordova.plugins.printer"
        ]
    },
    {
        "id": "kapsel-plugin-apppreferences.AppPreferences",
        "file": "plugins/kapsel-plugin-apppreferences/www/apppreferences.js",
        "pluginId": "kapsel-plugin-apppreferences",
        "clobbers": [
            "sap.AppPreferences"
        ]
    },
    {
        "id": "kapsel-plugin-inappbrowser.inappbrowser",
        "file": "plugins/kapsel-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "kapsel-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "kapsel-plugin-i18n.i18n",
        "file": "plugins/kapsel-plugin-i18n/www/i18n.js",
        "pluginId": "kapsel-plugin-i18n"
    },
    {
        "id": "kapsel-plugin-authproxy.AuthProxy",
        "file": "plugins/kapsel-plugin-authproxy/www/authproxy.js",
        "pluginId": "kapsel-plugin-authproxy",
        "clobbers": [
            "sap.AuthProxy"
        ]
    },
    {
        "id": "kapsel-plugin-authproxy.oauth2",
        "file": "plugins/kapsel-plugin-authproxy/www/oauth2.js",
        "pluginId": "kapsel-plugin-authproxy",
        "clobbers": [
            "sap.AuthProxy.OAuth2"
        ]
    },
    {
        "id": "kapsel-plugin-authproxy.saml2",
        "file": "plugins/kapsel-plugin-authproxy/www/saml2.js",
        "pluginId": "kapsel-plugin-authproxy",
        "clobbers": [
            "sap.AuthProxy.SAML2"
        ]
    },
    {
        "id": "kapsel-plugin-authproxy.datajsClient",
        "file": "plugins/kapsel-plugin-authproxy/www/datajsClient.js",
        "pluginId": "kapsel-plugin-authproxy",
        "runs": true
    },
    {
        "id": "kapsel-plugin-authproxy.utils",
        "file": "plugins/kapsel-plugin-authproxy/www/utils.js",
        "pluginId": "kapsel-plugin-authproxy",
        "runs": true
    },
    {
        "id": "kapsel-plugin-authproxy.webStrategies",
        "file": "plugins/kapsel-plugin-authproxy/www/webStrategies.js",
        "pluginId": "kapsel-plugin-authproxy",
        "runs": true
    },
    {
        "id": "kapsel-plugin-attachmentviewer.AttachmentViewer",
        "file": "plugins/kapsel-plugin-attachmentviewer/www/attachmentviewer.js",
        "pluginId": "kapsel-plugin-attachmentviewer",
        "clobbers": [
            "sap.AttachmentViewer"
        ]
    },
    {
        "id": "kapsel-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/kapsel-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "kapsel-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "kapsel-plugin-online.Online",
        "file": "plugins/kapsel-plugin-online/www/online.js",
        "pluginId": "kapsel-plugin-online",
        "clobbers": [
            "sap.Online"
        ]
    },
    {
        "id": "kapsel-plugin-cachemanager.CacheManager",
        "file": "plugins/kapsel-plugin-cachemanager/www/cachemanager.js",
        "pluginId": "kapsel-plugin-cachemanager",
        "clobbers": [
            "sap.CacheManager"
        ]
    },
    {
        "id": "kapsel-plugin-calendar.Calendar",
        "file": "plugins/kapsel-plugin-calendar/www/calendar.js",
        "pluginId": "kapsel-plugin-calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "id": "kapsel-plugin-logon.LogonCore",
        "file": "plugins/kapsel-plugin-logon/www/common/modules/MAFLogonCorePlugin.js",
        "pluginId": "kapsel-plugin-logon",
        "clobbers": [
            "sap.logon.Core"
        ]
    },
    {
        "id": "kapsel-plugin-logon.LogonLocalStorage",
        "file": "plugins/kapsel-plugin-logon/www/common/modules/LogonCoreLocalStorage.js",
        "pluginId": "kapsel-plugin-logon",
        "clobbers": [
            "sap.logon.CoreLocalStorage"
        ]
    },
    {
        "id": "kapsel-plugin-logon.LogonUtils",
        "file": "plugins/kapsel-plugin-logon/www/common/modules/Utils.js",
        "pluginId": "kapsel-plugin-logon",
        "clobbers": [
            "sap.logon.Utils"
        ]
    },
    {
        "id": "kapsel-plugin-logon.LogonStaticScreens",
        "file": "plugins/kapsel-plugin-logon/www/common/modules/StaticScreens.js",
        "pluginId": "kapsel-plugin-logon",
        "clobbers": [
            "sap.logon.StaticScreens"
        ]
    },
    {
        "id": "kapsel-plugin-logon.LogonDynamicScreens",
        "file": "plugins/kapsel-plugin-logon/www/common/modules/DynamicScreens.js",
        "pluginId": "kapsel-plugin-logon",
        "clobbers": [
            "sap.logon.DynamicScreens"
        ]
    },
    {
        "id": "kapsel-plugin-logon.Logon",
        "file": "plugins/kapsel-plugin-logon/www/common/modules/LogonController.js",
        "pluginId": "kapsel-plugin-logon",
        "clobbers": [
            "sap.Logon"
        ]
    },
    {
        "id": "kapsel-plugin-logon.LogonJsView",
        "file": "plugins/kapsel-plugin-logon/www/common/modules/LogonJsView.js",
        "pluginId": "kapsel-plugin-logon",
        "clobbers": [
            "sap.logon.LogonJsView",
            "sap.logon.IabUi"
        ]
    },
    {
        "id": "kapsel-plugin-encryptedstorage.Encrypted",
        "file": "plugins/kapsel-plugin-encryptedstorage/www/encryptedstorage.js",
        "pluginId": "kapsel-plugin-encryptedstorage",
        "clobbers": [
            "sap.EncryptedStorage"
        ]
    },
    {
        "id": "kapsel-plugin-fioriclient.FioriClient",
        "file": "plugins/kapsel-plugin-fioriclient/www/fioriclient.js",
        "pluginId": "kapsel-plugin-fioriclient",
        "clobbers": [
            "sap.FioriClient"
        ]
    },
    {
        "id": "kapsel-plugin-fioriclient.FioriClient-Launchpad",
        "file": "plugins/kapsel-plugin-fioriclient/www/launchpad.js",
        "pluginId": "kapsel-plugin-fioriclient"
    },
    {
        "id": "kapsel-plugin-logger.Logging",
        "file": "plugins/kapsel-plugin-logger/www/logger.js",
        "pluginId": "kapsel-plugin-logger",
        "clobbers": [
            "sap.Logger"
        ]
    },
    {
        "id": "kapsel-plugin-settings.Settings",
        "file": "plugins/kapsel-plugin-settings/www/settings.js",
        "pluginId": "kapsel-plugin-settings",
        "clobbers": [
            "sap.Settings"
        ]
    },
    {
        "id": "kapsel-plugin-settings.AppSettings",
        "file": "plugins/kapsel-plugin-settings/www/appsettings.js",
        "pluginId": "kapsel-plugin-settings",
        "merges": [
            "sap.Settings"
        ]
    },
    {
        "id": "kapsel-plugin-push.Push",
        "file": "plugins/kapsel-plugin-push/www/push.js",
        "pluginId": "kapsel-plugin-push",
        "clobbers": [
            "sap.Push"
        ]
    },
    {
        "id": "kapsel-plugin-toolbar.toolbar",
        "file": "plugins/kapsel-plugin-toolbar/www/toolbar.js",
        "pluginId": "kapsel-plugin-toolbar",
        "clobbers": [
            "window.sap.Toolbar"
        ]
    },
    {
        "id": "kapsel-plugin-usage.Usage",
        "file": "plugins/kapsel-plugin-usage/www/usage.js",
        "pluginId": "kapsel-plugin-usage",
        "clobbers": [
            "sap.Usage"
        ]
    },
    {
        "id": "kapsel-plugin-voicerecording.VoiceRecording",
        "file": "plugins/kapsel-plugin-voicerecording/www/recording.js",
        "pluginId": "kapsel-plugin-voicerecording",
        "clobbers": [
            "sap.VoiceRecording"
        ]
    },
    {
        "id": "kapsel-plugin-voicerecording.VoiceRecording-AudioRecorder",
        "file": "plugins/kapsel-plugin-voicerecording/www/audiorecorder.js",
        "pluginId": "kapsel-plugin-voicerecording"
    },
    {
        "id": "kapsel-plugin-voicerecording.VoiceRecording-AudioScreen",
        "file": "plugins/kapsel-plugin-voicerecording/www/screen.js",
        "pluginId": "kapsel-plugin-voicerecording"
    },
    {
        "id": "kapsel-plugin-voicerecording.VoiceRecording-Utils",
        "file": "plugins/kapsel-plugin-voicerecording/www/recordingutils.js",
        "pluginId": "kapsel-plugin-voicerecording"
    },
    {
        "id": "cordova-plugin-customurlscheme.LaunchMyApp",
        "file": "plugins/cordova-plugin-customurlscheme/www/ios/LaunchMyApp.js",
        "pluginId": "cordova-plugin-customurlscheme",
        "clobbers": [
            "window.plugins.launchmyapp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-camera": "2.4.0",
    "cordova-plugin-contacts": "2.3.0",
    "cordova-plugin-device": "1.1.5",
    "cordova-plugin-dialogs": "1.3.2",
    "cordova-plugin-file": "4.3.1",
    "cordova-plugin-geolocation": "2.4.2",
    "cordova-plugin-screen-orientation": "1.4.2",
    "cordova-plugin-splashscreen": "4.0.2",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-network-information": "1.3.2",
    "cordova-plugin-privacyscreen": "0.3.1",
    "cordova-plugin-whitelist": "1.3.2",
    "kapsel-plugin-corelibs": "3.15.0",
    "de.appplant.cordova.plugin.printer": "0.7.0",
    "kapsel-plugin-apppreferences": "3.15.0",
    "kapsel-plugin-inappbrowser": "3.15.0",
    "kapsel-plugin-i18n": "3.15.0",
    "kapsel-plugin-authproxy": "3.15.0",
    "kapsel-plugin-attachmentviewer": "3.15.0",
    "kapsel-plugin-barcodescanner": "3.15.0",
    "kapsel-plugin-online": "3.15.0",
    "kapsel-plugin-cachemanager": "3.15.0",
    "kapsel-plugin-calendar": "4.4.4",
    "kapsel-plugin-ui5": "3.15.0",
    "kapsel-plugin-logon": "3.15.0",
    "kapsel-plugin-cdsprovider": "3.15.0",
    "kapsel-plugin-encryptedstorage": "3.15.0",
    "kapsel-plugin-federationprovider": "3.15.0",
    "kapsel-plugin-fioriclient": "3.15.0",
    "kapsel-plugin-logger": "3.15.0",
    "kapsel-plugin-multidex": "3.15.0",
    "kapsel-plugin-settings": "3.15.0",
    "kapsel-plugin-push": "3.15.0",
    "kapsel-plugin-toolbar": "3.15.0",
    "kapsel-plugin-usage": "3.15.0",
    "kapsel-plugin-voicerecording": "3.15.0",
    "cordova-plugin-customurlscheme": "4.2.0"
};
// BOTTOM OF METADATA
});