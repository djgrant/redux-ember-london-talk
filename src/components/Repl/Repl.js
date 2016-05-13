import './repl.styl';
import React, { Component } from 'react';

export default class Repl extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const iframeNode = this.refs.iframe;
    iframeNode.srcdoc = `<script>${e.target.value}<\/script>`;
  }

  render() {
    return (
      <div>
        <div className="pane">
          <textarea onChange={this.handleChange}></textarea>
        </div>
        <div className="pane">
          <iframe ref="iframe" />
        </div>
      </div>
    );
  }
}
