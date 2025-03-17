import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgurl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Prueba tecnica </h1>
      <button onClick={handleClick}>New fact</button>
      {fact && <p>{fact}</p>}
      {imgurl && <img src={imgurl} alt={`Img extracted using the firsr word of ${fact}`} />}
    </main>
  )
}

export default App
