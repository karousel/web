App.CollectionsRoute = Ember.Route.extend({
    model: function() {
        return {
            'collections': [
                {
                    path: 'hey', 
                    name: 'ete'
                },
                {
                    path: 'eye', 
                    name: 'rte', 
                },
                {
                    path: 'erte',
                    name: 'gere'
                }
            ]
        };
    }
});
