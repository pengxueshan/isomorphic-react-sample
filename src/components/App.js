import React from "react"
import { Link } from "react-router"

export default (props) =>
    <div>
        <h1><Link to="/">isomorphic react sample</Link></h1>
        <div><Link to="/issues">go to issues</Link></div>
        <hr />
        {props.children}
    </div>
