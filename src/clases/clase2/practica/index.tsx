const Clase2Practica = () => {
  return (
    <article>
      <h2>Catálogo de productos</h2>
      <p>
        Crea dos componentes. <code>ProductList</code> guarda los datos y{" "}
        <code>ProductCard</code> solo los pinta.
      </p>
      <ol>
        <li>
          Parte de este arreglo: Laptop a 999.99, Libro a 19.99 y Smartphone a
          699.99. Cada uno tiene <code>id</code>, <code>name</code>,{" "}
          <code>price</code>, <code>inStock</code> y <code>category</code>.
        </li>
        <li>
          <code>ProductCard</code> recibe esas props ya tipadas. Muestra el
          nombre, la categoría, el precio como <code>$999.99</code> y el texto
          Disponible o Agotado.
        </li>
        <li>
          <code>ProductList</code> recorre el arreglo con <code>map</code> y
          usa <code>key=&#123;product.id&#125;</code>.
        </li>
      </ol>
    </article>
  );
};

export default Clase2Practica;
