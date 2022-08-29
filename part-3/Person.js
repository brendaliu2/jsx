"use strict";

function Person({ age, hobbies, name }) {
  const eligibility = age > 18 ? "please go vote!" : "you must be 18";
  const nameDisplay = name.length > 8 ? name.slice(0, 8) : name;

  return (
    <div>
      <h1>This is {nameDisplay}.</h1>
      <h3>{eligibility}</h3>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
      <p>Learn some information about this person</p>
    </div>
  );
}
