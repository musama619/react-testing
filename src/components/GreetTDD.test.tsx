// Greet render the text Greet and if a name is passed into the component then it should render Greet followed by name

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";


test('Greet renders correctly with name', () => {
    render(<Greet name='Gon' />)
    const textElem = screen.getByText('Greet Gon') 
    expect(textElem).toBeInTheDocument()
})