//Crear una aplicación React con TypeScript que muestre 
// una lista de productos usando componentes. 
// El componente principal (Layout) debe pasar los datos de cada producto 
// a un componente hijo (Card) mediante props.

// 1. Datos de Productos

// Usa el siguiente array de objetos(puedes agregar más ejemplos):

const products = [
  { id: 1, name: "Laptop", price: 999.99, inStock: true, category: "Electrónica" },
  { id: 2, name: "Libro", price: 19.99, inStock: false, category: "Libros" },
  { id: 3, name: "Smartphone", price: 699.99, inStock: true, category: "Electrónica" },
];

// 2. Componente ProductCard

// Debe recibir las siguientes props tipadas:

// id: número

// name: string

// price: número

// inStock: booleano

// category: string

// Mostrar cada producto en una tarjeta con:

// Nombre y categoría en un título.

//   Precio(formateado como $XX.XX).

// Un mensaje que diga "Disponible"(verde) o "Agotado"(rojo) según inStock.

// 3. Componente ProductList

// Mapea el array products y renderiza una lista de ProductCard.

// Añade un título principal: "Catálogo de Productos".