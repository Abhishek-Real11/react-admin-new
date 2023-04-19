import React from "react";
import Accordion from "react-bootstrap/Accordion";
import HomeLogo from "./logo/table";
import Navbar from "./navbar/table";
import HomeBanners from "./banners/table";
import HomeSquareBoxes from "./square-boxes/table";
import HowToPlay from "./how-to-play/table";
import { useLocation } from "react-router-dom";
import HomeCms from "./content/table";
const Home = () => {
  const location = useLocation();
  
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>LOGO</Accordion.Header>
        <Accordion.Body>
          <HomeLogo />
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="1">
        <Accordion.Header>NAVBAR</Accordion.Header>
        <Accordion.Body>
          <Navbar />
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="2">
        <Accordion.Header>BANNERS</Accordion.Header>
        <Accordion.Body>
          <HomeBanners />
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="3">
        <Accordion.Header>SQUARE BOXES</Accordion.Header>
        <Accordion.Body>
          <HomeSquareBoxes />
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="4">
        <Accordion.Header>HOW TO PLAY</Accordion.Header>
        <Accordion.Body>
          <HowToPlay />
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="5">
        <Accordion.Header>Content</Accordion.Header>
        <Accordion.Body>
          <HomeCms />
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="6">
        <Accordion.Header>APP FEATURES</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="7">
        <Accordion.Header>FREQUENTLY ASKED QUESTIONS</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="8">
        <Accordion.Header>WINNER</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Home;
