
import { useTranslation } from 'react-i18next';
import ReModule from './../../components/ReModules/ReModule';
import css from './about.module.scss'
import banner from "../../assets/img/aboutus/aboutus.png";
import image from "../../assets/img/aboutus/aboutus.png";
import Baner from './../../components/baner/index';
import Excourse from './Excours';
import Cloud from './Cloud';
import Team from './Team';
import Mission from './Mission';
import Years from './Years';




function AboutUs() {
    const { t } = useTranslation();
    return (
        <div className={css.about}>
            <Baner img={image} color="#F5F5F7"/>
            <Excourse />
            <Cloud />
            <Team />
            <Mission />
            <Years />
        </div>
    );
}

export default AboutUs;