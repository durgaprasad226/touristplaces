import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import { NavItem, NavLink, Nav } from "reactstrap";
import TouristPlace from "./TouristPlace";

const TouristPlaceArray = [
  {
    Name: "AmerFort",
    ImagePath: "images/AmerFort.png",
    Type: "Fort",
    MoreInfo: "https://en.wikipedia.org/wiki/Amber_Fort",
  },
  {
    Name: "Baga Beach",
    ImagePath: "images/Baga Beach.png",
    Type: "Beach",
    MoreInfo:
      "https://www.tripadvisor.in/Attraction_Review-g635747-d2697362-Reviews-Baga_Beach-Baga_North_Goa_District_Goa.html",
  },
  {
    Name: "Charminar",
    ImagePath: "images/Charminar.png",
    Type: "Fort",
    MoreInfo: "https://en.wikipedia.org/wiki/Charminar",
  },
  {
    Name: "Dal Lake",
    ImagePath: "images/Dal Lake.png",
    Type: "Lake",
    MoreInfo: "https://en.wikipedia.org/wiki/Dal_Lake",
  },
  {
    Name: "India Gate",
    ImagePath: "images/India Gate.png",
    Type: "Gate",
    MoreInfo: "https://en.wikipedia.org/wiki/India_Gate",
  },
];
function App() {
  return (
    <Container>
      <Row>
        <UncontrolledCarousel
          className="Slider"
          items={[
            {
              altText: "AmerFort",
              caption: "AmerFort",
              key: 1,
              src: "images/AmerFort.png",
            },
            {
              altText: "Baga Beach",
              caption: "Baga Beach",
              key: 2,
              src: "images/Baga Beach.png",
            },
            {
              altText: "Charminar",
              caption: "Charminar",
              key: 3,
              src: "images/Charminar.png",
            },
            {
              altText: "Dal Lake",
              caption: "Dal Lake",
              key: 4,
              src: "images/Dal Lake.png",
            },
            {
              altText: "India Gate",
              caption: "India Gate",
              key: 5,
              src: "images/India Gate.png",
            },
            {
              altText: "Ellora Caves",
              caption: "Ellora Caves",
              key: 6,
              src: "images/Ellora Caves.png",
            },
            {
              altText: "GoldenTemple",
              caption: "GoldenTemple",
              key: 7,
              src: "images/GoldenTemple.png",
            },
            {
              altText: "HawaMahal",
              caption: "HawaMahal",
              key: 8,
              src: "images/HawaMahal.png",
            },
          ]}
        />
      </Row>
      <Row>
        <Nav>
          <NavItem>
            <NavLink active href="#">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">All Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Tour Packages
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
      {/* <Row>
        <TouristPlace
          Name="AmerFort"
          ImagePath="images/AmerFort.png"
          Type="Fort"
          MoreInfo="https://en.wikipedia.org/wiki/Amber_Fort"
        ></TouristPlace>
        <TouristPlace
          Name="Baga Beach"
          ImagePath="images/Baga Beach.png"
          Type="Beach"
          MoreInfo="https://www.tripadvisor.in/Attraction_Review-g635747-d2697362-Reviews-Baga_Beach-Baga_North_Goa_District_Goa.html"
        ></TouristPlace>
        <TouristPlace
          Name="Charminar"
          ImagePath="images/Charminar.png"
          Type="Fort"
          MoreInfo="https://en.wikipedia.org/wiki/Charminar"
        ></TouristPlace>
        <TouristPlace
          Name="Dal Lake"
          ImagePath="images/Dal Lake.png"
          Type="Lake"
          MoreInfo="https://en.wikipedia.org/wiki/Dal_Lake"
        ></TouristPlace>
        <TouristPlace
          Name="India Gate"
          ImagePath="images/India Gate.png"
          Type="Gate"
          MoreInfo="https://en.wikipedia.org/wiki/India_Gate"
        ></TouristPlace>
        <TouristPlace
          Name="Ellora Caves"
          ImagePath="images/Ellora Caves.png"
          Type="Caves"
          MoreInfo="https://en.wikipedia.org/wiki/Ellora_Caves"
        ></TouristPlace>
        <TouristPlace
          Name="GoldenTemple"
          ImagePath="images/GoldenTemple.png"
          Type="Temple"
          MoreInfo="https://en.wikipedia.org/wiki/Golden_Temple"
        ></TouristPlace>
        <TouristPlace
          Name="HawaMahal"
          ImagePath="images/HawaMahal.png"
          Type="Palace"
          MoreInfo="https://en.wikipedia.org/wiki/Hawa_Mahal"
        ></TouristPlace>
      </Row> */}
      <Row>
        {TouristPlaceArray.map((place) => {
          return (
            <TouristPlace
              Name={place.Name}
              ImagePath={place.ImagePath}
              Type={place.Type}
              MoreInfo={place.MoreInfo}
            ></TouristPlace>
          );
        })}
      </Row>
      <Row>
        <p className="footertext">
          &copy; Copyright belongs to TouristPlaces.
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </p>
      </Row>
    </Container>
  );
}

export default App;
