import React from 'react'
import logo from '../assets/ubiqum-manager-logo-nobg.png'


const spinningLogo = (<header className="App-header">
    <div className="zoom">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
    <h1>Ubiqum Manager</h1>
</header>)

const Landing: React.FC = () => {
    return (
        <div>
            {spinningLogo}
        </div>
    )
}
export default Landing