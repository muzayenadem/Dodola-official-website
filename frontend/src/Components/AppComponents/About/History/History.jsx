import React, { useEffect } from 'react'
import { city2, fafate, water } from '../../Images/images'
import TopHistory from './TopHistory'
import HistoryArticle from './HistoryArticle'
import {links} from './links'
import {Link} from 'react-scroll'
import HistoryArticles from './HistoryArticles'
import { useTranslation } from 'react-i18next'


function History() {
    useEffect(()=>{
        document.title= 'dodola History'
      })
     const {t} = useTranslation()
     const data = [
    {
        title:t("Location"),
        des:t("LocationDef"),
        link:t("Location"),
    },
    {
        title:t('Foundation'),
        des:t("FoundationDef"),
        link:t("Foundation")
    },
    {
        title:t("Naming"),
        des:t("NamingDef"),
        title:t("Naming"),
    },
    {
        title:t("Demographics"),
        des:t("DemographicsDef"),
        title:t("Demographics"),
    },
    {
        title:t("EconomicLife"),
        des:t("EconomicLifeDef"),
        title:t("EconomicLife"),
    },
    {
        title:t("CulturalS"),
        des:t("CulturalDef"),
        title:t("CulturalS"),
    },
    {
        title:t("ModernDevelopment"),
        des:t("ModernDevelopmentDef"),
        title:t("ModernDevelopment"),
    },
]
  return (
    <section className="bg-white  dark:bg-gray-900">
        <TopHistory/>
    <div className="container lg:px-6 py-10 mx-auto">
        <div className="grid lg:grid-cols-4 gap-2 ">
            <div className="col-span-3 flex flex-col gap-8">
                {/* {data.map((data,i) => {
                    return(<div key={i}>
                        <HistoryArticles title={data[i].title} des={data[i].des} id={data[i].link}/>
                    </div>)
                } )} */}
                <HistoryArticles title={data[0].title} des={data[0].des} id={data[0].link}/>
                <HistoryArticles title={data[1].title} des={data[1].des} id={data[1].link}/>
                <HistoryArticles title={data[2].title} des={data[2].des} id={data[2].link}/>
                <HistoryArticles title={data[3].title} des={data[3].des} id={data[3].link}/>
                <HistoryArticles title={data[4].title} des={data[4].des} id={data[4].link}/>
                <HistoryArticles title={data[5].title} des={data[5].des} id={data[5].link}/>
                <HistoryArticles title={data[6].title} des={data[6].des} id={data[6].link}/>
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

