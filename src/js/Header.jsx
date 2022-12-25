import { useState } from 'react'
const Header = () => {
    return (
        <div id="header" className="container">
            <NavBar />
        </div>
    )
}


const NavBar = () => {
    let light = false
    const [theme, setTheme] = useState(false)
    const changeTheme = () => {
        light = !light
        setTheme(light)
        console.log('theme : ' + theme)
        console.log('logic : ' + light)
    }
    return (
        <div id="nav-bar">
            <nav className="navbar d-inline-flex justify-content-between align-items-center bg-dark w-100">
                <h1 className="nav-item p-3 text-primary">MovieTopea</h1>
                <button
                    style={{ background: 'none', border: 'none' }}

                    onClick={changeTheme}
                >
                    {!theme ? (<i className='text-light fa-solid fa-sun'></i>) : (<i className='text-light fa-solid fa-moon'></i>)}
                </button>
            </nav>
        </div>
    )
}

export default Header