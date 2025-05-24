import React from "react";
import { Link, Outlet } from 'react-router-dom';
import '../styles/styles.css'

function Layout() {
    return(
        <>
        <header>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/addfish">Add Fish</Link>
                <Link to="/readdata">Read From Database</Link>
            </nav>
        </header>

            <main>
                <Outlet />
            </main>

        <footer>
            &copy; 2025 Levi's Fish Database
        </footer>
        </>
    );
}

export default Layout;