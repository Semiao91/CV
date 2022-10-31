import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="Footer">
            <p>Bernardo Semião ⓒ {year}</p>
            Created with React by Bernardo Semião
        </footer>
    )
};

