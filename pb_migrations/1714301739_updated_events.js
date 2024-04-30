/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abe1rdr4xein5n9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nyyrywg7",
    "name": "photo",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abe1rdr4xein5n9")

  // remove
  collection.schema.removeField("nyyrywg7")

  return dao.saveCollection(collection)
})
