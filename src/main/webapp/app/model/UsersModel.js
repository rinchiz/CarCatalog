Ext.define('CarCatalog.model.UsersModel', {
    extend: 'Ext.data.Model',
    alias: 'widget.usersModels',
    idProperty: 'userID',

    fields: [{
        name: 'userID',
        type: 'int',
    }, {
        name: 'name',
        type: 'string',
        id: 'name'

    }, {
        name: 'surname',
        type: 'string',
        id: 'surname'
    }, {
        name: 'date',
        type: 'date'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'married',
        type: 'bool'
    }
    ]
});

