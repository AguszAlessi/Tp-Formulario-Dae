La interfaz del formulario la hice de una forma bastante básica, basándome en el formato (no el color) del inicio de sesión del campus de ort


Tengo distintas validaciones, una que es Nombre(), que se encarga de asegurarse de que al menos tenga 3 caracteres el input, para email y password utilice el chatgpt para buscar como se validan de que tenga un @, 8 letras y al menos un numero. y asi, en caso de que el email o password sea distinto al regex, de error. Después como ultimo, hice el validar formulario, que se encarga de llamar todas las funciones y validar todos los campos a ver si no tienen error, en caso de que no tengan error, se envia

Un desafio/problema que tuve era de que el confirmar password no captaba los números de la contraseña, por lo que me decía que las contraseñas no coinciden, para resolver esto, en vez de hacer 2 funciones distintas, password() y confirmpassword(), lo hice en sola una. Donde valida que este bien escrito la contraseña y que coincida con la confirm password.

Lo que agregaría si tuviera mas tiempo seria cambiar de ubicación el ojo para ver la contraseña, y ponerlo al lado de la contraseña.
