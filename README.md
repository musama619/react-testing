## What to test?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

## What not to test?
- Implementation details
- Third party code
- Code that is not important from user point of view
  
## Test Driven Development (TDD)

Test driven development is a software development process where you write tests before writing the software code.

Once the tests have been written, you then write the code to ensure the tests pass

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run tests successfully when re-exceuted
3. Refactore the code for optimization while ensuring the tests continue to pass

Also called red-green testing as all tests go from a red failed state to green passed state.

## Filename Conventions

- `.test.js` or `.test.jsx` suffix
- `.spec.js` or `.spec.tsx` suffix
- `.js` or `.tsx` suffix in `__tests__` folder

## Code Coverage

A metric that can help in understanding how much of software code is tested.

- **Statement coverage:** how many of statements in the software code have beend exceuted
- **Branches coverage:** how many of the branches of the control structures (if statements, ternary operator for instance) have been excuted
- **Function coverage:** how many of the functions defined have been called
- **Line coverage:** how many lines of source code have been tested

## Assertion

[Jest common matchers](https://github.com/testing-library/jest-dom#custom-matchers)

[Jest dom custom matchers](https://github.com/testing-library/jest-dom#custom-matchers)

## RTL Queries

Test written generally includes following steps
- Render the component
- Find an element rendered by the component
- Assert against the element found in above step, which will pass or fail

To render the component, we use render method from RTL
To find elements on the method we use queries, which are methods provided by RTL
For assertion, we use expect passing in a value and combine it with matcher function from jest or jest-dom 

To find a single element on the page,
- getBy..
- queryBy..
- findBy..

To find multiple elements
- getAllBy..
- queryAllBy..
- findAllBy..

The suffix can be Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title, and finally TestId

https://testing-library.com/docs/queries/about
  