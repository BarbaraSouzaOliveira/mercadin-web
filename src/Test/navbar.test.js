import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Componentes/Navbar';

describe('Navbar', () => {
  test('renders supermarket name and profile avatar', () => {
    //Renderiza componete
    render(<Navbar />);

    //Pega a label 'Mercad-in e verifica se esta renderizado'
    const supermarketNameElement = screen.getByText('Mercad-In');
    expect(supermarketNameElement).toBeInTheDocument();

    //Pega o componente avatar e verifica se esta renderizado
    const avatarElement = screen.getByTestId('PersonIcon');
    expect(avatarElement).toBeInTheDocument();
  });
});