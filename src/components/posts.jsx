import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import queryString from "query-string";
import http from "../services/httpService";
import config from "../config.json";
import TableBody from "./common/tableBody";
import "react-toastify/dist/ReactToastify.css";

class Posts extends Component {
  state = {
    posts: []
  };

  columns = [
    { path: "title", label: "Title" },
    {
      key: "update",
      content: item => (
        <button
          type="button"
          onClick={e => this.handleUpdate(item, e)}
          className="btn btn-primary"
        >
          Update
        </button>
      )
    },
    {
      key: "delete",
      content: item => (
        <button
          type="button"
          onClick={e => this.handleDelete(item, e)}
          className="btn btn-danger"
        >
          Delete
        </button>
      )
    }
  ];

  constructor({ location }) {
    super();
    console.log(queryString.parse(location.search));
  }

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndPoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "Raju Hasan", body: "Shaoli Hasan" };
    const { data: post } = await http.post(config.apiEndPoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleDetail = post => {
    console.log("Detail", post);
  };

  handleUpdate = async (post, e) => {
    e.stopPropagation();
    post.title = "Updated";
    await http.put(config.apiEndPoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post, e) => {
    e.stopPropagation();
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.put(config.apiEndPoint + "/99999" + post.id);
      //throw new Error("");
    } catch (ex) {
      console.log("HANDLE DELETE CATCH BLOCK");

      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      // else {
      //    console.log("Logging the error", ex);
      //    alert("An unexpected error occured.");
      // }

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    const { match } = this.props;

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="my-3">
          <h2>Posts</h2>
          <span>
            Year:{match.params.year}, Month:{match.params.month}
          </span>
        </div>

        <button
          type="button"
          onClick={() => this.handleAdd()}
          className="btn btn-primary"
        >
          Add
        </button>
        <div className="table-responsive my-3">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                {this.columns.map(column => (
                  <th>{column.label}</th>
                ))}
              </tr>
            </thead>
            <TableBody
              data={this.state.posts}
              columns={this.columns}
              onDetail={this.handleDetail}
            />
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
