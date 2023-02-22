import React from 'react'
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import classes from "./ticker.module.scss"
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';


function Carousel() {
  
    return (
        <>
            <div className={classes.tickerWrap}>
                <HorizontalTicker duration={15000} >
                        <li className={classes.ticker}>
                            казахмыс
                        </li>
                        <li className={classes.ticker}>
                            ертай
                        </li>
                        <li className={classes.ticker}>
                            казголдминерал
                        </li>
                        <li className={classes.ticker}>
                            тураниндастриал
                        </li>
                </HorizontalTicker>
            </div>
        </>
    )
}
export default Carousel