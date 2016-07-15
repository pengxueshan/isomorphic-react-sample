import React from "react"
import { Link } from "react-router"

export default (props) =>
    <div>
        <h1>isomorphic react sample</h1>
        <div><Link to="/issues">go to issues</Link></div>
        <hr />
        {props.children}
    </div>
