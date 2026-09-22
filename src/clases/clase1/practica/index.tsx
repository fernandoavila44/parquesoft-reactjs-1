import CustomButton from "../primerComponent";

const Clase1Practica = () => {
  return (
    <div>
      <h2>Primer componente</h2>
      <p>
        Abre <code>src/clases/clase1/primerComponent.tsx</code>. Haz que el botón
        cambie el texto de abajo al hacer clic, usando <code>useState</code> y
        un <code>onClick</code> que reciba la función, no su resultado.
      </p>
      <CustomButton />
    </div>
  );
};

export default Clase1Practica;
