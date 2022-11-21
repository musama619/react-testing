import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";
test('Greet renders correctly', () => {
    render(<Greet />)
    // const textElem = screen.getByText('Greet')
    const textElem = screen.getByText(/greet/i) // regex to ignore case 
    expect(textElem).toBeInTheDocument()
})