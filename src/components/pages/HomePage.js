import React from 'react'
import { Link } from 'react-router-dom'
import Books from '../Books/Books';

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Books />
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
