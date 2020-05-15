import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './style.css';

export default function index() {
    return (
        <Jumbotron fluid id="jumbotron-style">
        <Container>
          <h1 className="text-center">Google Books Search</h1>
          <p className="text-center">
            Search for books using the search field above. Save your favorites to come back to later!
          </p>
        </Container>
      </Jumbotron>
    )
}
