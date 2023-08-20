import './App.css';
import Form from './components/Form';

var userIsRegistered = false;
const currentTime = new Date().getHours();


function App() {
  return (
    <div className="container">
      {currentTime > 21 && <h1>Why are you still working?</h1>}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
