import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryCollapse from '../Componentes/CategoryCollapse';

describe('CategoryCollapse', () => {
  test('renders category name', () => {
    const categoryName = 'Example Category';
    //renderiza componete
    render(<CategoryCollapse categoryName={categoryName} />);
    //Verifica se nome da Categoria esta renderizado
    const categoryTitle = screen.getByText(categoryName);
    expect(categoryTitle).toBeInTheDocument();
  });

  test('toggles collapse state when clicked', () => {
    const categoryName = 'Example Category';
    //Renderiza componente
    render(<CategoryCollapse categoryName={categoryName} />);

    //Clica no botao de expandir colapse
    fireEvent.click(screen.getByTestId('expand-more-icon'))

    //Verifica se o item esta aparecendo na tela
    const expandedContent = screen.getByText('Pão Frances');
    expect(expandedContent).toBeInTheDocument();

    //Clica o botao de fechar colapse
    fireEvent.click(screen.getByTestId('expand-less-icon'))
  });
});