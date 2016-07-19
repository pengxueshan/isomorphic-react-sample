import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { match, Router, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import {
    configureStore,
    routes
} from "./app"

const store = configureStore(window.__INITIAL_STATE__)
const history = syncHistoryWithStore(browserHistory, store)

match({ history, routes }, (err, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps} />
        </Provider>,
        document.getElementById("root")
    )
})
