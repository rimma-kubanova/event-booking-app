/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6kpcvpjr9qtuwvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tclc4aib",
    "name": "owner",
    "type": "email",
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
  const collection = dao.findCollectionByNameOrId("6kpcvpjr9qtuwvn")

  // remove
  collection.schema.removeField("tclc4aib")

  return dao.saveCollection(collection)
})
