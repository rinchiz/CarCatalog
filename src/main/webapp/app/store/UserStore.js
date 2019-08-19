Ext.define('CarCatalog.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'CarCatalog.model.UsersModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'users.json',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});
