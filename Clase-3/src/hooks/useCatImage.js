import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imgurl, setImgurl] = useState()

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

  return { imgurl }
}
