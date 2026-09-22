const UserState = ({ active }: { active: boolean }) => {
  return <p>Estado: {active ? "Activo" : "Inactivo"}</p>;
};

export default UserState;
