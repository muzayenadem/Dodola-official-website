import React, { useEffect, useState } from 'react'
import { water } from '../../Images/images'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import newsData from '../../../ComponentsData/newsData'
import ButtomCard from '../DetailNews/ButtomCard'

function NewsCard({data}) {


 const [more,setMore] = useState(false)
 const {newsId} = useParams()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log('Fetching news for ID:', newsId);
  //   dispatch(fetchSingleNews(newsId));
  // }, [newsId, dispatch]);
  
    //console.log({newsId})
    //const data = newsData()

    console.log({data})
    const news = data.data
    // const detail = data.single
    const comment = data.comment
    const reaction = data.reaction
    console.log({reaction})
    console.log({comment})
    //console.log({detail})
    if(data.filterLoading){
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
      if(data.error){
        return <div className='text-center py-32 min-h-[70vh] dark:bg-gray-900'>{data.error}</div>
      
      }
        if(!data.data.length & data.filterLoading == false){
            return <div className='text-center py-32  dark:bg-gray-800'>there is no data </div>
          }
      //  const news = data.data
  return (
    <div className='dark:bg-gray-800 dark:text-white/80'>

{news.map((data,i)=>{
            return(
                <div key={i} className={`w-full`}>
                    <div className=" col-span-8 ">
                    <h1 class="text-4xl font-bold text-start mb-5">{data.title}</h1>
                    <h1 className='text-sm text-gray-800 mb-4 dark:text-white/70'>{data.eventDate}</h1>
                    <div class={` container mx-auto'} gap-4`}>
                        <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                            <img src={data.files[0]} alt="Nature" class="w-full max-h-[400px] object-cover"/>
                            <div
                                class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 class="text-2xl font-bold text-white">Explore Nature</h3>
                                    <p class="text-white">Discover the beauty of the natural world</p>
                                </div>
                            </div>
                        </div>
         
                {/* {data.files.length != 1 && 
                    data.files.map((img,i)=>{
                        return(
                            <div class="relative overflow-hidden max-h-48 max-w-80 rounded-2xl shadow-lg group">
                            <img src={img} alt="Technology" class="w-full max-h-48 object-cover"/>
                            <div
                                class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 class="text-xl font-bold text-white">Tech Innovations</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                } */}
          
           
            </div>
               <ButtomCard data={data} comment={comment} reaction={reaction}/>
                    </div>

{/*                     
                    <div className=" flex flex-col col-span-3">
                    <h1 class="text-4xl font-bold text-start mb-5">Latest News</h1>
                    
                    {news.slice(more ? -20 : -6).reverse().map((single,i)=>{
                            return(
                                <div key={i} className="">
                                    <Link to={`/news-detail/${single._id}`} onClick={()=> dispatch(fetchSingleNews(single._id))}>
                                      <div  class="flex items-start mb-3 pb-3 dark:text-white/80">
                                        <a href="#" class="inline-block mr-3">
                                            <div class="w-20 h-20 bg-cover bg-center rounded-sm"
                                                style={{backgroundImage:`url(${single.files[0]})`}}>
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
                    </div> */}
                </div>
            )
        })}










        {/* {news.map((data,i)=>{
            return (
                <div class="p-2 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img class="object-cover rounded-md w-full h-64" src={data.files[0]} alt="Article"/>
            
                <div class="p-6">
                    <div>
                        <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{data.category}</span>
                        <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{data.title}</a>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
                    </div>
            
                    <div class="mt-4">
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <img class="object-cover w-10 h-10 rounded-full" src={water} alt="Avatar"/>
                                <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{data.admin.fname} {data.admin.lname}</a>
                            </div>
                            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{data.eventDate}</span>
                        </div>
                    </div>
                </div>
            </div>
            )
        })} */}


    </div>
  )
}

export default NewsCard