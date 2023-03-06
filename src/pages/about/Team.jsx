import css from "./about.module.scss"
import TeamItem from "./Teamitem";
import S from "../../assets/img/aboutus/person/Satar.png";
import R from "../../assets/img/aboutus/person/Ruslan.png";
import T from "../../assets/img/aboutus/person/Timur.png";
import SB from "../../assets/img/aboutus/person/Sabyr.png";
import A from "../../assets/img/aboutus/person/Alexandr.png";
import { useTranslation } from "react-i18next";

function Team() {
    const { t } = useTranslation();
    return ( 
        <div className={css.team}>
            <div className={css.team_container}>
                <TeamItem img={S} name={t("about.team.satar.name")} post={t("about.team.satar.post")} desc={t("about.team.satar.desc")} quote={t("about.team.satar.quote")} />
                <TeamItem reverse={true} img={R} name={t("about.team.ruslan.name")} post={t("about.team.ruslan.post")} desc={t("about.team.ruslan.desc")} quote={t("about.team.ruslan.quote")} />
                <TeamItem img={T} name={t("about.team.timur.name")} post={t("about.team.timur.post")} desc={t("about.team.timur.desc")} quote={t("about.team.timur.quote")} />
                <TeamItem reverse={true} img={SB} name={t("about.team.sabyr.name")} post={t("about.team.sabyr.post")} desc={t("about.team.sabyr.desc")} quote={t("about.team.sabyr.quote")} />
                <TeamItem img={A} name={t("about.team.alex.name")} post={t("about.team.alex.post")} desc={t("about.team.alex.desc")} quote={t("about.team.alex.quote")} />
            </div>
        </div>
     );
}

export default Team;