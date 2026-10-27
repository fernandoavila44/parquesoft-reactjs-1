
interface IProps {
  id: number,
  numeros: number[]
}

type TProps = {
  id: number,
  numeros: number[]
}

const CustomButton: React.FC<IProps> = ({ id, numeros }) => {

  const variable1: number = 1234565;

  const nombre: string = 'daniel';

  const array1: (number | string)[] = [1, 2, 3, 4, 5, '6'];

  type TProduct = {
    id: number,
    category: 'food' | 'tech' | 'misc'
    price: number
  }

  const product: TProduct = {
    id: 700,
    category: "food",
    price: 90
  }

  array1.forEach((element) => console.log(element))

  const getCurrentDate = () => {
    return Date.now()
  }

  console.log(variable1, array1)
  console.log(getCurrentDate())
  console.log(id, numeros)

  return (
    <div style={{ border: '1px, solid, red' }}>
      {array1.length > 5
        ? <p>La longitud del arreglo es mayor a 5</p>
        : <p>La longitud del arreglo es menor a 5</p>
      }
      {array1 && <p>El arreglo existe</p>}
      <ul>
        {array1.map((elemento) => (
          <li>{elemento}</li>
        ))}
      </ul>
      <p>Mi primer boton</p>
      <button>Click aqui!</button>
    </div>
  )
}

export default CustomButton;

