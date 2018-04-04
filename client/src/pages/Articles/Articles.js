import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
    state = {
        articles: [],
        keyword: "",
        startYear: "",
        endYear: ""
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
        if (this.state.keyword && this.state.startYear && this.state.endYear) {
            let searchTerms = {
                keyword: this.state.keyword,
                startYear: this.state.startYear,
                endYear: this.state.endYear,
            }
            console.log(searchTerms)
            API.searchArticle(this.state.keyword, this.state.startYear, this.state.endYear)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-8">
                        <Jumbotron>
                            <h1><strong><i class="fa fa-newspaper-o"></i> New York Times Article Scrubber</strong></h1>
                            <h3>Search for and annotate articles of interest!</h3>
                        </Jumbotron>
                        <Card>
                        <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
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
                        </Card>
                    </Col>
                </Row>
                <br>
                </br>
                <Row>
                    <Col size="md-8">
                        <Card>
                            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i> Results</strong></h3>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Articles;
