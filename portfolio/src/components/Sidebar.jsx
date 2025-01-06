import Avatar from '../img/bruna.png'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Bruna Nadoroski" />
            <p className="title">Desenvolvedora</p>
            <SocialNetworks></SocialNetworks>
            <InformationContainer></InformationContainer>
            <a href="../documents/CurriculoBruna.pdf" className="btn" target="_blank" download>Download currículo</a>
        </aside>
    )
}

export default Sidebar