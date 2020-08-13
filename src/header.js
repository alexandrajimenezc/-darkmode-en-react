import React from 'react'
import './header.css'


/* linea 18 --->RECORDAR cambia for por  htmlFor */
/* propiedad {children} */
function Header({children}) {
    return(
        <header className="header">
    <div className="wrapper">
        <div className="header-grid">
            <div>

                <h1>Social Media Dashboard</h1>
                <p className="header-total">Total Followers: 18,004 </p>
            </div>
         {children}
        </div>
    </div>
</header>
    )
}

export default Header