import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../../components/Button'
import userEvent from '@testing-library/user-event'

describe('Test button successfully', () =>{
    it('Render Button', () =>{
        const buttonText = 'Fazer login'
       const { container }= render(<Button>{buttonText}</Button>)

       const button = screen.getByRole('button', { name: buttonText})
       expect(button).toBeInTheDocument();
       expect(container).toMatchSnapshot();
    })

    it('sucess onClick function called', () =>{
        const buttonText = 'Fazer login'
        const onClick = jest.fn();

       const { container }= render(<Button onClick={onClick}>{buttonText}</Button>)

       const button = screen.getByRole('button', { name: buttonText})

       userEvent.click(button);
       
       expect(onClick).toHaveBeenCalledTimes(1);
    
    })
})

// Testes de regressão visual