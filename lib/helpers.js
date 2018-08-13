const {
  compose,
  juxt,
  objOf,
  path,
  prop,
} = require('ramda')

const params = prop('params')
const collectionTitle = path(['params', 'collectionTitle'])
const itemId = path(['params', 'itemId'])
const collectionTitleToObj = compose(
  objOf('collectionTitle'),
  collectionTitle,
)

const itemIdToObj = compose(
  objOf('itemId'),
  itemId,
)

const bodytoObj = compose(
  objOf('body'),
  prop('body'),
)

const getUpdatePayload = juxt([
  collectionTitleToObj,
  itemIdToObj,
  bodytoObj,
])

module.exports = {
  collectionTitle,
  getUpdatePayload,
  params,
}
