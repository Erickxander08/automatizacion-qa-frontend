# language: es
Característica: Proceso de compra
  Como cliente de Sauce Demo
  Quiero completar el checkout
  Para adquirir los productos que necesito

  Antecedentes:
    Dado que el usuario "standard_user" ha iniciado sesión
    Y agregó el producto "Sauce Labs Backpack" al carrito

  Escenario: Completar la compra hasta la confirmación
    Cuando abre el carrito de compras
    Y continúa al checkout
    Y completa el formulario con nombre "Xander", apellido "Estrada" y código postal "15103"
    Y finaliza la compra
    Entonces ve la confirmación "Thank you for your order!"
