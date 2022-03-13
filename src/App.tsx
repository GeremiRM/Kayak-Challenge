import "./App.scss";
import { Airlines } from "./Components/Airlines";
import { Filter } from "./Components/Filter";

import { Heading } from "./Components/Heading";
import { Container } from "./Components/Shared/Container";

const App = () => {
  return (
    <div>
      <Heading />
      <Container>
        <Filter />
        <Airlines />
      </Container>
    </div>
  );
};

export default App;
