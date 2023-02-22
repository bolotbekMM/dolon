import classNames from 'classnames';
import React from 'react';
import monitoringHero from "../../../../assets/img/mainPage/monitoringHero.png"
import classes from "./hero.module.scss"




function Hero() {
    return ( 
        <>
            <div className={classNames(classes.hero)}>
                <div className={classNames(classes.heroContainer)}>
                    <div className={classNames(classes.heroTitle)}>
                        <p className={classNames(classes.heroTitleText)}>
                            МОНИТОРИНГ
                        </p>
                    </div>
                    <div className={classNames(classes.heroContent)}>
                        <div className={classNames(classes.herolist)}>
                            <ul className={classNames(classes.heroUl)}>
                                <li className={classNames(classes.heroLi)}>
                                    <p className={classNames(classes.herolistText)}>
                                        Модуль «Мониторинг» предоставляет мощные 
                                        информационные панели и отчеты, которые 
                                        будут помогать вам контролировать 
                                        выполнение работы и отслеживать 
                                        ситуацию на всех рабочих участках.
                                    </p>
                                </li>
                                <li className={classNames(classes.heroLi)}>
                                    <p className={classNames(classes.herolistText)}>
                                        С помощью модуля «Мониторинг» вы получаете 
                                        обзорные панели (dashboards) в виде карт, 
                                        отчетов или общих 
                                        значений для мониторинга нескольких объектов.
                                    </p>
                                </li>
                                <li className={classNames(classes.heroLi)}>
                                    <p className={classNames(classes.herolistText)}>
                                        Карты отображают устья скважин, буровые 
                                        скважины, маршруты и растровые карты 
                                        в режиме реального времени, давая вам 
                                        полное представление о ваших операциях.
                                    </p>
                                </li>
                                <li className={classNames(classes.heroLi)}>
                                    <p className={classNames(classes.herolistText)}>
                                        В отчетах представлены подробные таблицы и 
                                        графики, что дает возможность получить ценные сведения. 
                                        А обзорные доски с общими значениями обеспечивают 
                                        высокоуровневый обзор ваших операций, позволяя 
                                        вам отслеживать ключевые показатели и принимать 
                                        обоснованные решения.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={classNames(classes.heroImgWrap)}>
                            <img src={monitoringHero} alt="Not found" className={classNames(classes.heroImg)} />
                        </div>
                    </div>
                </div>
            <div className={classNames(classes.shadowEllips)}>

            </div>
            </div>
        </>
     );
}

export default Hero;