import React from "react";
import { API } from "../../types";
import { Data, defaultData } from "./data";

export const HTMLElement: React.FC<API<Data>> = ({ data = defaultData, setData }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.html }}>
    </div>
  );
};
