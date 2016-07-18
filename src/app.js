/*
 * routes
 */
import React from "react"
import { Route } from "react-router"
import App from "./components/App"
import Root from "./components/Root"
import Issues from "./components/Issues"
import Issue from "./components/Issue"

export const routes = (
    <Route component={App}>
        <Route path="/" component={Root} />
        <Route path="/issues" component={Issues} />
        <Route path="/issues/:id" component={Issue} />
    </Route>
)



/*
 * actions
 */
import axios from "axios"

const BASE_URL = "https://api.github.com"

export function queryIssues() {
    return dispatch => {
        return axios.get(`${BASE_URL}/repos/vmg/redcarpet/issues?state=closed`)
        .then(res => dispatch({
            type: "QUERY_ISSUES_SUCCESS",
            payload: { issues: res.data }
        }))
    }
}

export function getIssue(number) {
    return dispatch =>
        axios.get(`${BASE_URL}/repos/vmg/redcarpet/issues/${number}`)
        .then(res => dispatch({
            type: "GET_ISSUE_SUCCESS",
            payload: { ISSUE: res.data.data }
        }))
}



/*
 * reducers
 */
import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"

function issues(state = { issues: [] }, { type, payload }) {
    return type === "QUERY_ISSUES_SUCCESS" ? { issues: [...payload.issues] } : state
}

function issue(state = { issue: {} }, { type, payload }) {
    return type === "GET_ISSUE_SUCCESS" ? { issue: {...payload.issue} } : state
}

const rootReducer = combineReducers({
    routing,
    issues,
    issue
})



/*
 * store
 */
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

export function configureStore(initialState = {}) {
    return createStore(rootReducer,
        initialState, applyMiddleware(thunkMiddleware))
}
