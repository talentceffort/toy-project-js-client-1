import React from 'react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { SignIn } from 'pages';
import useStore from 'store/useStore';
import { useObserver } from 'mobx-react';

function App() {
    const { theme } = useStore();

    return useObserver(() => (
        <ThemeProvider theme={theme.theme}>
            <CssBaseline />
            <SignIn />
        </ThemeProvider>
    ));
}

export default App;
