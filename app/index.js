import ReactDOM from 'react-dom'
// Required to avoid React not found error
import React from 'react'
import {Provider} from 'react-redux'
import store from './stores/configureStore'
import {AppContainer} from 'react-hot-loader'
import './app.sass'

const render = () => {
    const App = require('./components/App')
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>
        , document.getElementById('app')
    )
}

render()
if (module.hot) {
    module.hot.accept(render)
}