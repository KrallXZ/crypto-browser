import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { boundSearch } from '../reducers/search'
import SearchBar from './SearchBar'

const styles = {
  flex: {
    flex: 1
  }
}

class Header extends React.Component {
  onSearch = ev => {
    boundSearch(ev.target.value)
  }

  render() {
    return (
      <header>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              type="title"
              color="inherit"
              className={this.props.classes.flex}
            >
              CryptoBrowser
            </Typography>
            <SearchBar
              callback={this.onSearch}
              value={this.props.search.searchString}
            />
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Header))
