import React, { Component } from 'react'

// Component
import Searchbar from '../components/SearchBar'
import BlogList from '../components/BlogList';
import NotFound from '../components/NotFound';

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {

  state = {
    search: '',
    listBlog: [],
    copyListBlog: [],
    loading: true
  }
  
  componentDidMount() {
    this.handleGetBlogs()
  }

  onChangeSearch = event => {
    const { value } = event.target
    const listBlog = this.filteringListBlog(value)

    this.setState({
      search: value,
      listBlog: value.length ? listBlog : this.state.copyListBlog
    })
  }

  filteringListBlog (qry) {
    const smallQry = qry.toLowerCase()
    return this.state.listBlog.filter(data => {
      const { title, content, author } = data
      const smallTitle = title.toLowerCase()
      const smallDesc = content.toLowerCase()
      const smallAuthor = author.toLowerCase()

      return smallTitle.includes(smallQry) || smallDesc.includes(smallQry) || smallAuthor.includes(smallQry)
    })
  }

  handleGetBlogs() {
    fetch(link)
      .then(result => result.json())
      .then(data => {
        this.setState({
          listBlog: data,
          copyListBlog: data,
          loading: false
        })
      })
  }

  renderBlogList() {
    return this.state.listBlog.map(data => {
      const { id, title, content, author, created_at } = data
      return (
        <BlogList
          key={id}
          title={title}
          desc={content}
          author={author}
          createdAt={created_at}
        />
      )
    })
  }

  render() {
    const { listBlog, loading } = this.state

    return (
      <div>
        <Searchbar
          search={this.state.search}
          onChangeSearch={this.onChangeSearch}
        />
        {
          !listBlog.length &&
          !loading &&
          <NotFound />
        }
        {
          !!listBlog.length &&
          this.renderBlogList()
        }
      </div>
    )
  }

}

export default App