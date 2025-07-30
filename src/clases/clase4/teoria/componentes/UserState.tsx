export interface State {
  active: boolean;
}

const UserState: React.FC<State> = ({ active }) => {
  return (
    < p > Estado: {active ? "Activo" : "Inactivo"}</p >
  )
}

export default UserState;