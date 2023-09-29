import "./Footer.css";

function Footer(){
    return(
        <footer className="footer">
            <div className="outer-container">
            <div className="inner-container-1">
                
                <img src="public/images/Logo2.png" alt="" />
            

            
        </div>

        <div className="inner-container-2">
        <div className="flex-col">
                <h4>Menu</h4>
                <p>Home</p>
                <p>Converter</p>
                <p>How it works</p>
            </div>
        <div className="flex-col">
                <h4>About us</h4>
                <p>About</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex-col">
                <h4>Screen Record</h4>
                <p>Browser Window</p>
                <p>Desktop</p>
                <p>Application</p>
            </div>
        </div>
            </div>
            
        </footer>

    )
}
export default Footer;