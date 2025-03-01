function Navbar() {
    const path = window.location.pathname
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/innovation">Innovations</a>
                </li>
                <li>
                    <a href="/team">Meet-the-Team</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;