import React from 'react'
import Input from 'material-ui/Input'

export default class SearchBar extends React.PureComponent {
  render() {
    return (
      <Input
        placeholder="Search"
        value={this.props.value}
        onChange={this.props.callback}
      />
    )
  }
}
