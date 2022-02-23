import React from "react";
import logo from '../assets/img/logo.jpg';


const Nosotros = () => {
return (
    <>
    
	<div >
		
		<div className="backColor">
			<img src={logo} alt="logoNosotros" width="400px" height="400px"  className="nosotros__logo"/>
			
		</div>
<div className="nosotros-info">
    <h1 data-aos="fade-rigth" style={{ textAlign: "center" }}>¿Quienes somos?</h1>
    <p  style={{ textAlign: "center" }}> <b>Melozzy</b> es una tienda de ropa de segunda mano con el objetivo de disminuir la cantidad de ropa que va directo a la basura. Esto hace más largo el ciclo de vida y genera una <b> reducción en el impacto ambiental</b>. El hecho de reutilizar ropa y objetos es un gesto sostenible para el medio ambiente.</p>
</div>
			

	</div>



    </>
);
};

export default Nosotros;
