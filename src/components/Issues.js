import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

import { queryIssues } from "../app"

export default connect(
    state => ({
        issues: state.issues.issues
    })
)(class Issues extends Component {
    static fetchData({ store }) {
        return store.dispatch(queryIssues())
    }

    componentDidMount() {
        this.props.dispatch(queryIssues())
    }

    render() {
        const { issues } = this.props

        return (
            <div>
                <h2>Issues:</h2>
                <ul>
                    {issues.map((issue, index) => (
                        <li key={index}>
                            <Link to={"/issues/" + issue.number}>{issue.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
})
