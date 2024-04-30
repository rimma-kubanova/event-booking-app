/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6kpcvpjr9qtuwvn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "appeoii1",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6kpcvpjr9qtuwvn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "appeoii1",
    "name": "field",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
