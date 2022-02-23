import { useLocation } from "react-router-dom";

export default function OrderSummary(props) {
    const { state } = useLocation();

    return (
        <>
            {
                state !== null ?
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <h1>Datos de la orden</h1>
                            <h5> El pedido ha sido registrado</h5>
                            <div>Email: {state.email}</div>
                            <div>
                                El pedido sera enviado a  -
                                <div>{state.card.name}</div>
                                <div>{state.card.address_line1}</div>
                                <div>{state.card.address_city}</div>
                                <div>{state.card.address_zip}</div>
                                <div>{state.card.address_country}</div>
                            </div>
                        </div>
                    </div>
                    :
                    <h4>Su carrito esta vacío</h4>
            }
        </>
    );
}