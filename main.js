const productosN = [
    {
        id: 1,
        nombre: 'Sprite',
        precio: 30 * 1.21,
    },
    {
        id: 2,
        nombre: 'Coca Cola',
        precio: 160 * 1.21,
    },
    {
        id: 3,
        nombre: 'Fanta',
        precio: 40 * 1.21,
    }

]; 
function saludar() {
    let Usuario = prompt("Ingrese su nombre");
    alert("Hola bienvenido "+Usuario);
}
saludar()

let opcion = prompt ("Ingrese A para ver los productos , B para salir  o  C para ver los precio con IVA")
if (opcion === "A")
{
    let productos = prompt("productos en Stock coca-Cola , fanta y sprite.Para ver los precios ingresa el nombre del producto",console.log(productosN.length) )
    switch (productos)
{
    case "coca-Cola": alert ("2L. Ml $160");   
    break;

    case "sprite": alert ("500 Ml $30");
    break;

    case "fanta": alert ("1.5 L. $40");
    break;

    default: alert ("Error de opcion")
        break;
}
}
else if (opcion === "C"){
    productosN.forEach((stock) => console.log(stock.nombre, stock.precio))
}
else (opcion ==="B");