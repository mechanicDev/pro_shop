import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";
import { Product } from "./screens/Product.jsx";
import { Homescreen } from "./screens/Homescreen.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={Product} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
