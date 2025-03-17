function Nombre()
{
    let nombre = document.getElementById("nombre").value;
    if(nombre.length < 3)
    {
        let errornombre = getElementById("errornombre");
        const error1 = "su nombre debe tener 3 caracteres";
        nombre.style.color="red";
        errornombre = error1;
        erro
    }
    else
    {
        nombreerror.InnerHTML="";
    }
}

function Email() {
    let email = document.getElementById("email").value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
}

function Password() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("Confirmar Contraseña").value;

    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password && !regexPassword.test(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir al menos una letra y un número.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    return true; 
}

function validarFormulario(event) 
{
    event.preventDefault();  
    
    Nombre();
    Email();
    const passwordValid = Password();

    if (document.querySelectorAll(".error").length === 0 && passwordValid) {
        alert("Formulario enviado exitosamente.");
    }
}