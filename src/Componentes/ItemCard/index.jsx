import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import notFound from '../../assets/img/not-foud.jpg';

export default function ItemCard({name, price, description, img}) {
  const imagem = img? img : notFound
  return (
    <Card sx={{ width: 300, height: 400 }} className='Card-Content' style={{backgroundColor: '#D8D8D8', margin: '.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <CardMedia
        sx={{ height: 200 }}
        image={imagem}
      />
      <CardContent  style={{ padding: 0}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: '#D8D8D8', marginLeft: '.5rem', padding: 0}}>
        <p style={{color: '#546918', fontWeight: 900, marginRight: '1rem', fontSize: 'larger'}}>R${price}</p>
        <Button size="small" >Editar Produto</Button>
      </CardActions>
    </Card>
  );
}