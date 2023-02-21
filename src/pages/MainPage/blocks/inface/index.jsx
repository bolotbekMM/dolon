import interfaceImg from "../../../../assets/img/mainPage/interface.jpg"
import classes from './inface.module.scss'

function Inface() {
    return ( 
        <>
            <div className={classes.inface}>
                <h2 className={classes.infaceTitle}>    
                    УДОБНЫЙ ИНТЕРФЕЙС
                </h2>
                <div className={classes.infaceImgWrap}>
                    <img src={interfaceImg} alt="Not found" className={classes.infaceImg} height={1180}/>
                </div>
            </div>
        </>
     );
}

export default Inface;