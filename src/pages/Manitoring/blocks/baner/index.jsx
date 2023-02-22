import classNames from 'classnames';
import React from 'react';
import monitoringImg from "../../../../assets/img/mainPage/monitoringImg.jpg"
import classes from "./baner.module.scss"

function Baner() {
    return (
        <>
            <div className={classNames(classes.baner)}>
                <div className={classNames(classes.banerBg)}>
                    <img src={monitoringImg} className={classNames(classes.banerImg)} />
                </div>
                {/* <div className={classNames(classes.banerContainer)}>
                    <div className={classNames(classes.content)}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Cupiditate natus facere 
                            doloremque vel tenetur animi dolor 
                            quibusdam facilis necessitatibus.
                        </p>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Baner;