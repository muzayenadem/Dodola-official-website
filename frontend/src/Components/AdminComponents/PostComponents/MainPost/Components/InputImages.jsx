import React, {useState, useRef, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setMainPostImages,removeMainImages } from '../../../../../Controller/Posts/MainPostSlicer'
import { FaChevronLeft } from 'react-icons/fa'

function InputImages({page,previous,next}) {
     const [photos, setPhotos] = useState([])
    const [isDraging, setIsDraging] = useState(false)
    const [enable,setEnable] = useState(true)
    const fileRef = useRef()

    const dispatch = useDispatch()
 
 
    
    const images = useSelector(state => state.mainPost.images)

    const selectImages = (e)=>{
      dispatch(setMainPostImages(e.target.files))      
    }

    
   useEffect(()=>{
    if(images.length > 0){
        setEnable(false)
    }
   },[images])

    console.log({mainPostImages:images})
  return (
    <section className=' '>
        <div className='  gap-6 flex flex-col md:w-[90%] '>
            <div className='bg-white dark:bg-gray-900 py-10 lg:px-6   gap-3 rounded-md shadow-md shadow-neutral-500 flex flex-col '>
                <h1 className='title'>Leave the picture of your</h1>
              <div className="w-full px-1 md:px-6">
              <div className="flex gap-10 py-10 content-center items-center   justify-center w-full border-dashed font-bold border-blue-900 border-[2px] text-center">
                    <p className=''>Drop your images here</p>
                    <label>
                    <p className='text-blue-700 ' role='button' >Browse</p>
                    <input type='file' name='file'  onChange={selectImages} multiple className='hidden'></input>
                    </label>
                </div>
              </div>
                <div className="container flex justify-start flex-wrap overflow-y-auto mt-6">
                 {images.length > 0 && 
                    images.map((img,i)=>{
                        return (
                            <div key={i} className='relative w-[120px] h-[120px] mb-4 ml-2 '>
                            <div className="flex justify-center items-center p-1 w-6 h-6 absolute top-1 right-1 bg-white rounded-full">
                            <span className='  text-xl font-bold   p-1  text-black rounded-full'  onClick={()=> dispatch(removeMainImages(images.indexOf(img))) & console.log({index:images.indexof(img)})}>&times;</span>
                            </div>
                          
                            {/* <video className='w-[100%] h-[100%] rounded-lg' controls>
                              <source src={URL.createObjectURL(img)} type='video/mp4'></source>
                              <source src={URL.createObjectURL(img)} type='video/ogg'></source>
                              nfffffffffffff
                            </video> */}
                            <img className='w-[100%] h-[100%] rounded-lg' src={URL.createObjectURL(img)} alt=''/>
                        </div>
                        )
                    })
                 }
                </div>
            </div>
        </div>
    </section>
  )
}

export default InputImages