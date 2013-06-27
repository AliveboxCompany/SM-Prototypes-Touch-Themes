Ext.define('TouchThemes.view.ThemesContainer', {

    extend: 'Ext.Container',
    xtype: 'themescontainer',

    config: {
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnThemeDefault',
                        text: 'Default Theme',
                        themeName: 'default'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnThemeBlackberry',
                        text: 'Blackberry Theme',
                        themeName: 'blackberry'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnThemeWindowsPhone',
                        text: 'WindowsPhone Theme',
                        themeName: 'windows'
                    }
                ]
            },
            {
                xtype: 'themetabs'
            }
        ]
    }
});