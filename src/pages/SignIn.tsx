import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    Fade,
    Grid,
    Link as MuiLink,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Typography,
} from '@material-ui/core';
import useStore from 'store/useStore';
import { RouteChildrenProps } from 'react-router-dom';

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
        margin: '150px 0 50px',
        color: theme.palette.primary.main,
    },
    paper: {
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    bottomSpace: {
        marginBottom: 20,
    },
    button: {
        height: 56,
        fontSize: 18,
        fontWeight: 'bold',
    },
    naviBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    fadeBox: {
        width: '100%',
    },
}));

function SignIn({ history }: RouteChildrenProps) {
    const classes = useStyles();
    const { theme } = useStore();

    const [fade, setFade] = useState(true);

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

    const handleClickSignUpLink = () => {
        setFade(false);
        setTimeout(() => history.push('/signup'), 500);
    };

    return (
        <Container className={classes.root} maxWidth='sm'>
            <Typography className={classes.logo}>TOY PROJECT JS</Typography>
            <Fade in={fade} timeout={fade ? 1000 : 500}>
                <Box className={classes.fadeBox}>
                    <Paper className={classes.paper}>
                        <TextField
                            className={classes.bottomSpace}
                            value={id}
                            onChange={handleChangeId}
                            variant='outlined'
                            label='ID'
                            fullWidth
                        />
                        <TextField
                            className={classes.bottomSpace}
                            value={password}
                            onChange={handleChangePassword}
                            variant='outlined'
                            label='Password'
                            fullWidth
                        />
                        <Button
                            className={`${classes.button} ${classes.bottomSpace}`}
                            onClick={handleClickSignIn}
                            variant='contained'
                            color='primary'
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Button variant='text' color='primary'>
                                    Forgot password?
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={handleClickSignUpLink}
                                    variant='text'
                                    color='primary'
                                >
                                    Don't have an account? Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Box mt={8}>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            align='center'
                        >
                            {`ⓒ JISM Corp. Since ${new Date().getFullYear()}.`}
                        </Typography>
                    </Box>
                </Box>
            </Fade>
        </Container>
    );
}

export default SignIn;
