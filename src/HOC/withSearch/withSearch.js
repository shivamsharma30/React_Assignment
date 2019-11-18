import React, { Component } from 'react';
import './withSearch.scss';

const withSearch = (WrappedComponent, products) => {
  class ProductsListWithSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Products: products,
        SearchText: ''
      };
    }

    handleSearch = event => {
      this.setState({ SearchText: event.target.value });
    };

    filterProducts = () => {
      const { Products, SearchText } = this.state;
      const searchText = SearchText.toLowerCase().trim();
      const filtered = Products.filter(item => {
        return item.sfdcName.toLowerCase().includes(searchText);
      });
      return filtered;
    };

    render() {
      return (
        <>
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={event => {
              this.handleSearch(event);
            }}
          />
          <WrappedComponent products={this.filterProducts()} />
        </>
      );
    }
  }
  return <ProductsListWithSearch />;
};
export default withSearch;
