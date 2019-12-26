import React from "react";
import "./CollectionPage.style.scss";

import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem.component";

const CollectionPage = ({ collection: { id, title, routeName, items } }) => (
  <div className="collection-page">
    <span className="title">{title}</span>
    <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
