import  { Button, Container, Row, Col, Image } from "react-bootstrap";
import logo from "./assets/img/sw-logo.gif";
import alien from "./assets/img/alien.gif";
import time from "./assets/img/420time.gif";
import space from "./assets/img/space.jpeg";
import alienop from "./assets/img/alienop.gif";

function App() {
  const appStyle = {
    backgroundImage: `url(${space})`,
    backgroundRepeat: "repeat",
    minHeight: "100vh",
    fontFamily: "serif"
  }

  const imageStyle = {
    width: "15rem"
  };

  const devotedStyle = {
    color: "lawngreen",
    fontWeight: "bold"
  }

  return (
    <div className="App" style={ appStyle }>
      <header className="App-header">
        <Container>
          <Row>
            <Col sm={ 12 } className="d-flex align-items-between justify-content-center">
              <Image src={ alienop } fluid style={ imageStyle } />
              <Image src={ logo } fluid style={ imageStyle } />
              <Image src={ alienop } fluid style={ imageStyle } />
            </Col>
            <Col sm={ 12 } className="d-flex flex-column align-items-center justify-content-center">
              <p style={ devotedStyle }>Are you devoted?</p>
              <Image src={ alien } fluid style={ imageStyle } />
            </Col>
            <Col sm={ 12 } className="d-flex align-items-center justify-content-center">
              <Image src={ time } fluid style={ imageStyle } />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
