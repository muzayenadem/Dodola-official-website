import React from 'react'

function Progress({method,setMethod}) {
    console.log({method})
    const {category,subCategory,inputPage,defaults,reviewPage,submitPage,congraPage} = method
  return (
    <div className="flex p-5 py-10 lg:w-[60%] justify-center items-center lg:ml-[15%]">
    <div className={`flex w-1/3 h-1  ${defaults == false  || congraPage? 'bg-green-600' :'bg-slate-200'}`}><span className='w-5 h-5 rounded-full bg-green-600 -mt-2'></span></div>
    <div className={`flex w-1/3 h-1  ${inputPage == true || reviewPage == true || submitPage == true || congraPage ? 'bg-green-600' :'bg-slate-200'}`}><span className={`w-5 h-5 rounded-full ${inputPage == true || reviewPage == true || submitPage == true || congraPage? ' bg-green-600':'bg-slate-200'} -mt-2`}></span></div>
    <div className={`flex w-1/3 h-1  ${reviewPage == true || submitPage == true || congraPage ? 'bg-green-600' :'bg-slate-200'}`}><span className={`w-5 h-5 rounded-full ${reviewPage || submitPage || congraPage? ' bg-green-600':'bg-slate-200'} -mt-2`}></span></div>
    <div className={`flex w-1/3 h-1 justify-between  ${submitPage || congraPage ? 'bg-green-600' :'bg-slate-200'}`}><span className={`w-5 h-5 rounded-full ${submitPage || congraPage? ' bg-green-600':'bg-slate-200'} -mt-2`}></span><span className={`w-5 h-5 rounded-full ${congraPage? ' bg-green-600':'bg-slate-200'} -mt-2`}></span></div>
  </div>
  )
}


export default Progress