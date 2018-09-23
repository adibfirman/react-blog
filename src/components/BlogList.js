import React from 'react'

const BlogList = props => (

  <div>
    <h2 style={{ lineHeight: 0 }}>{props.title}</h2>
    <label>{props.author}</label>, <em>{props.createdAt}</em>
    <p>{props.desc}</p>
  </div>

)

export default BlogList