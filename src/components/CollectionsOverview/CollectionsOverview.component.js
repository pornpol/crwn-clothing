import React from "react";
import "./CollectionsOverview.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...othersCollectionProps }) => (
      <CollectionPreview key={id} {...othersCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
