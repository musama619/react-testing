import { getByRole, render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe('application', () => {
    test("renders correctly", () => {
        render(<Application />);

        const headingElement = screen.getByRole("heading", {
            level: 1 // 1 => h1, 2 => h2 ...
        });
        expect(headingElement).toBeInTheDocument()

        const sectionHeadingElement = screen.getByRole("heading", {
            level: 2 // specific to heading role
        });
        expect(sectionHeadingElement).toBeInTheDocument()
        
        const nameElement = screen.getByRole("textbox", {
            name: "Name" // label
        });
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input"
        });
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument()
        
        const nameElement4 = screen.getByDisplayValue("King")
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button")
        expect(submitButtonElement).toBeInTheDocument();
    
        const paragraphElement = screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument();

        const imageElement = screen.getByAltText("this is image")
        expect(imageElement).toBeInTheDocument();

        const closeElement = screen.getByTitle("close")
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId("custom-element")
        expect(customElement).toBeInTheDocument();

    })
})


// getByRole options https://testing-library.com/docs/queries/byrole/#options