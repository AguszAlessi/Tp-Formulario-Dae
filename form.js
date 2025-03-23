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
        return false
    }
    else 
    {
        errornombre.innerText = "Correcto";
        errornombre.style.color = "green";
        return true;
    }
}

function ModoOscuro()
{
    document.body.classList.toggle("oscuro")
    const button = document.getElementById("modooscuro")
    if(document.body.classList.contains("oscuro"))
    {
        button.innerText = '☀️ Modo claro';

    }
    else
    {
        button.innerText = '🌙 Modo oscuro';

    }
}

function Email() {
    let email = document.getElementById("email").value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(email)) 
    {
        erroremail.innerText = "Ingrese un mail válido";
        erroremail.style.color = "red";
        return false;

    }
    else 
    {
        erroremail.innerText = "Correcto";
        erroremail.style.color = "green";
        return true;
    }
}

function Password() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;
    let valido = true;


    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password && !regexPassword.test(password)) 
    {
        errorpass.innerText = " debe tener al menos 8 caracteres y 1 numero";
        errorpass.style.color = "red";
         valido = false;

    }
    else
    {
        errorpass.innerText = "Correcto";
        errorpass.style.color = "green";
        
    }
    if (password && confirmPassword)
    {
        if (password !== confirmPassword) {

            errorconfirm.innerText = "Las contraseñas no coinciden";
            errorconfirm.style.color = "red";
             valido = false;

        }
        else
        {
            errorconfirm.innerText="Correcto";
            errorconfirm.style.color = "green";
        }
    }
    
    return valido;  
}

function validarFormulario(event) {
    event.preventDefault();  

    const nombreValido = Nombre();
    const emailValido = Email();
    const passwordValido = Password();

    if (nombreValido && emailValido && passwordValido) {
        alert("Formulario enviado exitosamente.");
    } else {
        alert("Complete todos los campos correctamente.");
    }
}

function MostrarContra(inputId, boton) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
        boton.innerText = "👁️";
    }
}