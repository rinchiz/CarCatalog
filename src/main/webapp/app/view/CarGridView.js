Ext.define('CarCatalog.view.CarGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.carGridView',
    title: 'Пользователи',
    width: 600,
    height: 300,
    frame: true,
    store: 'UserStore',

    listeners: {
        itemdblclick : function( a, record, item, index, e, eOpts ){
            console.log(record.data);
            var window = Ext.create('Ext.window.Window',{
                title: 'Данные о пользователе',
                width: 500,
                height: 400,
                id: 'win',
                bodyPadding: 10,
                renderTo: Ext.getBody(),

                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Имя',
                    allowBlank: true,
                    value:record.data.name,
                    id: 'name'
                },
                    {
                        xtype: 'textfield',
                        name: 'surname',
                        fieldLabel: 'Фамилия',
                        allowBlank: true,
                        value:record.data.surname,
                    },
                    {
                        xtype: 'textfield',
                        name: 'data',
                        fieldLabel: 'Дата рождения',
                        format: 'd/m/Y',
                        allowBlank: true,
                        value:record.data.date,
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'E-mail',
                        allowBlank: true,
                        value:record.data.email,
                    },
                    {
                        xtype: 'checkbox',
                        boxLabel: 'Женат(Замужем)',
                        name: 'Married',
                        inputValue: 'Married',
                        checked:'true',
                    }
                ],
                buttons: [{
                    text: 'Сохранить',
                    handler: function() {
                        // действие отправки
                    }
                },

                ],
            })
            window.show();
        }
    },

    columns: [{
        header: 'Имя',
        dataIndex: 'name',
    }, {
        header: 'Фамилия',
        dataIndex: 'surname'
    }, {
        header: 'Дата рождения',
        dataIndex: 'date',
        xtype: 'datecolumn',
        format: 'd/m/Y',
        flex: 1
    }, {
        header: 'E-mail',
        dataIndex: 'email',
        flex: 1
    }, {
        header: 'Женат/Замужем',
        dataIndex: 'married',
        flex: 1
    }],



    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Удалить',
                    iconCls: 'icon-delete',
                    disabled: true
                },
            ]
        }
    ],
});
