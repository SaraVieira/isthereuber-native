const sanitizeAppName = name => name.toLowerCase().trim()

export const getAppStoreLink = async (app, os) => {
  const data = await fetch('https://isthereuber.in/.netlify/functions/apps')
  const storeLinks = await data.json()
  const application = storeLinks[sanitizeAppName(app)] || storeLinks.default

  console.log(application[os])

  return application[os]
}
