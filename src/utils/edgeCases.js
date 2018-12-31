export default async ({ name, info: { country = { long_name: '' } } }) => {
  const data = await fetch(
    'https://isthereuber.in/.netlify/functions/edge-cases'
  )
  const cases = await data.json()
  const match = cases.find(
    c =>
      (c.city && c.city.includes(name.toLowerCase())) ||
      (c.country && c.country.includes(country.long_name.toLowerCase()))
  )
  if (match) {
    return match.message
  }
}
