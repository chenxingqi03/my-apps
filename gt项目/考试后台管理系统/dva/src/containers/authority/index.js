import React, { Component } from 'react';
import RouterView from "@/router";

class index extends Component {

    render() {
        const { routes, history } = this.props;
        return (
            <div className = "user">
                authority page
                <RouterView routes={routes} history={history}></RouterView>
            </div>
        );
    }
}

export default index;