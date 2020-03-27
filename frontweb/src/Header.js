import React from 'react';

export default function Header({ title, children }) {
    return (
        <header>
            <h1>Be The Hero</h1>
            <h3>{title}</h3>
            <p>{children}</p>
        </header>
    );
}

