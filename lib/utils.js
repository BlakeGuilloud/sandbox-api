
const mongoose = require('mongoose')

const { Types: { ObjectId } } = mongoose

const getRawCollection = collectionTitle =>
  mongoose.connection.db.collection(collectionTitle)

const getItemById = ({ collectionTitle, itemId }) =>
  getRawCollection(collectionTitle).find({ _id: ObjectId(itemId) }).toArray()

const postItemToCollection = ({ params: { collectionTitle }, body }) =>
  getRawCollection(collectionTitle).insert(body)

const getCollectionByTitle = collectionTitle =>
  getRawCollection(collectionTitle).find({}).toArray()

const removeItem = ({ collectionTitle, itemId }) =>
  getRawCollection(collectionTitle).remove({ _id: ObjectId(itemId) })

const replaceItem = ({ collectionTitle, itemId, body }) =>
  getRawCollection(collectionTitle).update({ _id: ObjectId(itemId) }, body)

const updateItem = ({ collectionTitle, itemId, body }) =>
  getRawCollection(collectionTitle).findOneAndUpdate({ _id: ObjectId(itemId) }, { $set: body })

module.exports = {
  getCollectionByTitle,
  getItemById,
  postItemToCollection,
  removeItem,
  updateItem,
  replaceItem,
}
