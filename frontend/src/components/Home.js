import "../styles/Home.css"
import React from 'react'
import Login from "./Login"

export default function Home() {
    return (
        <div>
            <header className="header-text">
                <h1 className="heading-main1">
                    <span className="heading-primary1">moviehub</span>
                    <span className="heading-secondary1">We live for entertainment</span>
                </h1>
            </header>

            <Login />
        </div>
    )
}
