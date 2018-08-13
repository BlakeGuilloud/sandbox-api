const {
  compose,
  composeP,
  head,
  mergeAll,
  prop,
} = require('ramda')
const { json } = require('paperplane')
const {
  getCollectionByTitle,
  getItemById,
  postItemToCollection,
  removeItem,
  replaceItem,
  updateItem,
} = require('./utils')
const {
  collectionTitle,
  getUpdatePayload,
  params,
} = require('./helpers')

const fetchCollection = compose(
  composeP(
    json,
    getCollectionByTitle,
  ),
  collectionTitle,
)

const insertItem = compose(
  composeP(
    json,
    head,
    prop('ops'),
    postItemToCollection,
  ),
)

const fetchItemById = compose(
  composeP(
    json,
    head,
    getItemById,
  ),
  params,
)

const removeItemById = compose(
  removeItem,
  params,
)

const putItem = compose(
  replaceItem,
  mergeAll,
  getUpdatePayload,
)

const patchItem = compose(
  updateItem,
  mergeAll,
  getUpdatePayload,
)

module.exports = {
  fetchCollection,
  fetchItemById,
  insertItem,
  patchItem,
  putItem,
  removeItemById,
}
