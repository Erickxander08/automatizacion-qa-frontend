# language: es
Característica: Inicio de sesión en Sauce Demo
  Como cliente de Sauce Demo
  Quiero iniciar sesión
  Para acceder al catálogo de productos

  Escenario: Inicio de sesión con credenciales válidas
    Dado que el usuario está en la página de login
    Cuando inicia sesión con el usuario "standard_user" y la contraseña "secret_sauce"
    Entonces ve el catálogo de productos

  Escenario: Inicio de sesión con credenciales inválidas
    Dado que el usuario está en la página de login
    Cuando inicia sesión con el usuario "usuario_invalido" y la contraseña "clave_incorrecta"
    Entonces ve el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  Escenario: Usuario bloqueado no puede iniciar sesión
    Dado que el usuario está en la página de login
    Cuando inicia sesión con el usuario "locked_out_user" y la contraseña "secret_sauce"
    Entonces ve el mensaje de error "Epic sadface: Sorry, this user has been locked out."
