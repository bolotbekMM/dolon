import classNames from 'classnames';
import React from 'react';
import classes from "./baner.module.scss"

function Baner({
    img
}) {
    return (
        <>
            <div className={classNames(classes.baner)}>
                <div className={classNames(classes.banerBg)}>
                    <img src={img} className={classNames(classes.banerImg)} />
                </div>
            </div>
        </>
    );
}

export default Baner;