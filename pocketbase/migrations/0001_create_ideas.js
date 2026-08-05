migrate(
  (app) => {
    const collection = new Collection({
      name: 'ideas',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: '',
      deleteRule: '',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'category', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        { name: 'objective', type: 'text' },
        { name: 'technologies', type: 'text' },
        { name: 'status', type: 'text' },
        { name: 'favorite', type: 'bool' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('ideas')
    app.delete(collection)
  },
)
