function Navbar() {
    const path = window.location.pathname
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/innovation">Innovations</a>
                </li>
                <li>
                    <a href="/team">Meet-the-Team</a>
                </li>
            </ul>
            <input 
                type="text" 
                placeholder="Search..." 
                style={{ padding: '10px', borderRadius: '25px', border: '1px solid #ccc', margin: '10px', height: '50px', width: '18%' }} 
            />
        </nav>
    )
}

export default Navbar;