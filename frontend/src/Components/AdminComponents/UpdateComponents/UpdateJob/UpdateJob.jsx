import React from 'react'
import { useParams } from 'react-router-dom'

function UpdateJob() {
    const {jobId} = useParams()
  return (
    <div>Update Job of {jobId} Id</div>
  )
}

export default UpdateJob