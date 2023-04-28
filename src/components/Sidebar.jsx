import SocialNetworks from './SocialNetworks'
import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Allexia Alcantara" />
            <p className="title">Desenvolvedora</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">Download currículo</a>
        </aside>
    )
}

export default Sidebar