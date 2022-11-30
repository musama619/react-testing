export const Application = () => {
    return (
      <>
        <h1>Job application form</h1>
        <h2>Section 1</h2>
        <p>All fields are mandatory</p>
        <span title="close">X</span>
        <div data-testid="custom-element">Its Custom HTML element</div>
        <img src="" alt="this is image" />
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Fullname"
              value="King"
              onChange={() => {}}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" />
          </div>
          <div>
            <label htmlFor="job-location">Job location</label>
            <select id="job-location">
              <option value="">Select a country</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" id="terms" /> I agree to the terms and
              conditions
            </label>
          </div>
          <button disabled>Submit</button>
        </form>
      </>
    )
  }