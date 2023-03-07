import css from "./about.module.scss"
import { useTranslation } from 'react-i18next';
import classNames from "classnames";

function Mission() {
    const { t } = useTranslation();
    return ( 
        <div className={css.mission}>
            <div className={css.mission_container}>
                <div className={css.mission_content}>
                    <div className={css.mission_left}>
                        <div className={css.mission_title}>
                            {
                                t("about.mission.title")
                            }
                        </div>
                        <div className={classNames(css.mission_text, css.mission_quote)}>
                            {
                                t("about.mission.text4")
                            }
                        </div>
                    </div>
                    <div className={css.mission_right}>
                        <div className={css.mission_text}>
                            {
                                t("about.mission.text1")
                            }
                        </div>
                        <div className={css.mission_text}>
                            {
                                t("about.mission.text2")
                            }
                        </div>
                        <div className={css.mission_text}>
                            {
                                t("about.mission.text3")
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Mission;