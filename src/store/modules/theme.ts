import { observable } from 'mobx';
import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

interface Theme {
    theme: MuiTheme;
    themeString: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    toggleTheme: () => void;
}

export const theme = observable<Theme>({
    theme: lightTheme,
    themeString: 'light',
    setTheme(theme) {
        switch (theme) {
            case 'light':
                this.theme = lightTheme;
                break;
            case 'dark':
                this.theme = darkTheme;
                break;
        }
    },
    toggleTheme() {
        this.theme = this.themeString === 'light' ? darkTheme : lightTheme;
        this.themeString = this.themeString === 'light' ? 'dark' : 'light';
    },
});
