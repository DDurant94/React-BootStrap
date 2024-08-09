import  { Container,Button,Card,Row,Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Marvel from "./../../assets/pictures/Marvel.jpg";

const HomePage = () => {

  return (
    <div id="home-page" className="border border-black rounded shadow border border-white p-1 m-3 bg-dark">

      <header className="mb-5">

        <div className="bg-dark-subtle p-4 rounded border border-danger">

          <h1 className="text-center text-decoration-underline text-white">Welcome to React Marvel API</h1>
          
        </div>

      </header>

      <div className="container-fluid-center m-1 p-3">

        <img src={Marvel} alt="Marvel picture" className="img-fluid rounded border border-danger"/>

        <div className="container-fluid-center m-5 d-block">

          <NavLink to='/character-library'><Button variant="primary container-fluid mx-auto p-2">Search Characters</Button></NavLink>

        </div>

      </div>

      <div className="p-3 m-3">

        <Container className="p-3 bg-danger rounded border border-danger-subtle">

          <h2 className="text-center text-decoration-underline text-white">Features</h2>

          <Row className="">

            <Col className="p-3">

              <Card  className="border border-dark shadow-lg">
                <Card.Body>
                  <Card.Title>Marvel Characters</Card.Title>
                  <Card.Text>
                    Come see all the Marvel Characters listed in alphabetical order. Click on the characters picture for more details. 
                  </Card.Text>
                  <NavLink to='/character-library'><Button variant="primary border border-dark shadow" className="mt-5 container-fluid">Search Characters</Button></NavLink>
                </Card.Body>
              </Card>
            
            </Col>

            <Col className="p-3">
            
              <Card className="border border-dark shadow-lg">
                <Card.Body>
                  <Card.Title>Marvel Comics</Card.Title>
                  <Card.Text>
                    Web page is not available at the moment. Will be coming soon. Ability to search for comics.
                  </Card.Text>
                  <NavLink to='/comics'><Button variant="primary border border-dark shadow" className="mt-5 container-fluid">Search Comics</Button></NavLink>
                </Card.Body>
              </Card>
            
            </Col>

          </Row>

        </Container>

      </div>

    </div>

  );
}

export default HomePage