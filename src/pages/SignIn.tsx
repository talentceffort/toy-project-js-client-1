import React, { useState } from 'react';
import {
    Button,
    Container,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Typography,
} from '@material-ui/core';
import useStore from 'store/useStore';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: 'Azonix',
        fontSize: 32,
        fontWeight: 'bold',
        margin: '100px 0 50px',
    },
    paper: {
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: 20,
    },
    button: {
        height: 56,
        fontSize: 18,
        fontWeight: 'bold',
    },
}));

function SignIn() {
    const classes = useStyles();
    const { theme } = useStore();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    const handleChangePassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleClickSignIn = () => {
        theme.toggleTheme();
    };

    return (
        <Container className={classes.root} maxWidth='sm'>
            <Typography className={classes.logo}>TOY PROJECT JS</Typography>
            <Paper className={classes.paper}>
                <TextField
                    className={classes.input}
                    value={id}
                    onChange={handleChangeId}
                    variant='outlined'
                    label='ID'
                    fullWidth
                />
                <TextField
                    className={classes.input}
                    value={password}
                    onChange={handleChangePassword}
                    variant='outlined'
                    label='Password'
                    fullWidth
                />
                <Button
                    className={classes.button}
                    onClick={handleClickSignIn}
                    variant='contained'
                    color='primary'
                >
                    Sign In
                </Button>
            </Paper>
        </Container>
    );
}

export default SignIn;
