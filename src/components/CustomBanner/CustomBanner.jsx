
import "./CustomBanner.css";

function CustomBanner({img, title, desc}) {
    return (
        <section className="CustomBanner-banner" 
        style={{backgroundImage: `url(${img})`}}
        >
            {/* Overlay Content */}
            <div className="CustomBanner-overlay">
                <div className="container">
                    <div className="CustomBanner-content">
                        <div className="d-flex">
                            <span className="banner-title-bar "></span>
                            <div className="d-flex flex-column gap-1">
                                <h3 className="banner-title " style={{color:"white"}}>{title}</h3>
                                <p className="CustomBanner-description" style={{color:"white"}}>
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomBanner;
