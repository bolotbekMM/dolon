import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import css from './about.module.scss'

function Excourse() {
    const { t, i18n } = useTranslation();
    return ( 
        <div className={css.excoure}>
            <div className={css.excoure_container}>
                <div className={css.excoure_title}>
                    {
                        t("about.excourse.title")
                    }
                </div>
                <div className={css.excoure_text}>
                    {
                        t("about.excourse.text1")
                    }
                </div>
                <div className={css.excoure_text}>
                    {
                        t("about.excourse.text2")
                    }
                </div>
                <div className={css.excoure_text}>
                    {
                        t("about.excourse.text3")
                    }
                </div>
                <div className={css.excoure_text}>
                    {
                        t("about.excourse.text4")
                    }
                </div>
            </div>
            <div className={classNames(css.shadowEllips)}>

            </div>
        </div>
     );
}

export default Excourse;