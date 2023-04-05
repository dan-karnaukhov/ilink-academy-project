import { useState } from 'react'
import AuthPage from './pages/auth-page/auth-page'
import Header from '../src/components/header/header'
import About from '../src/components/about/about'
import Feedback from '../src/components/feedback/feedback'
import Footer from './components/footer/footer'

import './scss/app.scss'

const App = () => {

    const [isAuth, setIsAuth] = useState(false)

    if(!isAuth) {
        return <AuthPage setIsAuth={setIsAuth}/>
    }
    
    return (
        <div className='wrapper'>
            <Header />
            <div className='main'>
                <About />
                <Feedback />
            </div>
            <Footer />
        </div>
    )
}

export default App