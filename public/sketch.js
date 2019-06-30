const button = document.getElementById('submit');
button.addEventListener('click', async event =>{

	const variable = document.getElementById('id').value;
	const variablea = document.getElementById('power').value;
	const variableb = document.getElementById('dsu').value;
	const variablec = document.getElementById('time').value;
	
	const data = {variable, variablea, variableb, variablec};
	const options = {
		method: 'POST',
		body: JSON.stringify(data)
	};
	console.log(options);

});