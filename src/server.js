import React from "react"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import { match, RouterContext } from "react-router"

import {
    configureStore,
    routes
} from "./app"

const store = configureStore()

function renderFullPage(markup, initialState = {}) {
    return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>isomorphic react sample</title>
            <style>body{font-family:sans-serif;}a{color:blue;}</style>
            <script type="text/javascript">window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
        </head>
        <body>
            <div id="root">${markup}</div>
            <script src="/bundle.js"></script>
        </body>
    </html>
    `
}

import express from "express"

const app = express()

app.use(express.static(`${__dirname}/../build`))
app.use((req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        const { params, location } = renderProps

        if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        }

        if (renderProps) {
            Promise.all(
                renderProps.components
                .filter(c => c && c.fetchData)
                .map(c => c.fetchData({ store, location, params }))
            )
            .then((/* res */) => {
                const initialState = store.getState()
                const markup = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                )
                res.status(200).send(renderFullPage(markup, initialState))
            })
        }
    })
})

const PORT = 2222

app.listen(PORT, () => {
    console.log(`App serving at http://127.0.0.1:${PORT}`)
})
