import React, { useEffect, useState } from 'react'
import RentalHuseTop from './RentalHuseTop'
import axios from 'axios'
import { rentalHouseLink } from '../../../../Controller/CommonLinks/ServerLink'

function RentalHouse() {
    const [houses, setHouses] = useState([])
    useEffect(()=>{
        try {
            const response =  axios.get(`${rentalHouseLink}/all-properties`+'')

            console.log({response})
            setHouses(response.data)
        } catch (error) {
            console.log({errror:error.message})
        }
    },[])
    console.log({houses})
  return (
    <div>
        <RentalHuseTop/>
    </div>
  )
}

export default RentalHouse