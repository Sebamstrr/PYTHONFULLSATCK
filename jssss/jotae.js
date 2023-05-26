function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    return {
      tipoCorteza: tipoCorteza,
      tipoSalsa: tipoSalsa,
      quesos: quesos,
      ingredientes: ingredientes
    };
  }
  
  // Ejemplo 1: Pizza estilo Chicago, tradicional, con mozzarella y pepperoni/salchicha
  var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
  console.log(pizza1);
  
  // Ejemplo 2: Pizza lanzada a mano, marinara, con mozzarella/feta y champiñones/aceitunas/cebollas
  var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
  console.log(pizza2);
  
  // Ejemplo 3: Pizza personalizada con ingredientes y opciones diferentes
  var pizza3 = pizzaOven("fina y crujiente", "pesto", ["mozzarella", "parmesano"], ["pollo", "tomates cherry", "espinacas"]);
  console.log(pizza3);
  
  // Ejemplo 4: Otra pizza personalizada con ingredientes y opciones diferentes
  var pizza4 = pizzaOven("gordita", "salsa BBQ", ["cheddar", "gouda"], ["tocino", "piña", "jalapeños"]);
  console.log(pizza4);
  