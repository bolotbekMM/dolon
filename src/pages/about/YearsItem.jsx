import css  from "./about.module.scss"


function Yearsitem({
    year,
    text
}) {
    return ( 
        <div className={css.yearsitem}>
            <div className={css.yearsitem_year}>
                {
                    year
                }
            </div>
            <div className={css.yearsitem_text}>
                {
                    text
                }
            </div>
        </div>
     );
}

export default Yearsitem;