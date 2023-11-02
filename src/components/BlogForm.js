import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      title: props.blog ? props.blog.title: "",
      description: props.blog ? props.blog.description: "",
  
      error: "",
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };

  onDescChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      this.setState({ error: "Please fill in the blanks" });
      console.log(this.state.error);
    } else {
      console.log("submitted");
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now()
      });
    }
  };
  render() {
    return (
      <div className="container">
        {this.state.error && (
          <div className="text-danger">{this.state.error}</div>
        )}
        <form onSubmit={this.onSubmit}>
          <div>
            <label className="form-label" htmlFor="">Title</label>
            <input
              className="form-input mb-5 w-100 form-control"
              type="text"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="">Description</label>
            <textarea
              className="form-input form-control mb-5 w-100"
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.onDescChange}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-secondary ">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
