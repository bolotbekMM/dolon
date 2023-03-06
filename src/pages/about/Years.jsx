
import Yearsitem from './YearsItem';
import css  from "./about.module.scss"
import { useTranslation } from 'react-i18next';

function Years() {
    const { t } = useTranslation();
    return ( 
        <div className={css.years}>
            <div className={css.years_container}>
                <div className={css.years_text}>
                    {
                        t("about.years.text")
                    }
                </div>
                <Yearsitem year={2018} text={t("about.years.text1")}/>
                <Yearsitem year={2019} text={t("about.years.text2")}/>
                <Yearsitem year={2020} text={t("about.years.text3")}/>
                <Yearsitem year={2021} text={t("about.years.text4")}/>
                <Yearsitem year={2022} text={t("about.years.text5")}/>
                <Yearsitem year={2023} text={t("about.years.text6")}/>
            </div>
        </div>
     );
}

export default Years;