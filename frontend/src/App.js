import Header from "./components/Header.jsx";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import { Homescreen } from "./screens/Homescreen.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
