import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import Register from "./Register";
import { Route, Link, Routes } from "react-router-dom";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Auth Frontend</h1>
          <section id="navigation">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/free">Free Component</Link>
            <Link to="/auth">Auth Component</Link>
          </section>
        </Col>
      </Row>

      {/* Render routes here */}
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<ProtectedRoutes component={AuthComponent} />} />

      </Routes>
    </Container>
  );
}

export default App;
