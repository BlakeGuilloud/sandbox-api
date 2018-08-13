const { routes, methods } = require('paperplane')

const {
  fetchCollection,
  insertItem,
  fetchItemById,
  removeItemById,
  putItem,
  patchItem,
} = require('./service')

const endpoints = routes({
  '/:collectionTitle/:itemId': methods({
    PATCH: patchItem,
    GET: fetchItemById,
    DELETE: removeItemById,
    PUT: putItem,
  }),
  '/:collectionTitle': methods({
    GET: fetchCollection,
    POST: insertItem,
  }),
})

module.exports = endpoints
