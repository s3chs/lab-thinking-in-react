import React, { Component } from 'react';
import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar';


export default class FilterableProductTable extends Component {
  render() {
    return <div>
      <SearchBar />
      <ProductTable />
    </div>;
  }
}
