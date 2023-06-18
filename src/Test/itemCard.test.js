import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemCard from '../Componentes/ItemCard';

describe('ItemCard', () => {
  test('renders product name and price', () => {
    const productName = 'Pão Francês';
    const price = 20.5;
    //REnderiza componente
    render(<ItemCard prductName={productName} price={price} />);

    //Verifica se o nome esta renderizado
    const productNameElement = screen.getByText(productName);
    expect(productNameElement).toBeInTheDocument();

    //Verifica se o preco esta renderizado
    const priceElement = screen.getByText(`R$${parseFloat(price.toFixed(2))}`);
    expect(priceElement).toBeInTheDocument();
  });

  test('renders delete and edit icons', () => {
    render(<ItemCard prductName="Example Product" price={10} />);

    //Verifica se icones de Delete e Edit foram renderizados
    const deleteIcon = screen.getByLabelText('Delete');
    expect(deleteIcon).toBeInTheDocument();

    const editIcon = screen.getByLabelText('Edit');
    expect(editIcon).toBeInTheDocument();
  });

  test('renders product image', () => {
    const imageSrc = 'http://localhost/pao.jpg';
    render(<ItemCard prductName="Example Product" price={10} imageSrc={imageSrc} />);

    //Procura a imagem no documento
    const imageElement = screen.getByAltText('card-img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain(imageSrc);
  });
});
