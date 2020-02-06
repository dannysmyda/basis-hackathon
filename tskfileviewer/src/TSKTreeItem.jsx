import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TreeItem from "@material-ui/lab/TreeItem";

import React, { Component } from "react";

class TSKTreeItem extends Component {

  constructor(props) {
    super(props);
    if(this.props.childrenCount == 0) {
      this.state = {children : []};
    } else {
      this.state = {children : [{id: "x", name: "Loading..."}]}
    }
  }

  handleOnClick = () => {
    if(this.props.childrenCount == 0) return;

    fetch("http://localhost:8080/v1/cases/test-datasources-endpoint_20200128_180031/files?parentID="+this.props.objectId)
     .then((response) => {
      return response.json();
    }).then((response) => {
      //Sort the responses by the isDir attribute. That way, all folders show before files.
      response.sort((x, y) => {
        return (x.isDir === y.isDir) ? 0 : x.isDir ? -1 : 1;
      });
      console.log(response);
      this.setState({children : response});
    });
  }

  render() {
    return (
      <TreeItem
        nodeId = {this.props.objectId}
        label = {this.props.name}
        onClick = {this.handleOnClick}
      >
        {this.state.children.map(response => 
          <TSKTreeItem key = {response.id} 
                       objectId = {response.id.toString()} 
                       name = {response.name} 
                       childrenCount = {response.childrenCount} 
                       isFolder = {response.isDir}/>
        )}
      </TreeItem>
    );
  }
}

export default TSKTreeItem;
