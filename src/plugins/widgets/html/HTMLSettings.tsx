import React from "react";
import { API } from "../../types";
import { Data, defaultData } from "./data";

const HTMLSettings: React.FC<API<Data>> = ({ data = defaultData, setData }) => {
  return (
    <div className="HTMLSettings">
      <label>
        HTML
        <input
          type="text"
          onChange={(event) =>
            setData({ ...data, html: String(event.target.value) })
          }
        ></input>
      </label>
    </div>
  );
};

export default HTMLSettings;
