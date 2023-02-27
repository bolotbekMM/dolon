import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import classes from "./feedback.module.scss"
import Draggable from 'react-draggable';
import FeedbackModal from './modal';

function Feedback({ text, question, block=false }) {

    const [modal, setModal] = useState(false)


    useEffect(() => {
        document.body.onclick = () => {
            setModal(false)
        }
    }, [])

    if(block){
        return (
            <>
                <div className={classNames(classes.feedback, classes.feedbackBlock)}>
                    <div className={classNames(classes.feedbackContainer)}>
                        <p className={classNames(classes.feedbackTitle)}>
                            свяжитесь с нами
                        </p>
                        {
                            !!text && <p className={classNames(classes.feedbackText)}>
                                {
                                    text
                                }
                            </p>
                        }
                        <button className={classNames(classes.feedbackBtn)} onClick={(e) => {
                            e.stopPropagation()
                            setModal(!modal)
                        }}>
                            Получить более подробную информацию
                        </button>
                        {
                            !!question && <button className={classNames(classes.feedbackBtn, classes.feedbackBtnQuestion)} onClick={(e) => {
                                e.stopPropagation()
                                setModal(!modal)
                            }}>
                                задать вопрос
                            </button>
                        }
                    </div>
                    {
                        modal && <FeedbackModal close={setModal} />
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <div className={classNames(classes.feedback)}>
                <div className={classNames(classes.feedbackContainer)}>
                    <p className={classNames(classes.feedbackTitle)}>
                        свяжитесь с нами
                    </p>
                    {
                        !!text && <p className={classNames(classes.feedbackText)}>
                            {
                                text
                            }
                        </p>
                    }
                    <button className={classNames(classes.feedbackBtn)} onClick={(e) => {
                        e.stopPropagation()
                        setModal(!modal)
                    }}>
                        Получить более подробную информацию
                    </button>
                    {
                        !!question && <button className={classNames(classes.feedbackBtn, classes.feedbackBtnQuestion)} onClick={(e) => {
                            e.stopPropagation()
                            setModal(!modal)
                        }}>
                            задать вопрос
                        </button>
                    }
                </div>
                {
                    modal && <FeedbackModal close={setModal} />
                }
            </div>
        </>
    );
}

export default Feedback;