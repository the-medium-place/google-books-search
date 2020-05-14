import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function index() {
    return (
        <Jumbotron fluid>
        <Container>
          <h1 className="text-center">Google Books Search</h1>
          <p className="text-center">
            Search for books using the search field above. Save your favorites to come back to later!
          </p>
        </Container>
      </Jumbotron>
    )
}
