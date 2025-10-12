import React, {useState, useRef, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { FaChevronLeft } from 'react-icons/fa'
import { setMainPostImages,removeMainImages } from '../../../../Controller/Posts/MainPostSlicer'
import { removeUpdateContentImage, setUpdateContentImage } from '../../../../Controller/Data/contentSlice'

function InputImages({stateData}) {
     const [photos, setPhotos] = useState([])
    const [isDraging, setIsDraging] = useState(false)
    const [enable,setEnable] = useState(true)
    const fileRef = useRef()

    const dispatch = useDispatch()
 
 
    
    const images = useSelector(state => state.mainPost.images)

    const selectImages = (e)=>{
      dispatch(setUpdateContentImage(e.target.files))      
    }

    
   useEffect(()=>{
    if(stateData?.images?.length > 0){
        setEnable(false)
    }
   },[])

   const deletePhoto = (deletedUrl) => {
       dispatch(removeUpdateContentImage(deletedUrl));
   };
    console.log({mainPostImages:stateData?.images})
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
               {
                  stateData?.images?.length > 0 &&
                  stateData?.images?.map((file,i)=>{
                      return (
                          <div key={i} className={`relative  w-[120px] h-[120px]'} mb-4 ml-2 `}>
                            <div className={``}>
                            <div className={`top-1 right-1 flex justify-center items-center p-1 w-6 h-6 absolute  bg-white rounded-full`}>
                            <span className='  text-xl font-bold   p-1  text-black rounded-full'  onClick={()=> deletePhoto(stateData?.images?.indexOf(file))}>&times;</span>
                            </div>
                            </div>
                            
                            {/* {getFileType(file.name) == 'image/jpeg'  &&   */}
                              {typeof file === "string" ? (
                                // Server image (URL string)
                                <img
                                  className="w-full h-full rounded-lg object-cover"
                                  src={file}
                                  alt="News content"
                                />
                              ) : (
                                // Newly uploaded file (File object)
                                file.type.startsWith("image/") ? (
                                  <img
                                    className="w-full h-full rounded-lg object-cover"
                                    src={URL.createObjectURL(file)}
                                    alt="Uploaded content"
                                  />
                                ) : (
                                  <video
                                    className="w-full h-full rounded-lg object-cover"
                                    controls
                                    src={URL.createObjectURL(file)}
                                  />
                                )
                              )}
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