import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TSKTreeView from "./TSKTreeView";

/**
 * Bootstrap ReactJS
 */
fetch(
  "http://localhost:8080/v1/cases/test-datasources-endpoint_20200128_180031/files/13580"
)
  .then(response => response.json())
  .then(response => {
    ReactDOM.render(
      <TSKTreeView
        objectId={response.id.toString()}
        name={response.name}
        childrenCount={response.childrenCount}
        isFolder={response.isDir}
      />,
      document.getElementById("root")
    );
  });
