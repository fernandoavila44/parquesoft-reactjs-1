import Content from "./Content";

const Medio = () => {
  return (
    <div style={{ border: "1px dashed #94a3b8", borderRadius: 12, padding: 12 }}>
      <p>Este componente no recibe el tema y no lo reenvía.</p>
      <Content />
    </div>
  );
};

export default Medio;
