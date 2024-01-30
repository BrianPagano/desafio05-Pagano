function submitForm() {
    // Recopila los datos del formulario en un objeto
    const formData = {
        first_name: document.getElementById('nombre').value,
        last_name: document.getElementById('apellido').value,
        age: document.getElementById('edad').value,
        email: document.getElementById('email').value.toUpperCase(),
        password: document.getElementById('password').value,
    }

    // Realiza una solicitud POST utilizando fetch y envía los datos en formato JSON
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(formData => {
        console.log(formData)
        window.location.href = '/login'
    })
    .catch(error => console.error('Error:', error))
}

