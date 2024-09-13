import React from 'react'
import { useParams } from 'react-router-dom'

function UpdateContent() {
  const {contentId} = useParams()

  return (
    <div>Update Content of {contentId} Id </div>
  )
}

export default UpdateContent