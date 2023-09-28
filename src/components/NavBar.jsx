import "./NavBar.css"
function NavBar(){
    return(
        <nav>
            <div className="nav-left">
                <img src="/images/Logo.png" alt="" />
            </div>

            <div className="nav-center">
                <a href="#features">Features</a>
                <a href="#how">How it Works</a>
            </div>

            <div className="nav-right">
                <a href="">Get Started</a>
            </div>
        </nav>
    )
}

export default NavBar;