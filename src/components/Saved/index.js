import React, { Component } from 'react';
import SavedCard from '../SavedCard';
import API from '../../utils/API';

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


    }



    render() {
        return (
            <div className="books-container">

                <div className="saved-container">


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
            </div>
        )
    }
}
