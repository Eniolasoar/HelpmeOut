import "./Hero.css"

function Hero(){
    return(
        <div className="container">
            <div className="text-content">
                <h1>Show Them <br></br>Don't Just Tell</h1>
                <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                <button>Install HelpOut <i className="Material-Icons"></i></button>
            </div>

            <div className="image-container">
                <div className="image-left">
                    <img src="public/images/home1.png" alt="" />
                    <div className="img-left-2">
                    <img src="public/images/home2.png" alt="" />
                    <img src="public/images/bottomleft.svg" alt="" id="bottomleftimg"/>
                    </div>
                    
                </div>

                <div className="image-right">
                    <img src="public/images/woman-using-smartphone-technology 2.png" alt="" />
                    <img src="public/images/topright.svg" alt="" id="toprightimg"/>
                </div>
            </div>
        </div>
    )
    
}
export default Hero;