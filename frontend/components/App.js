import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Figure from './Figure'
import Card from './Card'
import styled from 'styled-components'

//import DatePicker from "react-datepicker"
//import "react-datepicker/dist/react-datepicker.css"


const api_key = 'DEMO_KEY'
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


function App() {
  const[apod , setApod] = useState({})
  const [dates, setDates] = useState(new Date())
useEffect(() => {
    axios.get(BASE_URL , dates)
      .then(res => {
         console.log(res)
         setApod(res.data)
      })
      .catch(err => {
        console.error(err.message)
      })
    } 
    // setApod( {"date": "2024-03-11",
    // "explanation": "What glows in the night? This night featured a combination of usual and unusual glows. Perhaps the most usual glow was from the Moon, a potentially familiar object. The full Moon's nearly vertical descent results from the observer being near Earth's equator. As the Moon sets, air and aerosols in Earth's atmosphere preferentially scatter out blue light, making the Sun-reflecting satellite appear reddish when near the horizon.                                                                        Perhaps the most unusual glow was from the bioluminescent plankton, likely less familiar objects. These microscopic creatures glow blue, it is thought, primarily to surprise and deter predators. In this case, the glow was caused primarily by plankton-containing waves crashing onto the beach. The image was taken on Soneva Fushi Island, Maldives just over one year ago.   Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)",
    // "hdurl": "https://apod.nasa.gov/apod/image/2403/FullPlantonMoon_Horalek_1022.jpg",
    // "media_type": "image",
    // "service_version": "v1",
    // "title": "A Full Plankton Moon",
    // "url": "https://apod.nasa.gov/apod/image/2403/FullPlantonMoon_Horalek_1022.jpg"})
   ,[])
   

  if(!apod) return 'Fetching Photo of the Day...'
  return (
     <section> 
        <Card 
          title = {apod.title}
          text = {apod.explanation}
          imageURL = {apod.url}
          date = {apod.date}
          dates = {dates}
          setDates = {setDates}
        />
     </section>
  )
}

export default App
