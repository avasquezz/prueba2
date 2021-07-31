(function() {
	var formulario = document.getElementById('formulario'),
		//Se accede al atributo name
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');

	function validarNombre(e) {
		if (nombre.value == '' || nombre.value == null) {
			console.log('Por favor completa  un nombre');
			error.style.display	= 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>'
			e.preventDefault();//No envía el formulario
		}
	}

	function validarCorreo(e) {
		if (correo.value == '' || correo.value == null) {
			console.log('Por favor completa el correo');
			error.style.display	= 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>'
			e.preventDefault();//No envía el formulario
		}
	}

	function validarSexo(e) {
		if (sexo.value == '' || sexo.value == null) {
			console.log('Por favor selecciona el sexo');
			error.style.display	= 'block';
			error.innerHTML += '<li>Por favor selecciona el sexo</li>'
			e.preventDefault();//No envía el formulario
		}
	}

	function validarTerminos(e) {
		if (!terminos.checked) {
			console.log('Por favor acepta los términos');
			error.style.display	= 'block';
			error.innerHTML += '<li>Por favor acepta los términos</li>'
			e.preventDefault();//No envía el formulario
		}
	}

	function validarFormulario(e) {
		error.innerHTML = '';
		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}

	formulario.addEventListener('submit', validarFormulario);
}())