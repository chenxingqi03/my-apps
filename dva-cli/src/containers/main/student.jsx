import React, { Component } from 'react'
import Routerviews from "@/router";
export default class menuleft extends Component {
    render() {
        return (
            <div>
                <Routerviews routes={this.props.routes} history={this.props.history} ></Routerviews>
            </div>
        )
    }
}
