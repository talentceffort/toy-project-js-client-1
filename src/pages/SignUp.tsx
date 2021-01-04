import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    Fade,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Typography,
} from '@material-ui/core';
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
    nameBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    firstName: {
        width: '48%',
    },
    lastName: {
        width: '48%',
    },
    submit: {
        height: 56,
        fontSize: 18,
        fontWeight: 'bold',
    },
}));

function SignUp({ history }: RouteChildrenProps) {
    const classes = useStyles();

    const [fade, setFade] = useState(true);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleChangeId = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setId(event.target.value);
    };

    const handleChangePassword = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleChangePasswordConfirm = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setPasswordConfirm(event.target.value);
    };

    const handleChangeFirstName = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setFirstName(event.target.value);
    };

    const handleChangeLastName = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setLastName(event.target.value);
    };

    const handleClickSignUp = () => {
        setFade(false);
        setTimeout(() => history.push('/'), 500);
    };

    return (
        <Container className={classes.root} maxWidth='sm'>
            <Typography className={classes.logo}>TOY PROJECT JS</Typography>
            <Fade in={fade} timeout={fade ? 1000 : 500}>
                <Paper className={classes.paper}>
                    <TextField
                        className={classes.bottomSpace}
                        value={id}
                        onChange={handleChangeId}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        label='ID'
                        fullWidth
                    />
                    <TextField
                        className={classes.bottomSpace}
                        value={password}
                        onChange={handleChangePassword}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        label='Password'
                        type='password'
                        fullWidth
                    />
                    <TextField
                        className={classes.bottomSpace}
                        value={passwordConfirm}
                        onChange={handleChangePasswordConfirm}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        label='Password Confirm'
                        type='password'
                        fullWidth
                    />
                    <Box
                        className={`${classes.nameBox} ${classes.bottomSpace}`}
                    >
                        <TextField
                            className={classes.firstName}
                            value={firstName}
                            onChange={handleChangeFirstName}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant='outlined'
                            label='First Name'
                            fullWidth
                        />
                        <TextField
                            className={classes.lastName}
                            value={lastName}
                            onChange={handleChangeLastName}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant='outlined'
                            label='Last Name'
                            fullWidth
                        />
                    </Box>
                    <Button
                        className={classes.submit}
                        onClick={handleClickSignUp}
                        variant='contained'
                        color='primary'
                    >
                        Sign Up
                    </Button>
                </Paper>
            </Fade>
        </Container>
    );
}

export default SignUp;
