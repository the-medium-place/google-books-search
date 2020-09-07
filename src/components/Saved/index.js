import React, { Component } from 'react';
import SavedCard from '../SavedCard';
import API from '../../utils/API';
import './style.css';

export default class Saved extends Component {

    state = {
        searchResults: []
        }

    componentDidMount = () => {
        API.searchFavs()
            .then(res => {
                this.setState({ searchResults: res.data })
            })
            .then(() => console.log(this.state.searchResults))
            .catch(err => console.log(err))
    }

    handleBookDelete = (event) => {
        // console.log(event.target.id)
        this.setState({ clickedBookID: event.target.id })
        API.deleteFav(event.target.id)
        .then(res=> {
            window.location.href = "/saved";

        })
        .catch(err=> console.log(err))
    }

    renderBooks = () => {
        if (this.state.searchResults.length < 1) {
            // console.log('no results test')
            return <div className="text-center"><h1>No Saved Books Yet! <a href="/search">Search</a> for books and click the 'Save' button to see them here!</h1></div>
        } else {
            return <div>
                {this.state.searchResults.map((book, index) => <SavedCard
                        authors={book.authors}
                        imgURL={book.imgURL}
                        title={book.title}
                        subTitle={book.subtitle}
                        infoLink={book.infoLink}
                        description={book.description}
                        bookID={book.bookID}
                        key={index}
                        id={book._id}
                        handleBookDelete={this.handleBookDelete}
                    />
                    )}
            </div>
        }
    }



    render() {
        return (
            <div className="books-container">
                <div className="inner-light">

                <div className="saved-container">
                {this.renderBooks()}

                    {/* {this.state.searchResults.map((book, index) => <SavedCard
                        authors={book.authors}
                        imgURL={book.imgURL}
                        title={book.title}
                        subTitle={book.subtitle}
                        infoLink={book.infoLink}
                        description={book.description}
                        bookID={book.bookID}
                        key={index}
                        id={book._id}
                        handleBookDelete={this.handleBookDelete}
                    />
                    )} */}

</div>
                </div>
            </div>
        )
    }
}
