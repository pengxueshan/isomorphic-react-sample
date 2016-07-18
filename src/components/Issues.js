import React, { Component } from "react"
import { connect } from "react-redux"

import { queryIssues } from "../app"

export default connect(
    (state) => ({
        issues: state.issues.issues
    })
)(class Issues extends Component {
    static fetchData(props) {
        console.log(":::", this, props)
    }

    render() {
        const { issues } = this.props
        return (
            <div>
                {/* TODO */}
                <p>issues...</p>
            </div>
        )
    }
})
