import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import classes from "./feedback.module.scss"
import Draggable from 'react-draggable';
import FeedbackModal from './modal';

function Feedback() {

    const [modal, setModal] = useState(false)


    useEffect(() =>{
        document.body.onclick = () => {
            setModal(false)
        }
    }, [])

    return (
        <>
            <div className={classNames(classes.feedback)}>
                <div className={classNames(classes.feedbackContainer)}>
                    <p className={classNames(classes.feedbackTitle)}>
                        свяжитесь с нами
                    </p>
                    <button className={classNames(classes.feedbackBtn)} onClick={(e) => {
                        e.stopPropagation()
                        setModal(!modal)
                    }}>
                        Получить более подробную информацию
                    </button>
                </div>
                {
                    modal && <FeedbackModal />
                            
                }
            </div>
        </>
    );
}

export default Feedback;