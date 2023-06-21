import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: theme.spacing(1),
    width: '300px',
  },
  button: {
    margin: theme.spacing(1),
    width: '200px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('logado', false);
  }, []);


  const handleLogin = () => {
    window.location.href = '/home';
  };

  const handleCreateAccount = () => {
    window.location.href = '/criar';
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <h1>Mercad-In</h1>
        <TextField
          className={classes.textField}
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          className={classes.textField}
          type="password"
          label="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="grey"
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="#445D0B"
          onClick={handleCreateAccount}
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default Login;
