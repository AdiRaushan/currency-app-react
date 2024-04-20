import Form from "./Form";

const App = () => {
  const firstName = Form("");
  const lastName = Form("");
  return (
    <form>
      <label>
        First Name:
        <input type="text" {...firstName} />
      </label>
      <br />
      <label className="py-4">
        Last Name:
        <input type="text" {...lastName} />
      </label>
      <br />
      <p>
        Full Name: {firstName.value} {lastName.value}
      </p>
    </form>
  );
};

export default App;
