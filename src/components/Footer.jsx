import React from "react";

const Footer = () => {
    
return (
    <>
	<footer className="container-fluid colorFooter ">
            <div className="row bg--footer">
                <div className="col-lg-4 col-xs-12">

                <img  src="/images/logo.jpg" alt="logoFooter" width="300px" height="300px" />
                    
                </div>
                <div className="col-lg-4 col-xs-12">
                    <h3>REDES SOCIALES</h3>
                    <img src="/images/iconFace.png" alt="logoFace"  width="20px" height="20px"/>
                    <img src="/images/iconInsta.png" alt="logoInsta"  width="20px" height="20px"/>
    
                </div>
                <div className="col-lg-4 col-xs-12">
                    <h3>CONTACTO</h3>
                    <div>
                    <img src="/images/iconMail.png" alt="iconoEmail"  width="20px" height="20px"/><span>melozzyferia@gmail.com</span></div>
                    <img src="/images/iconoMaoa.png" alt="iconoMapa"  width="20px" height="20px"/><span>Rondeau 548 - Córdoba Capital</span>
                </div>
            </div>
            
            <div className="row rowSinMargin">
                <div className="col-lg-12 col-xs-12">
                    <p>Powered by: Capell</p>
                </div>
            </div>
        
    </footer>
    </>
);
};

export default Footer;
