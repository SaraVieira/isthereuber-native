import storeLinks from './app-stores-links.json'

const sanitizeAppName = name => name.toLowerCase().trim()

export const getAppStoreLink = (app, os) =>
  (storeLinks[sanitizeAppName(app)] || storeLinks.default)[os]
