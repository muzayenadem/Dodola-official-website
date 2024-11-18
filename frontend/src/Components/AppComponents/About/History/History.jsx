import React, { useEffect } from 'react'
import { city2, fafate, water } from '../../Images/images'
import TopHistory from './TopHistory'
import HistoryArticle from './HistoryArticle'
import {links} from './links'
import {Link} from 'react-scroll'
import HistoryArticles from './HistoryArticles'

function History() {
    useEffect(()=>{
        document.title= 'dodola History'
      })
  return (
    <section className="bg-white  dark:bg-gray-900">
        <TopHistory/>
    <div className="container lg:px-6 py-10 mx-auto">
        <div className="grid lg:grid-cols-4 gap-2 ">
            <div className="col-span-3 flex flex-col gap-8">
                <HistoryArticles title={data[0].title} des={data[0].des} id={data[0].link}/>
                <HistoryArticles title={data[1].title} des={data[1].des} id={data[1].link}/>
                <HistoryArticles title={data[2].title} des={data[2].des} id={data[2].link}/>
                <HistoryArticles title={data[3].title} des={data[3].des} id={data[3].link}/>
                <HistoryArticles title={data[4].title} des={data[4].des} id={data[4].link}/>
            </div>
            <div className="col-span-1 hidden lg:block sticky top-24 left-0 dark:bg-purple-500 py-8 rounded-lg px-6 w-full shadow-sm shadow-neutral-300 h-96 bg-white">
                <ul className='flex underline flex-col gap-3 '>
                    {
                        data.map(({_id,title,link},i)=>{
                        return <li key={i} className=' hover:text-blue-500 hover:no-underline'>
                            <Link activeClass='active' to={link} spy={true} smooth={true} offset={-70}duration={500}>
                            {title}
                            </Link>
                        </li>
                        })
                    }
                </ul>
            </div>
        </div>
        <div className="py-20">
            <HistoryArticle/>
            <HistoryArticle/>
            <HistoryArticle/>
        </div>
    </div>
</section>
  )
}

export default History

const data = [
    {
        title:'Location',
        des:'Dodola town is located in the southern part of Ethiopia in Oromia National Regional State, West Arsi zone, at a distance of 320 km from Addis Ababa and 75 km from Shashemene.  ',
        link:'Location'
    },
    {
        title:'Foundation',
        des:"The town established in 1902 E.C by  city council .Dodola  Town , one of the level two cities of West Arsi Zone of Oromia National Regional State. According to the data obtained from the archived document of the town depicted that Dodola city was first established in 1902 near the mountain called “TulluDodola”_(5 kilometer far from the present location of the town). It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa). It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa). It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa). It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa). It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa). It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa). It is named after the administrative center of the woreda, Dodola. It was the capital city of Ganale Awraja. Ganale's modern administration leadership was begun by Fit Awrary Woldemeckael Buie Falama(fiit awraarii Woldamikaa'el Bu'ii Falamaa).",
        link:'Foundation'
    },
    {
        title:'Terminology',
        des:'The traffic volume is therefore used in the design of unpaved roads, as opposed to the paved roads which require the conversion of traffic volumes into the appropriate cumulative number of equivalent standard axles.',
        link:'Terminology'
    },
    {
        title:'Huminity',
        des:'The traffic volume is therefore used in the design of unpaved roads, as opposed to the paved roads which require the conversion of traffic volumes into the appropriate cumulative number of equivalent standard axles.',
        link:'Huminity'
    },
    {
        title:'Terms',
        des:'The traffic volume is therefore used in the design of unpaved roads, as opposed to the paved roads which require the conversion of traffic volumes into the appropriate cumulative number of equivalent standard axles.',
        link:'Terms'
    },
    {
        title:'Named By',
        des:'The traffic volume is therefore used in the design of unpaved roads, as opposed to the paved roads which require the conversion of traffic volumes into the appropriate cumulative number of equivalent standard axles.',
        link:'Named By'
    },
]