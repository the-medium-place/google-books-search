import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import BookCard from '../BookCard'
import './style.css';
import API from '../../utils/API';

export default class Booklist extends Component {

    state = {
        userInput: '',
        searchResults: []
    }

    handleSubmit = event => {
        event.preventDefault();
        API.search(this.state.userInput)
            .then(res => {
                if (!res.data.items) {
                    this.setState({
                        searchResults: [{
                            id: "",
                            volumeInfo: {
                                authors: [],
                                title: "Search Returned No Results",
                                subTitle: "Please try another search...",
                                infoLink: "",
                                description: "",
                                imageLinks: {
                                    thumbnail: "https://media.giphy.com/media/dt0Oep0PKarQG7cQLp/giphy.gif"
                                }
                            }
                        }]
                    })
                } else {
                    this.setState({
                        searchResults: res.data.items,
                        userInput: ""
                    })
                }
            })
    }

    handleInputChange = event => {

        this.setState({ userInput: event.target.value });
    }


    handleBookSave = event => {
        const favBook = this.state.searchResults.find(book => book.id === event.target.id);
        console.log(favBook);
        API.addFav(favBook);
        console.log("end client side");
    }

    renderBooks = () => {
        if (this.state.searchResults.length < 1) {
            // console.log('no results test')
            return <div className="text-center"><h1>Search for a book to start!</h1></div>
        } else {
            return <div>
                {this.state.searchResults.map((book, index) => <BookCard
                    authors={book.volumeInfo.authors}
                    imgURL={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    subTitle={book.volumeInfo.subtitle}
                    infoLink={book.volumeInfo.infoLink}
                    description={book.volumeInfo.description}
                    bookID={book.id}
                    key={index}
                    handleBookSave={this.handleBookSave} />)}
            </div>
        }
    }



    render() {
        return (
            <div>

                <div className="search-form-container">

                    <form onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Row>
                                <Col xs={12}>
                                    <Form.Control type="text" placeholder="Book Title..." onChange={this.handleInputChange} id="book-input" />
                                </Col>
                            </Row>
                            <Row>
                                {/* <Col xs={10}></Col> */}
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </form>

                </div>
                <div className="books-container">
                    {this.renderBooks()}
                </div>
            </div>


        )
    }
}
