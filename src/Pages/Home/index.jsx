import React, { useState, useEffect} from 'react';
import CategoryCollapse from '../../Componentes/CategoryCollapse'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './index.css';
import axios from "axios";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography
} from '@mui/material';

export default function Home() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [categories, setCategories] = useState([])
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSave = () => {
      if (!selectedCategory || !name || !price || !description) {
        setError('Todos os campos são obrigatórios');
        return;
      }
  
      // Chamada à API usando axios.post
      axios.post('http://localhost:4451/products', {
        categoryId: selectedCategory,
        name: name,
        price: price,
        description: description,
      })
        .then(response => {
          console.log(response.data);
          setOpen(false);
          setName('')
          setSelectedCategory('')
          setPrice(''),
          setDescription('')
        })
        .catch(error => {
          console.error(error);
        });
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4451/categories')
          const categor = response.data.map(item => {return {id: item.id, name: item.name}})
          console.log('teste', categor)
          setCategories(categor)
          setData(response.data)
        } catch (error) {
          console.error(error);
        }
      };  
      fetchData();
    }, []);
 return (
  <div>
    {data.map( ({name, id, product}) => <div><CategoryCollapse categoryName={name} categoryId={id} products={product}/></div>)}
    <Fab aria-label="add" className='button-add-prouct' onClick={handleOpen}>
        <AddIcon />
    </Fab>
    <Modal open={open} onClose={handleClose}>
        <div className="modal-content" style={{backgroundColor: 'white'}}>
          <Typography variant="h6">Novo Item</Typography>

          <FormControl fullWidth>
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select 
              labelId="category-label"
              value={selectedCategory}
              onChange={event => setSelectedCategory(event.target.value)}
            >
              {categories.map(category => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Nome"
            value={name}
            onChange={event => setName(event.target.value)}
            fullWidth
          />

          <TextField
            label="Preço"
            value={price}
            onChange={event => setPrice(event.target.value)}
            fullWidth
          />

          <TextField
            label="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)}
            fullWidth
            multiline
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button variant="contained" color="primary" onClick={handleSave}>
            Salvar
          </Button>
        </div>
      </Modal>
  </div>
  
  )
}