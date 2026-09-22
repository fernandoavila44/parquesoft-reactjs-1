import ClaseLayout from "../components/ClaseLayout";
import { clases } from "../curso";

const ClaseShell = ({ numero }: { numero: number }) => {
  const clase = clases.find((item) => item.numero === numero);

  if (!clase) {
    return <p>Esta clase no está en el temario.</p>;
  }

  return <ClaseLayout claseNumber={clase.numero} claseTitle={clase.titulo} />;
};

export default ClaseShell;
