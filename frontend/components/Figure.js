import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  display: block;
  max-width: 50%;

  img{
    height: 350px;
    width: 350px;
  }
  
  figcaption{
    font-style: italic;
  }

`

export default function Figure ({imageURL , caption}) {
    return (
      <StyledFigure>
              <img src={imageURL} />
              <figcaption>Picture of the Day taken on {caption}</figcaption>
            </StyledFigure>
    )
  }
