import Container from '../common/container/container'
import SocialIcon from '../icons/social-icon/social-icon'

import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='footer__container'>
                <span className='footer__copyright'>
                    © iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
                </span>
                <div className='footer__social-icons'>
                    <SocialIcon className='footer__social-icon' type='vk' url='/' />
                    <SocialIcon className='footer__social-icon' type='reddit' url='/' />
                    <SocialIcon className='footer__social-icon' type='telegram' url='/' />
                </div>
            </Container>
        </footer>
    )
}

export default Footer