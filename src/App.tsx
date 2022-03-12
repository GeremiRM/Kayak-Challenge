import "./App.scss";
import { Airlines } from "./Components/Airlines";

import { Heading } from "./Components/Heading";
import { Container } from "./Components/Shared/Container";

const App = () => {
  return (
    <div>
      <Heading />
      <Container>
        <Airlines />
      </Container>
    </div>
  );
};

export default App;
