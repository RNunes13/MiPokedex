
rivets.configure({
    // Attribute prefix in templates
    prefix: 'rv',

    // Preload templates with initial data on bind
    preloadData: true,

    // Root sightglass interface for keypaths
    rootInterface: '.',

    // Template delimiters for text bindings
    templateDelimiters: ['{{', '}}'],

    // Alias for index in rv-each binder
    iterationAlias(modelName) {
        return '%' + modelName + '%';
    },

    // Augment the event handler of the on-* binder
    handler(target, event, binding) {
        this.call(target, event, binding.view.models);
    },

    // Since rivets 0.9 functions are not automatically executed in expressions. If you need backward compatibilty, set this parameter to true
    executeFunctions: false,
});
