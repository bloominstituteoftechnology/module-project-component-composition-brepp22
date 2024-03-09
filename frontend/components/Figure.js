import React from 'react'

export default function Figure ({imageURL , caption}) {
    return (
      <figure>
              <img src={imageURL} />
              <figcaption>Picture of the Day taken on {caption}</figcaption>
            </figure>
    )
  }
