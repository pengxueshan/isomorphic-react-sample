import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { match, Router } from "react-router"
import createBrowserHistory from "history/lib/createBrowserHistory"

import {
    configureStore,
    routes
} from "./app"

const store = configureStore(window.__INITIAL_STATE__)
const history = createBrowserHistory()

match({ history, routes }, (err, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps} />
        </Provider>,
        document.getElementById("root")
    )
})
