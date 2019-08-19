Ext.define('CarCatalog.controller.Controller', {
    extend: 'Ext.app.Controller',

    views: [
        'AddCarFormView',
        'CarCatalogView',
        'CarGridView',
        'SearchCarView',
        'Tree'
    ],

    stores: ['UserStore'],
    models: ['UsersModel'],


    refs:[
        {ref: 'onName', selector: 'carGridView'},
    ],

    init: function () {
        this.control(
            {
                'carGridView #name':{
                    click: this.name
                },

                'searchCarView button':{
                    // click: this.onButtonsClick
                    mouseover: this.onMauseOver
                },

                'carGridView #win':{
                    itemdblclick: this.winShow
                }


            });

    },

    name: function () {
        console.log(name);

    },
    onButtonsClick: function () {

        console.log('Im clicked no matters what button');

    },onMauseOver: function(){
        console.log('Mause over')
    },

    winShow: function () {
        console.log(record.data)
    }



});