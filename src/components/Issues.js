import React, { Component } from "react"
import { connect } from "react-redux"

export default connect(
    (state) => ({
        issues: state.issues.issues
    })
)(class Issues extends Component {
    static fetchData() {
        console.log(this)
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
