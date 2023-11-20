import React from "react";
import { google, gramercy, groove, meta, subvrsive } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div className="section__padding newview__brand">
      <div>
        <img src={gramercy} />
      </div>
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={subvrsive} />
      </div>
      <div>
        <img src={meta} />
      </div>
      <div>
        <img src={groove} />
      </div>
    </div>
  );
};

export default Brand;
