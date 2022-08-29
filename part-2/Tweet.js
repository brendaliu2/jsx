function Tweet({ username, name, date, message }) {


  return (
    <div className="tweet">
      <h3 >{username}:</h3>
      <p>{message} by {name} on {date}</p>

    </div>
  );
}