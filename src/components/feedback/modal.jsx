import classes from "./feedback.module.scss"
import { useState } from 'react';
import classNames from "classnames";
import { toast } from 'react-toastify';

function FeedbackModal({ close }) {

    const [form, setForm] = useState({
        fio: "",
        phone: "",
        email: "",
        company: "",
        post: "",
        note: ""
    })

    const config = {
        Username: "dolonsystems@gmail.com",
        Password: "A9335968659627466661A4D9EFE3E639310D",
        Port: "2525",
        Host: "smtp.elasticemail.com",
        To: 'info@dolon.tech',
        From: form.email,
        Subject: "Monitoring",
        Body: `
            ФИО: ${form.fio},
            Phone: ${form.phone},
            Email: ${form.email},
            Компания: ${form.company},
            Должность: ${form.post},
            Примечание: ${form.note}
        `
    }

    const onInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const validateEmail = (value) => {
    if(value && value.match(isValidEmail)){
        return true;
    }else{
        return false;
    }
    }
    const correctForm = () => {
        if(form.fio.length > 3 && form.phone.length > 7 && form.email.length > 7 && validateEmail(form.email)) return true;
        return false
    }


    return (
        <>
            <div className={classes.feedmodal} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={classes.feedmodalContainer}>
                    <div className={classes.feedmodalTitle}>
                        <p className={classes.feedmodalTitleText}>
                            поЖАЛуЙСТА, ЗАПОЛНИТЕ ФОРМУ
                        </p>
                    </div>
                    <div className={classes.feedmodalForm}>
                        <div className={classes.formgroup}>
                            <label htmlFor="fio" className={classes.formgroupLabel}>
                                Фамилия имя и отчество
                            </label>
                            <input type="text" name="fio" onInput={onInput} value={form.fio} id="fio" placeholder="Введите ФИО*" className={classes.formgroupInput} />
                        </div>
                        <div className={classes.formgroup}>
                            <label htmlFor="phone" className={classes.formgroupLabel}>
                                Номер телефона
                            </label>
                            {/* <input type="text" name="phone" onInput={onInput} value={form.} id="phone" className={classes.formgroupSelect} /> */}
                            <input type="text" name="phone" onInput={onInput} value={form.phone} placeholder="(___) ___ ___ " id="phone" className={classes.formgroupInput} />
                        </div>
                        <div className={classes.formgroup}>
                            <label htmlFor="email" className={classes.formgroupLabel}>
                                Электронная почта
                            </label>
                            <input type="text" name="email" onInput={onInput} value={form.email} placeholder="Введите Email*" id="email" className={classes.formgroupInput} />
                        </div>
                        <div className={classes.formgroup}>
                            <label htmlFor="company" className={classes.formgroupLabel}>
                                Компания
                            </label>
                            <input type="text" name="company" onInput={onInput} value={form.company} id="company" placeholder="Напишите название вашей компании*" className={classes.formgroupInput} />
                        </div>
                        <div className={classes.formgroup}>
                            <label htmlFor="post" className={classes.formgroupLabel}>
                                Должность
                            </label>
                            <input type="text" name="post" onInput={onInput} value={form.post} placeholder="Напишите название вашей должности" id="post" className={classes.formgroupInput} />
                        </div>
                        <div className={classes.formgroup}>
                            <label htmlFor="note" className={classes.formgroupLabel}>
                                Примечание
                            </label>
                            <textarea type="text"name="note" onChange={onInput} value={form.note} placeholder="Напишите примечание" rows={3} id="note" className={classes.formgroupTextarea} />
                        </div>
                        <button disabled={!correctForm()} className={classNames(classes.feedmodalBtn, correctForm() ? classes.feedmodalBtnActive : "")} onClick={() => {
                            if (window.Email) {
                                console.log(window.Email);
                                window.Email.send(config).then((mess) => {
                                    console.log(mess);
                                }).catch(err => {
                                    console.log(err);
                                }).finally((data) => {
                                    console.log(data);
                                    close(false)
                                    toast.success("Мы свяжемся с вами в ближайшее время", "Спасибо!")
                                })
                            }
                        }}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedbackModal;