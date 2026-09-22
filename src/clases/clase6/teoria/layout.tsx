import { CartProvider } from "./context/CartContext";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { Nota } from "../../../components/aula/Aula";

const Carrito = () => {
  return (
    <article>
      <h2>El carrito ya no cabe en un solo useState</h2>
      <p>
        Agregar suma cantidad o inserta el producto. Quitar resta uno o borra
        la fila. Vaciar vuelve a cero. Esas tres acciones viven en el reducer.
        La lista y el carrito leen el mismo estado por el contexto de la clase
        5.
      </p>
      <CartProvider>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <ProductList />
          <Cart />
        </div>
      </CartProvider>
      <Nota>
        El reducer no sabe nada de React. El provider solo guarda su resultado
        y lo comparte.
      </Nota>
    </article>
  );
};

export default Carrito;
