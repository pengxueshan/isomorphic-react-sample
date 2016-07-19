import React, { Component } from "react"
import { connect } from "react-redux"
import { getIssue } from "../app"

export default connect(
    state => ({
        issue: state.issue.issue
    })
)(class Issue extends Component {
    static fetchData({ store, location, params }) {
        return store.dispatch(getIssue(params.number))
    }

    componentDidMount() {
        if (!this.props.issue) {
            this.props.dispatch(getIssue(this.props.params.number))
        }
    }

    render() {
        const { issue } = this.props

        return issue ? (
            <div>
                <h1>{issue.title}</h1>
                <dl>
                    <dt>id:</dt>
                    <dd>{issue.id}</dd>
                    <dt>number:</dt>
                    <dd>{issue.number}</dd>
                    <dt>url:</dt>
                    <dd>{issue.url}</dd>
                    <dt>repository url:</dt>
                    <dd>{issue.repository_url}</dd>
                </dl>
            </div>
        ) : null
    }
})
