//obtiene la diferencia
export function obtenerDiferenciaYear(year) {
	return new Date().getFullYear() - year;
}

//calcula el total a pagar segun marca
export function calcularMarca(marca) {
	let incremento;

	switch(marca) {
		case 'europeo':
			incremento = 1.30;
			break;
		case 'americano':
			incremento = 1.15;
			break;
		case 'asiatico':
			incremento = 1.05;
			break
		default: 
			break;
	}
	return incremento;
}

//calcula el tipo de seguro
export function obtenerPlan( plan ) {
	return (plan === 'basico') ? 1.20 : 1.50;
}


//para que le ponga la primera letra en mayuscula
export function primerMayuscula( texto ) {//con el chartAt selecciono la primera casilla del string y la convierto a mayuscula
	return texto.charAt(0).toUpperCase() + texto.slice(1);//luego del texto con slice e quito la primera letra para sustiturila
}