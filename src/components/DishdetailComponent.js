import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = { dish: this.props.dish };
  }
  componentDidMount() {
    console.log("Dishdetail Component componentDidMount invoked");
  }
  componentDidUpdate() {
    console.log("Dishdetail Component componentDidUpdate invoked");
  }
  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1 ">
        <Card>
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  renderComments(comments) {
    if (comments != null) {
      const commentsList = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1 ">
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentsList}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    console.log("Dishdetail component render invoked");
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default Dishdetail;
