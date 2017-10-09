import React, { Component } from 'react';

import template from "./InterTop.rt";


class InterTop extends Component {
    render() {
        return template.apply(this);
    }
    getActiveSlug() {
        if (this.state && this.state.active_slug)
            return this.state.active_slug;
        else
            return this.props.active_slug;
    }
    itemSelected(item) {
        this.setState({'active_slug': item.slug});
    }
}

export default InterTop;
