import React from 'react'
import Introduction from './components/Introduction/Introduction'
import Prices from './components/Prices/Prices'
import Info from './components/Info/Info'
import Signup from './components/Signup/Signup'

const Home = () => {
    return (
        <main>
            <Introduction />
            <Prices />
            <Info />
            <Signup />
        </main>
    )
}

export default Home
