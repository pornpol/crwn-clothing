import React, { Component } from "react";
import "./ShopPage.style.scss";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";

import SHOP_DATA from "./ShopPage.data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...othersCollectionProps }) => (
          <CollectionPreview key={id} {...othersCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
