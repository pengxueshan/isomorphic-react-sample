import React, { Component } from "react"
import { connect } from "react-redux"

export default connect(
    (state) => ({
        issue: state.issue.issue
    })
)(class Bar extends Component {
    static fetchData() {
        console.log(this)
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
