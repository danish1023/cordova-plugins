cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-spinner/www/spinner-plugin.js",
        "id": "cordova-plugin-spinner.SpinnerPlugin",
        "pluginId": "cordova-plugin-spinner",
        "clobbers": [
            "SpinnerPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-native-dialer/www/CallNumber.js",
        "id": "cordova-plugin-native-dialer.CallNumber",
        "pluginId": "cordova-plugin-native-dialer",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "id": "cordova-plugin-flashlight.Flashlight",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "file": "plugins/cordova-plugin-headsetdetection/www/HeadsetDetection.js",
        "id": "cordova-plugin-headsetdetection.HeadsetDetection",
        "pluginId": "cordova-plugin-headsetdetection",
        "clobbers": [
            "window.HeadsetDetection"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-spinner": "1.1.0",
    "cordova-plugin-x-toast": "2.7.0",
    "cordova-plugin-native-dialer": "1.0.0",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-headsetdetection": "3.0.0"
}
// BOTTOM OF METADATA
});