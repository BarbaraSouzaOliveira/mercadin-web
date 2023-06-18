import * as React from 'react';
import CategoryCollapse from '../../Componentes/CategoryCollapse'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './index.css';
export default function Home() {
  /*
    Fazer a chamada ao metodo getCategorys
    retorna -> nome; id 
  */ 
 const arrayCategorias = [
  {name: 'Padaria', id: 1},
  {name: 'Açougue', id: 2},
  {name: 'Pereciveis', id: 3}
 ]
 return (
  <div>
    {arrayCategorias.map( ({name,id}) => <div><CategoryCollapse categoryName={name} categoryId={id}/></div>)}
    <Fab aria-label="add" className='button-add-prouct' >
        <AddIcon />
    </Fab>
  </div>
  
  )
}