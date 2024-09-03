import React from 'react'

function HistoryArticles({title,des,Hist,pic,id}) {
  return (
    <section id={id} className=" border-b-[1px] dark:text-white/80 border-neutral-300 py-5">
    <div className="w-full mx-auto space-y-4">
        <h1 className="text-3xl font-bold leading-none">{title}</h1>
        {/* <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">Magaalaa Dodola</a>
            <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">Bara Dhaabatte</a>
            <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">Eenyhuun hundeeffamte</a>
        </div> */}
    </div>
    <div className="dark:text-gray-800 py-6 px-2 lg:px-10 ">
    <p className=" dark:text-white/60">
       {des}
    </p>
    </div>
</section>
  )
}

export default HistoryArticles