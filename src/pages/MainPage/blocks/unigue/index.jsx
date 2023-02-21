import classNames from "classnames";
import SingleCard from './../../../../components/card/index';
import classes from "./unigue.module.scss"
import img1 from "../../../../assets/img/mainPage/unigue2.svg"
import img2 from "../../../../assets/img/mainPage/unigue1.svg"
import img3 from "../../../../assets/img/mainPage/unigue3.svg"
import img4 from "../../../../assets/img/mainPage/unigue4.svg"
import img5 from "../../../../assets/img/mainPage/unigue5.svg"
import img6 from "../../../../assets/img/mainPage/unigue6.svg"
import img7 from "../../../../assets/img/mainPage/unigue7.svg"
import img8 from "../../../../assets/img/mainPage/unigue8.svg"


function Unigue() {

    let cards = [
        {
            img:  img1,
            title: 'Кросспатформенность',
            content: ""
        },
        {
            img:  img2,
            title: 'Едина база данных',
            content: ""
        },
        {
            img:  img3,
            title: 'Экосистема',
            content: ""
        },
        {
            img:  img4,
            title: 'iot интернет вещей',
            content: ""
        },
        {
            img:  img5,
            title: 'низкие требования к системным ресурсам',
            content: ""
        },
        {
            img:  img6,
            title: 'Уменьшение времени на устранение проблем',
            content: ""
        },
        {
            img:  img7,
            title: 'Оптимизация затрат',
            content: ""
        },
        {
            img:  img8,
            title: 'высокая надежность',
            content: ""
        }
    ]

    return ( 
        <>
            <div className={classNames(classes.unigue)}>
                <div className={classNames(classes.unigueContainer)}>
                    <p className={classNames(classes.unigueTitle)}>
                        Уникальность экосистемы Dolon
                    </p>
                    <div className={classNames(classes.unigueCards)}>
                        {
                            cards.map((item) => {
                                return <SingleCard key={item.title} img={item.img} title={item.title} content={item.content} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default Unigue;