import Container from '../common/container/container'
import Logo from '../logo/logo'

import './header-auth.scss'

const HeaderAuth = () => {
    return (
        <header className='header-auth' >
            <Container className='header-auth__container'>
                <Logo light />
            </Container>
        </header>
    )
}

export default HeaderAuth