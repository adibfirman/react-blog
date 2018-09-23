import React from 'react'

const Searchbar = props => (
  <div align="center">
    <input
      style={styles}
      placeholder="Search Anything..."
      type="text"
      onChange={props.onChangeSearch}
      value={props.search}
    />
  </div>
)

const styles = {
  borderRadius: 10,
  padding: 10,
  width: '50%',
  outline: 'none'
}

export default Searchbar