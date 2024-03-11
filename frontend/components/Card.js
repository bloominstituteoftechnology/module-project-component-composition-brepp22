import React, { useState }  from 'react'
import Figure from './Figure'
//import DatePicker from "react-datepicker"
import styled from 'styled-components'

const StyledCard = styled.section`
  padding: 12px;
  border: 1.5px solid black;
  color: navy;
  border-radius: 12px;
  background-color: lightgray;
  h2{
    font-size: 2.5em; 
    margin:0 0 1rem 0;
    color:navy;
  }

  p{
    margin:0 0 2rem 0;
    color:navy;
  }
`

export default function Card ({ dates, setDates, title , text , imageURL , date}) {

  
    return (
      <StyledCard className ='card'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure 
                imageURL = {imageURL}
                caption = {date}
            />
          </StyledCard>
    )
  }

 // <DatePicker selected={dates} onChange={(dates) => setDates(dates)} />   **contained in a div