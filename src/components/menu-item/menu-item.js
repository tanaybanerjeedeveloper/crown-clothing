import React from "react";
import { withRouter } from "react-router-dom"; //'withRouter' is a Higher Order Component. That means it is a compoenent that takes another component as a parameter and resturns a 'powered-up' component having the same name as the previous component.'withRouter' is a HOD component that gives its wrapping component access to 'location,match and history' props req for routing.
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }} //******
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

//* this div is applied because when we are going to hover over the backgrnd-img we don't want the image to exceed the div. We are applying the div over the 'content' div and not surrounding the 'content' div becz we want the iamge to expand on hover and not the 'content div'.
