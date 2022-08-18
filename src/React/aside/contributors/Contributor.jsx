import React from 'react'
import {useParams} from 'react-router-dom'

const Contributor = () => {
  const params = useParams()
  console.log(params);
  return (
    <div>
      <h3>composant contributor</h3>
    </div>
  )
}

export default Contributor
