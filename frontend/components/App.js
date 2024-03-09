import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Figure from './Figure'
import Card from './Card'
import DatePicker from './DatePicker'
const api_key = 'DEMO_KEY'
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const[apod , setApod] = useState()
useEffect(() => {
  function getPhoto() {
    axios.get(BASE_URL)
      .then(res => {
         //console.log(res.data)
         setApod(res.data)
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  getPhoto()
} , [])
  if(!apod) return 'Fetching Photo of the Day...'
  return (
     <section> 
        <Card 
          title = {apod.title}
          text = {apod.explanation}
          imageURL = {apod.url}
          date = {apod.date}
        />
     </section>
  )
}

export default App
