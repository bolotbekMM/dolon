import React from 'react'
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import classes from "./ticker.module.scss"
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import { useTranslation } from 'react-i18next';


function Carousel() {
    const { t } = useTranslation();
    return (
        <>
            <div className={classes.tickerWrap_title}>
                {t("trackerTitle")}:
            </div>
            <div className={classes.tickerWrap}>
                <HorizontalTicker duration={15000} >
                        <li className={classes.ticker}>
                            Kazakhmys 
                        </li>
                        <li className={classes.ticker}>
                            RCG
                        </li>
                        <li className={classes.ticker}>
                            Yer-Tai
                        </li>
                        <li className={classes.ticker}>
                            QAZ GOLD MINERALS
                        </li>
                        <li className={classes.ticker}>
                            Vertex
                        </li>
                        <li className={classes.ticker}>
                            Turan Industrial
                        </li>
                        <li className={classes.ticker}>
                            Caravan Resources
                        </li>
                        <li className={classes.ticker}>
                            GeoServicesKg
                        </li>
                </HorizontalTicker>
            </div>
        </>
    )
}
export default Carousel