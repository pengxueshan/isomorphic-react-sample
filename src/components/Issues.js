import React, { Component } from "react"
import { connect } from "react-redux"

import { queryIssues } from "../app"

export default connect(
    state => ({
        issues: state.issues.issues
    })
)(class Issues extends Component {
    static fetchData({ store }) {
        return store.dispatch(queryIssues())
    }

    render() {
        const { issues } = this.props

        return (
            <div>
                {/* TODO */}
                <h2>Issues:</h2>
                <ul>
                    {issues.map((issue, index) => (
                        <li key={index}>
                            <dl>
                                <dt>id:</dt>
                                <dd>{issue.id}</dd>
                                <dt>title:</dt>
                                <dd>{issue.title}</dd>
                                <dt>url:</dt>
                                <dd>{issue.url}</dd>
                                <dt>number:</dt>
                                <dd>{issue.number}</dd>
                                <dt>user:</dt>
                                <dd>
                                    <dl>
                                        <dt>login:</dt>
                                        <dd>{issue.user.login}</dd>
                                        <dt>id:</dt>
                                        <dd>{issue.user.id}</dd>
                                        <dt>avatar:</dt>
                                        <dd><img src={issue.user.avatar_url} alt="" /></dd>
                                    </dl>
                                </dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
})
