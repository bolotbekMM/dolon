import classes from "./select.module.scss"
import { IoIosArrowDown} from "react-icons/io"
import flag from "../../assets/img/mainPage/Flag.png"
import { useState } from "react";
import classNames from "classnames";


function UISelect() {

    const [ hide, setHide ] = useState({
        hide: true,
        value: null
    }) 


    return ( <>
             <div className={classes.uiselect}>
             
                <div className={classes.uiselectContainer} onClick={() => {
                    setHide({...hide, hide: !hide.hide})
                }}>
                    {
                        !hide.value ? <div className={classes.uiselectMain}>
                            Код страны
                        </div> : <>
                            <div className={classNames(classes.listItem, classes.currentValue)}>
                                <div className={classes.listItemImgWrap}>
                                    <img src={hide.value.img} alt="Not found" className={classes.listItemImg} />
                                </div>
                                <div className={classes.listItemCode}>
                                    {
                                        hide.value.code
                                    }
                                </div>
                            </div>   
                        </> 
                    }
                </div>
                <IoIosArrowDown className={classes.uiselectIcon} onClick={() => {
                    setHide({...hide, hide: !hide.hide})
                }}/>
                <div className={classes.list} style={{display: hide.hide? "none" : "block" }}>
                    <div className={classes.listContainer}>
                        <div className={classes.listItem} onClick={() => {
                                setHide({hide: true, value: {
                                    img: flag,
                                    code: '+996'
                                }})
                            }}>
                            <div className={classes.listItemImgWrap}>
                                <img src={flag} alt="Not found" className={classes.listItemImg} />
                            </div>
                            <div className={classes.listItemCode}>
                                +996
                            </div>
                        </div>   
                        <div className={classes.listItem} onClick={() => {
                                setHide({hide: true, value: {
                                    img: flag,
                                    code: '+7'
                                }})
                            }}>
                            <div className={classes.listItemImgWrap}>
                                <img src={flag} alt="Not found" className={classes.listItemImg} />
                            </div>
                            <div className={classes.listItemCode}>
                                +7
                            </div>
                        </div>   
                    </div> 
                </div>
             </div>
    </> );
}

export default UISelect;