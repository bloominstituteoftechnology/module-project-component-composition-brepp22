import React, {useState , useEffect} from 'react'
import App from './App'
import axios from 'axios'
export default function DatePicker ({ date }) {
    const [dates , setDates] = useState([])
    const [selectedDate , setSelectedDate] = useState(null)

    useEffect (() => {
         const fetchDates = axios.get(BASE_URL)
            .try(res => {
               setDates(date) 
            }) 
            .catch(err => {
                console.error(err.message)
            })

            fetchDates()
    }, [])
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <h2> Select a Date </h2>
            <DatePicker 
                selected = {selectedDate}
                onChange = {handleDateChange}
                filterDate = {date => dates.includes(date.toISOString().slice(0, 10))}
                />
        </div>
    )
}

    