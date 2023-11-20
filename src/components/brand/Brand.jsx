import React from "react";
import { google, gramercy, groove, meta, subvrsive } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div className="newview__brand section__padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={gramercy} />
      </div>
      <div>
        <img src={meta} />
      </div>
      <div>
        <img src={groove} />
      </div>
      <div>
        <img src={subvrsive} />
      </div>
    </div>
  );
};

export default Brand;