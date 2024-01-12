import React from 'react'

const SingleCategorie = (props) => {
  const { image, name } = props
  return (
    <div>

      <div className='container text-center'>
        <img src={image} class="img-fluid" alt="" />
        <h5 className='mb-5 mt-3'> {name} </h5>
      </div>

    </div>
  )
}

export default SingleCategorie
