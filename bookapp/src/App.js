import "./App.css";
import Createbook from "./components/createbook";
function App() {
  const handle_form = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Createbook prop={handle_form} />
    </div>
  );
}

export default App;
