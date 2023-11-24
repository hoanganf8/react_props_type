import User from "./components/User";

const App = () => {
  return (
    <div>
      <h1>React Props Type</h1>
      <User
        name="Hoàng An"
        onGetData={() => {
          console.log("Work");
        }}
      >
        <h1>Hello Hoàng An</h1>
        {/* <h1>Hello Hoàng An</h1> */}
      </User>
    </div>
  );
};

export default App;
