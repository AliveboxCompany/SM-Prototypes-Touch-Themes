Ext.define('TouchThemes.view.ThemeTabs', {

    extend: 'Ext.tab.Panel',
    xtype: 'themetabs',
    height: '100%',

    config: {
        ui: 'dark',
        tabBar: {
            ui: 'dark',
            layout: {
                pack: Ext.filterPlatform('ie10') ? 'start' : 'center'
            }
        },
        activeTab: 1,
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Tab 1',
                html : 'By default, tabs are aligned to the top of a view.',
                cls: 'card dark',
                iconCls: Ext.filterPlatform('blackberry') ? 'home' : null
            },
            {
                title: 'Tab 2',
                html : 'A TabPanel can use different animations by setting layout.animation',
                cls  : 'card',
                iconCls: Ext.filterPlatform('blackberry') ? 'organize' : null
            },
            {
                title: 'Tab 3',
                html : 'User tapped Tab 3',
                cls  : 'card dark',
                iconCls: Ext.filterPlatform('blackberry') ? 'favorites' : null
            }
        ]
    }
});