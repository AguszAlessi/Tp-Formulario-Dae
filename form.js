function Nombre()
{
    let nombre = document.getElementById("nombre").value;
    let errornombre = document.getElementById("errornombre");
    let errormail = document.getElementById("erroremail");
    let errorpass = document.getElementById("errorpass");
    let errorconfirm = document.getElementById("errorconfirm");

    if(nombre.length < 3)
    {
        errornombre.innerText = "obligatorio, mínimo 3 caracteres";
        errornombre.style.color = "red";
    }
    else 
    {
        errornombre.innerText = "Correcto";
        errornombre.style.color = "green";
        return;
    }
}

function Email() {
    let email = document.getElementById("email").value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(email)) 
    {
        erroremail.innerText = "Ingrese un mail válido";
        erroremail.style.color = "red";
    }
    else 
    {
        erroremail.innerText = "Correcto";
        erroremail.style.color = "green";

        return;
    }
}

function Password() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;

    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password && !regexPassword.test(password)) 
    {
        errorpass.innerText = "La contraseña debe tener al menos 8 caracteres, incluir al menos una letra y un número.";
        errorpass.style.color = "red";
    }

    if (password !== confirmPassword) {

        errorconfirm.innerText = "Las contraseñas no coinciden";
        errorconfirm.style.color = "red";  
    }
    else
    {
        errorpass.innerText = "Correcto";
        errorpass.style.color = "green";
        errorconfirm.innerText="Correcto";
        errorconfirm.style.color = "green";
        return; 
    }
}

function validarFormulario(event) 
{
    event.preventDefault();  
    
    Nombre();
    Email();
    const passwordValid = Password();

    if (document.querySelectorAll(".error").length === 0 && passwordValid) {
        alert("Formulario enviado exitosamente.");
        return;
    }
}