Ext.define('TouchThemes.controller.ThemesController', {

    extend: 'Ext.app.Controller',

    statics: {

        THEME_PLATFORMS: {
            default: 'chrome',
            blackberry: 'blackberry',
            windows: 'ie10'
        }

    },

    config: {
        refs: {
            btnThemeDefault : 'themescontainer button[itemId=btnThemeDefault]',
            btnThemeBlackberry : 'themescontainer button[itemId=btnThemeBlackberry]',
            btnThemeWindowsPhone : 'themescontainer button[itemId=btnThemeWindowsPhone]'
        },

        control: {
            btnThemeDefault: {
                tap: 'changeTheme'
            },
            btnThemeBlackberry: {
                tap: 'changeTheme'
            },
            btnThemeWindowsPhone: {
                tap: 'changeTheme'
            }
        }
    },

    changeTheme: function(argButton,argNewValue){
        var tmpThemePlatform = TouchThemes.controller.ThemesController.THEME_PLATFORMS[argButton.themeName];
        window.location.assign(location.pathname + '?platform=' + tmpThemePlatform);
    }

});