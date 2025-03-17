const API_URL_FACT_CATS = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(API_URL_FACT_CATS)
  const data = await res.json()
  const { fact } = data
  return fact
}
