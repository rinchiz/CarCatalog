var store = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Страны СНГ',
        expanded: true,
        children:
            [{
                text: "Россия",
                children: [{
                    text: "Москва",
                    leaf: true
                }, {
                    text: "Санкт-Петербург",
                    leaf: true
                }, {
                    text: "Волгоград",
                    leaf: true
                }],
                leaf: false,
                "expanded": true
            },
                {
                    text: "Украина",
                    leaf: false
                },
                {
                    text: "Белоруссия"
                }]

    }
});

Ext.define('CarCatalog.view.Tree', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tree',
    bodyPadding: 10,
    collapsible: true,
    collapsed: true,

    extend: 'Ext.tree.Panel',
        title: 'Страны СНГ',
        width: 500,
        height: 350,
        rootVisible: true,
        store: store,
        renderTo: Ext.getBody(),
    })


