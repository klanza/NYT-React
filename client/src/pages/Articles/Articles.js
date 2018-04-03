import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
    state = {
        books: [],
        keyword: "",
        author: "",
        synopsis: ""
    };

    //   loadBooks = () => {
    //     API.getBooks()
    //       .then(res =>
    //         this.setState({ books: res.data, keyword: "", author: "", synopsis: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

    //   deleteBook = id => {
    //     API.deleteBook(id)
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

      handleFormSubmit = event => {
        event.preventDefault();
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?
                        api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${this.state.keyword}`
        if (this.state.keyword && this.state.startYear && this.state.endYear) {
          $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
      };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1><strong><i class="fa fa-newspaper-o"></i> New York Times Article Scrubber</strong></h1>
                            <h3>Search for and annotate articles of interest!</h3>
                        </Jumbotron>
                        <form>
                            <Input
                                label="Search keyword"
                                value={this.state.keyword}
                                onChange={this.handleInputChange}
                                name="keyword"
                                placeholder="Search term (required)"
                            />
                            <Input
                                label="Start Year for Article"
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                name="startYear"
                                placeholder="Start year for search"
                            />
                            <Input
                                label="End Year for Article"
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                name="endYear"
                                placeholder="End year for search"
                            />
                            <FormBtn
                                disabled={!(this.state.keyword && this.state.startYear && this.state.endYear)}
                                onClick={this.handleFormSubmit}
                            >Search Articles
                            </FormBtn>
                        </form>
                    </Col>
                    {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.keyword} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
                </Row>
            </Container>
        );
    }
}

export default Articles;
