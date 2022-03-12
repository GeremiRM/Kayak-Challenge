import "./styles.scss";

export const Heading: React.FC = () => {
  return (
    <header className="header">
      <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="Kayak Logo" />
    </header>
  );
};
