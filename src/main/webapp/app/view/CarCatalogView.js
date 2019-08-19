Ext.define('CarCatalog.view.CarCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.carCatalogView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'searchCarView',
            title: 'Меню сайта',
            region: 'west',
            collapsed: false,
            flex:1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            }

        },

        {
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                id: "buttonId",
                text: 'Файл',
                handler: function(){var window = Ext.create('Ext.window.Window', {
                    title: 'Приветсвие',
                    width: 300,
                    height: 200,
                    items:[{

                        html: 'Salamaleikum',
                        style:'margin-left:100px; margin-top:70px;',
                    }]
                });
                    window.show();}
            },
                {
                    xtype: 'button',
                    text: 'О компании'
                },'-',
                {
                    xtype: 'button',
                    text: 'Адрес магазинов'
                },'-',
                {
                    xtype: 'button',
                    text: 'Вакансии',
                    html: 'Менеджер, бухгалтер, системный-администратор, кассир, инженер, грузчики и.т.д'
                },
                {
                    xtype: 'button',
                    text : 'Кредиты по банкам:',
                    margin:'15 0 0 25',
                    menu: [
                        {text: 'Tsesna Bank'},
                        {text: 'Kaspi Bank'},
                        {text: 'Halyk Bank'},
                        {text: 'Nur Bank'},
                        {text: 'Home Bank'},
                        {text: 'Halal Bank'}
                    ]
                },'->', 'Нур-Султан'
            ]
        },
        {
            xtype: 'carGridView',
            region: 'center',
            flex:2
        },
        {
            xtype: 'tree',
            title: 'Дерево',
            region: 'center',
            collapsed: false,
            flex:3
        },

    ],
    renderTo: Ext.getBody()
});
