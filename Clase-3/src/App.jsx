import './App.css'
import { useState, useEffect } from 'react'

const API_URL_FACT_CATS = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()

  const [imgurl, setImgurl] = useState()

  useEffect(() => {
    fetch(API_URL_FACT_CATS)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImgurl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Prueba tecnica </h1>
      {fact && <p>{fact}</p>}
      {imgurl && <img src={imgurl} alt={`Img extracted using the firsr word of ${fact}`} />}
    </main>
  )
}

export default App
