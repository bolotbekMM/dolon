import css from "./news.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NewsItem({ img, title, text, item }) {
  const { t } = useTranslation();
  return (
    <div className={css.newsitem}>
      <div className={css.newsitem_container}>
        <div className={css.newsitem_img_wrap}>
          <img src={img} alt="" className={css.newsitem_img} />
        </div>
        <div className={css.newsitem_content}>
          <div className={css.newsitem_title}>{title}</div>
          <div className={css.newsitem_text}>{text}</div>
          <div className={css.newsitem_content_bottom}>
            <Link to={"/news/" + item} className={css.newsitem_content_link}>
              {t("news.readMore")}
            </Link>
          </div>
        </div>
        {/* <div className={css.newsitem_bottom}>
                    <button className={css.newsitem_btn}>
                        <img src={like} className={css.newsitem_btn_icon}/>
                        3
                    </button>
                    <button className={css.newsitem_btn}>
                        <img src={mess} className={css.newsitem_btn_icon}/>
                        3 комментариев
                    </button>
                </div> */}
      </div>
    </div>
  );
}

export function NewsSubItem({ img, title, item }) {
  return (
    <Link to={"/news/" + item} className={css.subitem}>
      <div className={css.subitem}>
        <div className={css.subitem_container}>
          <div className={css.subnew}>
            {
              !!title &&
              <div className={css.subitem_title}>
                {title.split(" ").slice(0, 7).join(" ")}...
              </div>
            }
            <div className={css.subitem_img_wrap}>
              <img src={img} alt="" className={css.subitem_img} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
