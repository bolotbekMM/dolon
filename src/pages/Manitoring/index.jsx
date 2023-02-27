
import Hero from '../../components/hero/index';
import "./monitoring.scss"
import Feedback from './../../components/feedback/index';
import Baner from '../../components/baner';
import monitoringImg from "../../assets/img/mainPage/monitoringImg.jpg"

function Manitoring() {
    return ( 
        <>
            <div className='monitoring'>
                <Baner img={monitoringImg} />
                <Hero />
                <Feedback />
            </div>
        </>
     );
}

export default Manitoring;