import React from 'react';
import { screen, render, fireEvent } from 'test-utils';
import Card from './Card';
import sampleProduct from 'sampleProduct';

describe('Card', () => {
  const priceText = parseFloat(
    sampleProduct['purchase_price'],
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  const sizeText = `${sampleProduct['purchase_size']['count']} ${sampleProduct['purchase_size']['unit']}`;

  test('renders less details from props with false minimalFormat prop', () => {
    render(<Card {...sampleProduct} searchFilter={''} minimalFormat={false} />);

    expect(screen.getByText(sampleProduct['name'])).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(priceText)).toBeInTheDocument();
  });

  test('renders more different from props details with true minimalFormat prop', () => {
    render(<Card {...sampleProduct} searchFilter={''} minimalFormat={true} />);

    expect(screen.getByText(sampleProduct['name'])).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(sizeText)).toBeInTheDocument();
  });

  test('clicking renders the Product Details figure', () => {
    render(<Card {...sampleProduct} searchFilter={''} minimalFormat={false} />);

    const clickableNode = screen.getByRole('presentation');

    fireEvent.click(clickableNode);

    expect(screen.getByText(sampleProduct['brand'])).toBeInTheDocument();
    expect(screen.getByText('ADD TO CART')).toBeInTheDocument();
    expect(screen.getByText(`(${sizeText})`)).toBeInTheDocument();
  });
});
