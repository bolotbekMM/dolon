import css from "./about.module.scss"


function TeamItem({
    img,
    name,
    post,
    desc,
    quote,
    reverse
}) {
    if(reverse){
        return (
            <div className={css.teamitem}>
            <div className={css.teamitem_container}>
                <div className={css.teamitem_right}>
                    <q className={css.teamitem_right_quote}>
                        {
                            quote
                        }
                    </q>
                </div>
                <div className={css.teamitem_left}>
                    <div className={css.teamitem_left_top}>
                        <div className={css.teamitem_left_top_img_wrap}>
                            <img src={img} alt="" className={css.teamitem_left_top_img} />
                        </div>
                        <div className={css.greenEllips}></div>
                    </div>
                    <div className={css.teamitem_left_bottom}>
                        <div className={css.teamitem_left_bottom_name}>
                            {
                                name
                            }
                        </div>
                        <div className={css.teamitem_left_bottom_post}>
                            {
                                post
                            }
                        </div>
                        <div className={css.teamitem_left_bottom_desc}>
                            {
                                desc
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return ( 
        <div className={css.teamitem}>
            <div className={css.teamitem_container}>
                <div className={css.teamitem_left}>
                    <div className={css.teamitem_left_top}>
                        <div className={css.teamitem_left_top_img_wrap}>
                            <img src={img} alt="" className={css.teamitem_left_top_img} />
                        </div>
                        <div className={css.greenEllips}></div>
                    </div>
                    <div className={css.teamitem_left_bottom}>
                        <div className={css.teamitem_left_bottom_name}>
                            {
                                name
                            }
                        </div>
                        <div className={css.teamitem_left_bottom_post}>
                            {
                                post
                            }
                        </div>
                        <div className={css.teamitem_left_bottom_desc}>
                            {
                                desc
                            }
                        </div>
                    </div>
                </div>
                <div className={css.teamitem_right}>
                    <q className={css.teamitem_right_quote}>
                        {
                            quote
                        }
                    </q>
                </div>
            </div>
        </div>
     );
}

export default TeamItem;