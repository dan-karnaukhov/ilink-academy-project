import Container from '../common/container/container'
import ProfileInfo from '../profile-info/profile-info'
import { person } from '../../data/data'

import './about.scss'

const About = () => {
    return (
        <section className='about'>
            <Container>
                <h1 className='about__title'>Добро пожаловать в академию!</h1>
                <ProfileInfo person={person}/>
            </Container>
        </section>
    )
}

export default About