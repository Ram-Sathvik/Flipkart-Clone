import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../service/api';

import { useState, useContext } from 'react';

import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    height: 30vh;
    width: 40vh;
    display: flex;
    flex-direction: column;
    padding: 25px 25px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: white;
    color: black;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    font-weight: 600;
`

const CreateAccount = styled(Typography)`
    text-align: center;
    font-weight: 600;
    cursor: pointer;
`

const Error = styled(Typography)`
    color: red;
    font-size: 10px;
`

const accountInitialValues = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
}

const loginInitialValues = {
    username: '',
    password: '',
}

const LoginDialog = ({ open, setOpen }) => {

    const navigate = useNavigate();

    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ error, setError ] = useState(false);

    const {setAccount} = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(response?.status === 200) {
            // navigate('/customer');
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else {
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                {
                    account.view === 'login' ?
                        <>
                            <TextField variant="outlined" onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
                            { error && <Error style={{textAlign: 'center'}}>Please enter valid details</Error> }
                            <TextField variant="outlined" onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <CreateAccount onClick={() => toggleSignup()}>Create an account</CreateAccount>
                        </>
                    :
                        <>
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname" />
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname" />
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
                            <TextField variant="outlined" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </>
                }
            </Component>
        </Dialog>
    )
}

export default LoginDialog;