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
    
    })
})


// getByRole options https://testing-library.com/docs/queries/byrole/#options