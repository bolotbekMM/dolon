
import Baner from './blocks/baner/index';
import Hero from './blocks/hero/index';
import "./monitoring.scss"
import Feedback from './../../components/feedback/index';


function Manitoring() {
    return ( 
        <>
            <div className='monitoring'>
                <Baner />
                <Hero />
                <Feedback />
            </div>
        </>
     );
}

export default Manitoring;