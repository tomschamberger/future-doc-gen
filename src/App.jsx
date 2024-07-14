import { useState } from 'react'
import Document from './Document'
import './App.css'


function App() {

  const [data, setData] = useState({
    heading: "Hello World",
    paragraph: "This is a paragraph"
  })

  return (
    <Document data={data} />
  )
}

export default App
