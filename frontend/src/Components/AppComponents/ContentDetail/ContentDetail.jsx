import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchSingleContent } from '../../../Controller/Data/contentSlice';
import content from '../../ComponentsData/content';
import LatestContents from './LatestContents';

function ContentDetail() {
    const [more,setMore] = useState(false)
    const {contentId} = useParams()
     const dispatch = useDispatch()
     useEffect(() => {
       console.log('Fetching news for ID:', contentId);
       dispatch(fetchSingleContent(contentId));
     }, [contentId, dispatch]);

     const contentData = content()
     const detail = contentData.single
     const cat = detail.map((a)=>{
        return a.category
     })
     const [category] = cat 
     const allData = contentData.data
     const filterd = allData.filter((data) => data.category == category)
     console.log({filterd})
 
     console.log({detailOfContent:detail})



     if(contentData.singleLoading){
        return (
          <div className="flex items-center  justify-center px-32 py-60 dark:bg-gray-900  md:p-32 md:py-60 min-h-[65vh] space-x-2">
          <div className="w-4 h-4 rounded-full animate-spin px-5 bg-violet-800"></div>
          <div className="w-3.5 h-3.5 rounded-full animate-spin px-4 bg-violet-700"></div>
          <div className="w-3 h-3 rounded-full animate-spin px-3 bg-violet-600"></div>
          <div className="w-2 h-2 rounded-full animate-spin px-2 bg-violet-500"></div>
          <div className="w-1.5 h-1.5 rounded-full px-2 animate-spin bg-violet-400"></div>
        </div>
        )
      }
      if(allData.singleError){
        return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>{data.error}</div>
      
      }



  return (
    <>


<div class="dark:bg-gray-900 bg-white">

    <div class="bg-gray-100 py-8">
            <div class="container mx-auto px-4">
                {detail.map((data,i)=>{
                    return(
                        <div className="" key={i}>
                            <h1 class="text-4xl font-bold text-gray-800 mb-2">{data.category} /- {data.subCategory}</h1>
                            <p class="text-gray-600">Published on {data.date}</p>
                        </div>
                    )
                })}
            </div>
        </div>

      <div class="lg:container lg:mx-auto px-2 py-8">
        {detail.map((data,i)=>{
            return(
                <div key={i} className={` xl:grid xl:grid-cols-12 gap-16 mg:gap-10`}>
                    <div className=" col-span-8 ">
                    <h1 class="text-2xl font-bold text-start mb-3">{data.title}</h1>
                    <h1 className='text-sm text-gray-800 mb-2 dark:text-white/70'>{data.eventDate}</h1>
                    <div class={` ${''} gap-4`}>
                        <div class="md:col-span-12 md:row-span-12 relative overflow-hidden rounded-lg shadow-lg group">
                            <img src={data.images[0]} alt="Nature" class="w-full max-h-[400px] object-cover"/>
                            <div
                                class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="absolute bottom-0 left-0 right-0 p-4">
                                    {/* <h3 class="text-2xl font-bold text-white">Explore Nature</h3> */}
                                    <p class="text-white">{data.category}</p>
                                </div>
                            </div>
                        </div>
                            <div className="grid px-2 py-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {data.images.length != 1 && 
                                    data.images.map((img,i)=>{
                                        return(
                                            <div class="relative overflow-hidden max-h-m3 max-w-80 rounded-md shadow-lg group">
                                            <img src={img} alt="Technology" class="w-full max-h-32 object-cover"/>
                                            <div
                                                class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div class="absolute bottom-0 left-0 right-0 p-4">
                                                    <h4 class="text-xl font-bold text-white">{data.category}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                        </div>
                        </div>
                            <div className="">
                                <p className='text-lg'>{data.description}</p>
                            </div>
                        </div>

                    
                    <div className=" flex flex-col col-span-3 pt-8 lg:pt-0">
                        <h1 class="text-4xl font-bold text-start mb-5">Releated Contents With This {data.category}</h1>
                    
                        {filterd.slice(more ? -20 : -6).reverse().map((single,i)=>{
                            return(
                                <div key={i} className="">
                                    <Link to={`/content-detail/${single._id}`} onClick={()=> dispatch(fetchSingleContent(single._id))}>
                                      <div  class="flex items-start mb-3 pb-3 dark:text-white/80">
                                        <a href="#" class="inline-block mr-3">
                                            <div class="w-20 h-20 bg-cover bg-center rounded-sm"
                                                style={{backgroundImage:`url(${single.images[0]})`}}>
                                            </div>
                                        </a>
                                        <div class="text-sm">
                                            <p class="text-gray-600 text-xs dark:text-white/60">{single.eventDate}</p>
                                            <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 dark:text-white/70 leading-none">{single.title.substring(0,30)}{single.title.length >= 30 && '...'}</a>
                                            <p>{single.description.substring(0,50)}{single.description.length >= 50 && '...'}</p>
                                        </div>
                                     </div>
                                     </Link>
                                </div>
                            )
                        })}
                      <div className="mx-2">
                      <button onClick={()=> setMore(!more)} className='text-blue-700 justify-start underline px-2  my-3'>{more ? 'Less' :'More'}</button>
                      </div>
                    </div>
                </div>
            )
        })}
    </div>

    <LatestContents latestContents={allData}/>
</div>


    {/* <div class="flex flex-col">
    <div class="bg-gray-100 py-8">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">Blog Title Here</h1>
            <p class="text-gray-600">Published on April 4, 2023</p>
        </div>
    </div>
    <div class="bg-white py-8">
       {detail.map((data,i)=>{
        return (
                <div class="container mx-auto px-4 gap-12 md:gap-0 flex flex-col md:flex-row">
                <div class="w-full md:w-3/4 px-4">
                    <img src={data.images[0]} alt="Blog Featured Image" class="mb-8"/>
                    <div class="prose max-w-none">
                    <p>{data.description}</p>
                    </div>
                </div>
                <div class="w-full md:w-1/4 px-4">
                 <div className=" flex flex-col col-span-3">
                    <h1 class="text-4xl font-bold text-start mb-5">Releated Content</h1>
                
                    {filterd.slice(more ? -20 : -6).reverse().map((single,i)=>{
                        return(
                            <div key={i} className="">
                                <Link to={`/content-detail/${single._id}`} onClick={()=> dispatch(fetchSingleContent(single._id))}>
                                <div  class="flex items-start mb-3 pb-3 dark:text-white/80">
                                    <a href="#" class="inline-block mr-3">
                                        <div class="w-20 h-20 bg-cover bg-center rounded-sm"
                                            style={{backgroundImage:`url(${single.images[0]})`}}>
                                        </div>
                                    </a>
                                    <div class="text-sm">
                                        <p class="text-gray-600 text-xs dark:text-white/60">{single.eventDate}</p>
                                        <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 dark:text-white/70 leading-none">{single.title.substring(0,30)}{single.title.length >= 30 && '...'}</a>
                                        <p>{single.description.substring(0,50)}{single.description.length >= 50 && '...'}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                    <div className="mx-2">
                    <button onClick={()=> setMore(!more)} className='text-blue-700 justify-start underline px-2  my-3'>{more ? 'Less' :'More'}</button>
                    </div>
                </div>
                </div>
            </div>
        )
       })}
    </div>

    <LatestContents latestContents={allData}/>
       
</div> */}
</>
  )
}

export default ContentDetail