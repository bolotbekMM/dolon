import classNames from "classnames"
import classes from "./card.module.scss"

function SingleCard({img, title, content}) {



    return ( 
        <>
            <div className={classNames(classes.cardwrap)}>
                <div className={classNames(classes.card)}>
                    <div className={classNames(classes.content)}>
                        <h3 className={classNames(classes.header)}>
                            {
                                title
                            }
                        </h3>
                        <p className={classNames(classes.text)}>
                            {
                                content
                            }
                        </p>
                    </div>
                    <div className={classNames(classes.cardContainer)}>
                        <div className={classNames(classes.cardImgWrap)}>
                        <img className={classNames(classes.cardImg)} src={img} alt="Not found" />
                        </div>
                        <h3 className={classNames(classes.header)}>
                            {
                                title
                            }
                        </h3>
                    </div>
                </div>
            </div>
        </>
     );
}

export default SingleCard;