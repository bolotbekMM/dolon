import css from "./news.module.scss"
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { news, newsRu } from "./data";
import { useEffect, useState } from "react";

function New(

) {
    const { t } = useTranslation();
    const { id } = useParams();
    
    const [currentNews, setCurrentNews] = useState(news)
    const  newElem = currentNews.find(elem => elem.id == id)
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
                    <div className={css.newsitem}>
                        <div className={css.newsitem_container}>
                            <div className={css.newsitem_img_wrap}>
                                <img src={newElem.img} alt="" className={css.newsitem_img} />
                            </div>
                            <div className={css.newsitem_content}>
                                <div className={css.newsitem_title}>
                                    {
                                        newElem.title
                                    }
                                </div>
                                <div className={css.newsitem_texts}>
                                    {
                                        newElem.text.map(text => {
                                            return <div key={text} className={css.newsitem_text}>
                                                {
                                                    text
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default New;