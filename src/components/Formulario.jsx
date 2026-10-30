import { useState } from 'react'
import '../css/Formulario.css'

function Formulario() {
	const [formularioCreado, setFormularioCreado] = useState(false)

	function manejarEnvio(event) {
		event.preventDefault()
		setFormularioCreado(true)
	}

	return (
		<form className="formulario" onSubmit={manejarEnvio}>
			<div className="campo">
				<label className="label" htmlFor="moneda">
					Moneda
				</label>
				<select className="select" id="moneda" defaultValue="">
					<option value="" disabled>
						Seleccione:
					</option>
					<option value="usd">Dolar USD</option>
					<option value="mxn">Peso Mexicano MXN</option>
					<option value="eur">Euro EUR</option>
					<option value="gbp">Libra Esterlina GBP</option>
				</select>
			</div>

			<div className="campo">
				<label className="label" htmlFor="criptomoneda">
					Criptomoneda
				</label>
				<select className="select" id="criptomoneda" defaultValue="">
					<option value="" disabled>
						Seleccione:
					</option>
				</select>
			</div>

			<button className="btn-cotizar" type="submit">
				Cotizar
			</button>

			{formularioCreado && <p className="alerta-info">Formulario creado</p>}
		</form>
	)
}

export default Formulario