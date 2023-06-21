import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
    background: 'green',
    color: 'white',
  },
}));

const Cadastro = () => {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [openSucess, setOpenSucess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCnpjChange = (e) => {
    setCnpj(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const validateFields = () => {
    const newErrors = {};

    if (!nome.trim()) {
      newErrors.nome = 'O nome é obrigatório';
    }

    if (!email.trim()) {
      newErrors.email = 'O email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Insira um email válido';
    }

    if (!cnpj.trim()) {
      newErrors.cnpj = 'O CNPJ é obrigatório';
    } else if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj)) {
      newErrors.cnpj = 'Insira um CNPJ válido';
    }

    if (!senha.trim()) {
      newErrors.senha = 'A senha é obrigatória';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateFields()) {
      axios
        .post('http://localhost:4451/supermarket', { name: nome, email: email, cnpj: cnpj, password: senha })
        .then((response) => {
            handleClickSucess()      
            window.location.href = '/';
        })
        .catch(() => {
            handleClickError()
        });
    }
  };

  const handleClickSucess = () => {
    setOpenSucess(true);
  };

  const handleCloseSucess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSucess(false);
  };

  const handleClickError= () => {
    setOpenError(true);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <h1>Cadastro</h1>
        <TextField
          className={classes.textField}
          label="Nome"
          value={nome}
          onChange={handleNomeChange}
          error={!!errors.nome}
          helperText={errors.nome}
        />
        <TextField
          className={classes.textField}
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          className={classes.textField}
          label="CNPJ"
          value={cnpj}
          onChange={handleCnpjChange}
          error={!!errors.cnpj}
          helperText={errors.cnpj}
        />
        <TextField
          className={classes.textField}
          type="password"
          label="Senha"
          value={senha}
          onChange={handleSenhaChange}
          error={!!errors.senha}
          helperText={errors.senha}
        />
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleSave}
        >
          Salvar
        </Button>
        <Snackbar open={openSucess} autoHideDuration={3000} onClose={handleCloseSucess}>
            <Alert onClose={handleCloseSucess} severity="success" sx={{ width: '100%' }}>
                Criado com sucesso
            </Alert>
        </Snackbar>
        <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                Ops! Algo deu errado tente novamente
            </Alert>
        </Snackbar>
      </form>
    </div>
  );
};

export default Cadastro;
