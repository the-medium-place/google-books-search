import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './style.css';

export default function index(props) {




  return (
    <div className="book-card">
      <Row>
        <Col xs={10}>
          <div className="book-info">
            <h2>{props.title}</h2>
            <h5>{props.subTitle}</h5>
            <p>{props.authors}</p>
          </div>
        </Col>
        <Col>
        <div className="book-button">
          <Button type="submit" id={props.bookID}>Save</Button>{' '}
        </div>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <div className="book-img">
            <img src={props.imgURL} alt="Book Thumbnail" />
          </div>
        </Col>
        <Col>
          <p>{props.description}</p>
          <br />
          <p>For more info click <a href={props.infoLink} target="_blank" rel="noopener noreferrer">HERE</a>!</p>
        </Col>
      </Row>


    </div>




    // <tr id={props.bookID}>
    //   <td><img src={props.imgURL} alt="Book Cover Thumbnail" /></td>
    //   <td><h3>{props.title}</h3><br /><p>{props.subTitle}</p></td>
    //   <td>{props.description}<br />For more info click <a href={props.infoLink}>HERE</a>!</td>

    // </tr>

  )
}
