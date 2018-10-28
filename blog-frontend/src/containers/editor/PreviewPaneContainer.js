// title 값과 markdown 값을 스토어에서 받아와 PreviewPane에 넣어 줍시다.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreviewPane from 'components/editor/PreviewPane';

class PreviewPaneContainer extends Component {
    render() {
        const { markdown, title } = this.props;
        return(
            <PreviewPane title={title} markdown={markdown}/>
        );
    }
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown')
    })
)(PreviewPaneContainer);