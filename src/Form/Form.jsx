import React, { useState } from "react";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  }

  return (
    <div className="main">
      {submittedForm ? (
        <div>
          Your form entry was
          <p>email : {submittedForm.get("email")}</p>
          <p>name : {submittedForm.get("name")}</p>
          <p>tel : {submittedForm.get("tel")}</p>
          <p>Favorite development language : {submittedForm.get("language")}</p>
          <p>Favorite sport : {submittedForm.get("sport")}</p>
          <p>weather : {submittedForm.get("weather")}</p>
          <p>info : {submittedForm.get("info")}</p>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <p>
            <label>
              Your preferred email (required):
              <input
                type="email"
                name="email"
                placeholder="xxxx@example.com"
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your name (required):
              <input type="text" name="name" required placeholder="name" />
            </label>
          </p>
          <p>
            <label>
              Your tel number (required):
              <input type="tel" placeholder="123-45-678" name="tel" required />
            </label>
          </p>
          <p>
            <label>
              Favorite development language :
              <select name="language">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JAVASCRIPT</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Favorite sport :
              <select name="sport">
                <option value="basketball">BASKETBALL</option>
                <option value="swimming">SWIMMING</option>
                <option value="running">RUNNING</option>
                <option value="dancing">DANCING</option>
              </select>
            </label>
          </p>
          <p>What weather do you like</p>
          <p>
            <label>
              loudy :
              <input type="radio" name="weather" value="loudy" />
            </label>
          </p>
          <p>
            <label>
              rainy :
              <input type="radio" name="weather" value="rainy" />
            </label>
          </p>
          <p>
            <label>
              windy :
              <input type="radio" name="weather" value="windy" />
            </label>
          </p>
          <p>
            <label>
              snowy :
              <input type="radio" name="weather" value="snowy" />
            </label>
          </p>
          <p>
            <label>
              More Info (required, 800 chars max):
              <textarea name="info" maxLength="1000" required />
            </label>
          </p>
          <input type="submit" value="Send it" />
        </form>
      )}
    </div>
  );
};

export default Form;
