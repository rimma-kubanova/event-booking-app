/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abe1rdr4xein5n9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uarfz3rz",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "6kpcvpjr9qtuwvn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abe1rdr4xein5n9")

  // remove
  collection.schema.removeField("uarfz3rz")

  return dao.saveCollection(collection)
})
