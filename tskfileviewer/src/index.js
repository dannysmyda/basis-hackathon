import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TSKTreeView from "./TSKTreeView";

/**
 * Bootstrap ReactJS
 */

const getRootObjects = async () => {
    //In the future, this TreeView page would be boostrapped with all Cases.
    const response = await fetch("http://localhost:8080/v1/cases/test-datasources-endpoint_20200128_180031/files/13580")
    const json = await response.json();
    ReactDOM.render(<TSKTreeView key = {json.id}
         objectId = {json.id.toString()} 
         name = {json.name} 
         childrenCount = {json.childrenCount} 
         isFolder = {json.isDir}/>, document.getElementById("root"));
}

getRootObjects();
