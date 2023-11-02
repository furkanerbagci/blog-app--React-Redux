import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetailsItem = ({ id, title, description }) => {
  return (
    <div className="mt-5">
      <div className="card w-25 mx-auto">
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
          <span>id: {id}</span>
        </div>
        <div className="card-body">
          <p>blog description: {description}</p>
          <NavLink to="/blogs" className="btn btn-primary">Return Blogs</NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsItem;
