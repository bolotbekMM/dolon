import css from "./news.module.scss"
import { NewsItem, NewsSubItem } from './NewsItem';
import { useTranslation } from "react-i18next";
import { news, newsRu } from './data';
import { useEffect, useState } from 'react';

function News() {
    const { t } = useTranslation();
    const [currentNews, setCurrentNews] = useState(news)

    useEffect(() => {
        if(t("news.title") == "Новости"){
            setCurrentNews(newsRu)
        }else{
            setCurrentNews(news)
        }
    }, [t("news.title")])
    return ( 
        <div className={css.news}>
            <div className={css.news_container}>
                <div className={css.news_main}>
                    <div className={css.news_title}>
                        {
                            t("news.title")
                        }
                    </div>
                    {
                        currentNews.map((item) => {
                            return (
                                <NewsItem item={item.id} text={item.text[0]} 
                                title={item.title}
                                img={item.img}/>
                            )
                        })
                    }
                    
                </div>
                <div className={css.news_subside}>
                    <div className={css.news_subside_title}>
                        {
                            t("news.moreArticle")
                        }
                    </div>
                    {
                        currentNews.map(item => {
                            return(
                                <NewsSubItem item={item.id} key={item.id}
                                    title={item.title}
                                    img={item.img} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
     );
}

export default News;