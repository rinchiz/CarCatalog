Ext.application({
    name: 'CarCatalog',
    appFolder: 'app',
    controllers: [
        'Controller'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'carCatalogView'
                },

            ]
        });
    }

});
