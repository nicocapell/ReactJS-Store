import React from "react";
import logo from '../assets/img/logo.jpg';

const Footer = () => {
return (
    <>
	<footer className="container-fluid colorFooter ">
            <div className="row bg--footer">
                <div className="col-lg-4 col-xs-12">
                    <img src={logo} alt="logoFooter" width="300px" height="300px"/>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <h3>REDES SOCIALES</h3>
                    <img src="iconFace.png" alt="logoFace"  width="20px" height="20px"/>
                    <img src="iconInsta.png" alt="logoInsta"  width="20px" height="20px"/>
    
                </div>
                <div className="col-lg-4 col-xs-12">
                    <h3>CONTACTO</h3>
                    <div>
                    <img src="iconMail.png" alt="iconoEmail"  width="20px" height="20px"/><span>melozzyferia@gmail.com</span></div>
                    <img src="iconoMaoa.png" alt="iconoMapa"  width="20px" height="20px"/><span>Rondeau 548 - Córdoba Capital</span>
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
