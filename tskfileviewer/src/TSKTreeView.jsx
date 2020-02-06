import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem"

import React, { Component } from "react";
import TSKTreeItem from "./TSKTreeItem";

class TSKTreeView extends Component {

  constructor(props) {
    super(props)
    this.state = {children : []};
  }

  handleNodeToggle = (event, nodes) => {
    console.log("Tree view has already toggled the node");

  }

  render() {
    return (
        <TreeView
          onNodeToggle = {this.handleNodeToggle}
        >
          <TSKTreeItem
            key = "13580"
            objectId = "13580"
            name = "abc"
          />
        </TreeView>
    );
  }
}

export default TSKTreeView;
