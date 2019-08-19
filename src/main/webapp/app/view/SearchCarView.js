var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"AL", "name":"Alabama"},
        {"abbr":"AK", "name":"Alaska"},
        {"abbr":"AZ", "name":"Arizona"}
    ]
});

Ext.define('CarCatalog.view.SearchCarView', {
        extend: 'Ext.form.Panel',
        alias: 'widget.searchCarView',
        bodyPadding: 10,
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                text: 'Файл',
                handler: function () {alert('Привет!');
                }
            }, '->', 'Mechta.kz', {
                xtype: 'button',
                id: 'cabinetButton',
                text: 'Кабинет'
            }, '-', {
                xtype: 'button',
                text: 'Акции'
            }, '-', {
                xtype: 'button',
                text: 'Бонусы'
            }, {
                xtype: 'textfield',
                allowBlank: false,
                emptyText: 'найти', //подсказка в текстовом поле
                minLength: 3,
                maxLength: 15
            }]

        }],
        items: [
            {
                xtype: 'panel',
                title: 'Техника',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
                layout: 'accordion',
                items: [
                    {
                        xtype: 'panel',
                        title: 'Л. Толстой',
                        html: 'Произведения Л. Толстого: ....'
                    },
                    {
                        xtype: 'panel',
                        title: 'Ф. Достоевский',
                        html: 'Произведения Ф. Достоевского: ...'
                    },
                    {
                        xtype: 'panel',
                        title: 'И. Тургенев',
                        html: 'Произведения И. Тургенева: ...'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Вход',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
                layout: 'column',
                defaults: {
                    xtype: 'form',
                    columnWidth:0.5,
                    labelAlign: 'top',
                    anchor: '100%'
                },


                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Логин',
                        labelAlign: 'top',
                        cls: 'field-margin',
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Vessel Code',
                        labelAlign: 'top',
                        cls: 'field-margin',
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Пароль',
                        labelAlign: 'top',
                        cls: 'field-margin',
                        flex: 1
                    },

                    {
                        xtype: 'button',
                        cls: 'field-margin',
                        text: 'ок'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Техника',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
                items: [
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Vessel Code',
                        queryMode: 'local',
                        // labelAlign: 'top',
                        displayField: 'name',
                        valueField: 'abbr',
                        // fields: ['abbr', 'name'],
                        store: states

                    },
                    {
                        xtype: 'datefield',
                        anchor: '100%',
                        fieldLabel: 'From',
                        name: 'from_date',
                        maxValue: new Date()  // limited to the current date or prior
                    }, {
                        xtype: 'datefield',
                        anchor: '100%',
                        fieldLabel: 'To',
                        name: 'to_date',
                        value: new Date()  // defaults to today
                    }

                ]
            }
        ],


    }
    );





/*{
          xtype: 'textfield',
          layout: 'fir',
          name: 'search',
          fieldLabel: 'IMO',
          maxLength: 300
      },
      {
          xtype: 'textfield',
          layout: 'fir',
          name: 'search',
          fieldLabel: 'VCN',
          maxLength: 300
      },*/
