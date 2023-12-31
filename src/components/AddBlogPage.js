import React from 'react'
import BlogForm from './BlogForm'
import {connect} from 'react-redux'
import {addBlogToDatabase} from '../actions/blogs'

const AddBlogPage = (props) => {
  return (
    <div className='container'>
        <h4 className='border-bottom py-3'>Create</h4>
        <BlogForm onSubmit={(blog) =>{
            props.dispatch(addBlogToDatabase(blog));
            props.history.push('/blogs')
        }}/>
    </div>
  )
}

export default connect()(AddBlogPage)