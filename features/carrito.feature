# language: es
Característica: Carrito de compras
  Como cliente de Sauce Demo
  Quiero agregar productos al carrito
  Para revisarlos antes de comprar

  Antecedentes:
    Dado que el usuario "standard_user" ha iniciado sesión

  Escenario: Agregar un producto al carrito desde el catálogo
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Entonces el icono del carrito muestra 1 producto

  Escenario: Ver el producto agregado en el carrito
    Dado que agregó el producto "Sauce Labs Backpack" al carrito
    Cuando abre el carrito de compras
    Entonces ve el producto "Sauce Labs Backpack" en el carrito
