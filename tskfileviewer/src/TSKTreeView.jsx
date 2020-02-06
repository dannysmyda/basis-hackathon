import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem"

import React, { Component } from "react";
import TSKTreeItem from "./TSKTreeItem";

class TSKTreeView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TreeView>
            {<TSKTreeItem key = {this.props.key} 
                          objectId = {this.props.objectId} 
                          name = {this.props.name} 
                          childrenCount = {this.props.childrenCount} 
                          isFolder = {this.props.isFolder}/>}
        </TreeView>
    );
  }
}

export default TSKTreeView;
