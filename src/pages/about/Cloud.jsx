import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import css from './about.module.scss'

function Cloud() {
    const { t, i18n } = useTranslation();
    return (
        <div className={css.cloud}>
            <div className={css.cloud_countainer}>
                <div className={css.cloud_title}>
                    {
                        t('about.cloud.title')
                    }
                </div>
                <div className={css.cloud_text}>
                    {
                        t('about.cloud.text1')
                    }
                </div>
                <div className={css.cloud_text}>
                    {
                        t('about.cloud.text2')
                    }
                </div>
                <div className={css.cloud_text}>
                    {
                        t('about.cloud.text3')
                    }
                </div>
                <div className={css.cloud_text}>
                    {
                        t('about.cloud.text4')
                    }
                </div>
            </div>
        </div>
    );
}

export default Cloud;