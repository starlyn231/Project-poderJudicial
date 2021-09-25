import React from "react";
import "./breadcrumb.css";
function Breadcrumb() {
  return (
    <>
      <ul class="collapsed">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">First link</a>
        </li>
        <li>
          <a href="#">Second link</a>
        </li>
        <li>
          <a href="#">Another lengthier link</a>
        </li>
        <li>
          <a href="#">Final link in the hierarchy</a>
        </li>
        <li>Current page</li>
      </ul>
    </>
  );
}

export default Breadcrumb;
