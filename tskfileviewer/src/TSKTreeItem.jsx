import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TreeItem from "@material-ui/lab/TreeItem";

import React, { Component } from "react";

class TSKTreeItem extends Component {
  constructor(props) {
    super(props);
    if (this.props.childrenCount > 0) {
      this.state = { children: [{ id: "x", name: "Loading..." }] };
      fetch(
        "http://localhost:8080/v1/cases/test-datasources-endpoint_20200128_180031/files?parentID=" +
          this.props.objectId
      )
        .then(response => response.json())
        .then(response => response.filter(r => r.name != "." && r.name != ".."))
        .then(response => {
          response.sort((x, y) => {
            return x.isDir === y.isDir ? 0 : x.isDir ? -1 : 1;
          });
          return response;
        })
        .then(response => {
          this.setState({ children: response });
        });
    } else {
      this.state = { children: [] };
    }
  }

  componentWillUnmount() {
    console.log("I'm unmounting.");
  }

  render() {
    return (
      <TreeItem
        key={this.props.objectId}
        nodeId={this.props.objectId}
        label={
          <div>
            <span style={{ marginRight: 10 }}>{this.props.name}</span>
            {this.props.childrenCount > 0 && (
              <span
                style={{ display: "inline", float: "right", marginRight: 10 }}
              >
                {this.props.childrenCount}
              </span>
            )}
          </div>
        }
      >
        {this.state.children.map(response => (
          <TSKTreeItem
            key={response.id}
            objectId={response.id.toString()}
            name={response.name}
            childrenCount={response.childrenCount}
            isFolder={response.isDir}
          />
        ))}
      </TreeItem>
    );
  }
}

export default TSKTreeItem;
