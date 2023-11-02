import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ id, title , description }) => {
  return (
    <>
    <div class="card mb-5">
  <div class="card-header">
  <h5 class="card-title">{title}</h5>
  </div>
  <div class="card-body">
    
    <p class="card-text">{description}.</p>
    <Link className="btn btn-primary me-3" to={`/blogs/${id}`}>
            Details
          </Link>
          <Link className="btn btn-danger" to={`/edit/${id}`}>
            Edit
          </Link>
  </div>
</div>
      
    </>
  );
};

export default BlogListItem;
