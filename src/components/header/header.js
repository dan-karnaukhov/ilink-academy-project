import Container from '../common/container/container'
import Profile from '../profile/profile'
import Logo from '../logo/logo'
import ControlPanelButton from '../buttons/control-panel-button/contorl-panel-button'

import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <Container className='header__container'>
                <Profile avatar='./images/user-small.jpg' firstName='Данил' lastName='Шляхтицев' />
                <Logo className='header__logo' />
                <ControlPanelButton />
            </Container>
        </header>
    )
}

export default Header