import React from 'react'
import logo from '../assets/ubiqum-manager-logo-nobg.png'

interface Props {
    msg: string
}

const SpinningLogo: React.FC<Props> = ({ msg }) => (
    <header className="App-header">
        <div className="zoom">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>{msg}</h1>
    </header>)

export default SpinningLogo