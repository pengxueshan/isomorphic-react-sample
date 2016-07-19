import React, { Component } from "react"
import { connect } from "react-redux"
import { getIssue } from "../app"

export default connect(
    (state) => ({
        issue: state.issue.issue
    })
)(class Issue extends Component {
    static fetchData({ store, location, params }) {
        return store.dispatch(getIssue(params.id))
    }

    render() {
        return (
            <div>
                {/* TODO */}
                <p>issue...</p>
            </div>
        )
    }
})
