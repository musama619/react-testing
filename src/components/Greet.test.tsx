import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";


describe('Greet', () => {
    test.only('renders correctly', () => {
        render(<Greet />)
        // const textElem = screen.getByText('Greet')
        const textElem = screen.getByText(/greet/i) // regex to ignore case 
        expect(textElem).toBeInTheDocument()
    })

    describe('Nested', () => {
        test.skip('renders correctly with name', () => {
            render(<Greet name='Gon' />)
            const textElem = screen.getByText('Greet Gon')
            expect(textElem).toBeInTheDocument()
        })
    })
})
