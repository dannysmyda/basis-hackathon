import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Folder, FolderOpen } from "@material-ui/icons";
import DescriptionIcon from "@material-ui/icons/Description";
import TreeView from "@material-ui/lab/TreeView";

import React, { Component } from "react";
import TSKTreeItem from "./TSKTreeItem";

class TSKTreeView extends Component {
  constructor(props) {
    super(props);
  }

  useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400
    }
  });

  render() {
    return (
      <TreeView
        className="topMargin maxWidth"
        defaultCollapseIcon={<Folder />}
        defaultExpandIcon={<FolderOpen />}
        defaultEndIcon={<DescriptionIcon />}
      >
        {
          <TSKTreeItem
            key={this.props.objectId}
            objectId={this.props.objectId}
            name={this.props.name}
            childrenCount={this.props.childrenCount}
            isFolder={this.props.isFolder}
          />
        }
      </TreeView>
    );
  }
}

export default TSKTreeView;
