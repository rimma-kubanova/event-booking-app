/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6kpcvpjr9qtuwvn")

  // remove
  collection.schema.removeField("zckxyhuu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dnhplcu",
    "name": "price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6kpcvpjr9qtuwvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zckxyhuu",
    "name": "number",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("9dnhplcu")

  // remove
  collection.schema.removeField("appeoii1")

  return dao.saveCollection(collection)
})
