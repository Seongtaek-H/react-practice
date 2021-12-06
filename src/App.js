import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import axios from "axios";

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Datail</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <h1> 20% Big SALE </h1>
            <p> 많은 사랑 부탁드립니다. </p>
            <p>
              {" "}
              <button> 더보기 </button>
            </p>
          </div>
          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then(result => {
                    console.log(result.data);
                    shoes변경([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log("실패");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>
        {/* <Route path="/:id">
          <div>아무거나</div>
        </Route> */}
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4> {props.shoes.title} </h4>
      <p>
        {" "}
        {props.shoes.content} & {props.shoes.price}{" "}
      </p>
    </div>
  );
}

export default App;
