import React from 'react'
import { connect } from 'react-redux'
import { boundItemsLoadRequest } from '../../reducers/items'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography/Typography';

class Home extends React.Component {
  componentWillMount() {
    boundItemsLoadRequest()
  }

  render() {
    if (this.props.items.errorMessage) {
      return (<Typography>Wystąpił błąd przy pobieraniu kryptowalut :(</Typography>)
    }

    const filteredItems = this.props.items.filter(item => {
      if (
        item.name
          .toUpperCase()
          .includes(this.props.search.searchString.toUpperCase())
      ) {
        return true
      }
    })

    const mappedItems = filteredItems.map((item, index) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell numeric>{item.price_usd}</TableCell>
        <TableCell numeric>{item.price_btc}</TableCell>
      </TableRow>
    ))

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell numeric>Cena (USD)</TableCell>
              <TableCell numeric>Cena (BTC)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>{mappedItems}</TableBody>
        </Table>
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    search: state.search
  }
}

export default connect(mapStateToProps)(Home)
