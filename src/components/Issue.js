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
        this.props.dispatch(getIssue(this.props.params.number))
    }

    render() {
        const { issue } = this.props

        return (
            <div>
                <h1>{issue.title}</h1>
                <dl>
                    <dt>id:</dt>
                    <dd>{issue.id}</dd>
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
                            <dd><img src={issue.user.avatar_url} alt="" style={{ width: 80, height: 80, borderRadius: "100%" }} /></dd>
                        </dl>
                    </dd>
                </dl>
            </div>
        )
    }
})
