import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NewsItem, NewsSubItem } from "../../news/NewsItem";
import css from "./news.module.scss"
import { news, newsRu } from "../../news/data";


function MainNewsBlock({ newItem = 0 }) {
    const { t } = useTranslation();
    const [currentNews, setCurrentNews] = useState(news)

    useEffect(() => {
        if (t("news.title") == "Новости") {
            setCurrentNews(newsRu)
        } else {
            setCurrentNews(news)
        }
    }, [t("news.title")])

    return (
        <>
            <div className={css.news}>
                <div className={css.news_title}>
                    {
                        t("news.title")
                    }
                </div>
                <div className={css.news_container}>

                    <div className={css.news_main}>
                        <NewsItem item={currentNews[newItem].id} text={currentNews[0].text[newItem]}
                            title={currentNews[newItem].title}
                            img={currentNews[newItem].img} />
                    </div>
                    <div className={css.news_subside}>
                        {
                            currentNews.map(item => {
                                return (
                                    <NewsSubItem item={item.id} key={item.id}
                                        title={item.title}
                                        img={item.img} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainNewsBlock;