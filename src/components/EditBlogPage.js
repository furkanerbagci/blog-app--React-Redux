import React from 'react'
import BlogForm from './BlogForm'

import{connect} from 'react-redux'
import { editBlogFromDatabase, removeBlogFromDatabase } from '../actions/blogs'

const EditBlogPage = (props) => {
  return (
    <div className='container'>
      <h4 className='border-bottom py-3'>Edit</h4>
      <BlogForm blog={props.blog}
      onSubmit={(blog) =>{
        props.dispatch(editBlogFromDatabase(props.blog.id , blog))
        props.history.push('/blogs')
      }}
        />
        <div className="d-flex justify-content-end mt-2">
        <button className=' btn btn-outline-danger'
          onClick={()=>{
            props.dispatch(removeBlogFromDatabase( props.blog.id))
        props.history.push('/blogs')

          }}
          
        >Delete</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state,props) =>{
  return {
    blog : state.blogs.find((b)=>{
      return b.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditBlogPage)