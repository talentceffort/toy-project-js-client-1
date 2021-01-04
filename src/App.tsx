import React from 'react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useObserver } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp } from 'pages';
import useStore from 'store/useStore';

function App() {
    const { theme } = useStore();

    return useObserver(() => (
        <ThemeProvider theme={theme.theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </Router>
        </ThemeProvider>
    ));
}

export default App;
