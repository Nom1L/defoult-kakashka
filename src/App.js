import logo from './logo.svg';
import ira from './logo.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<img src={ira} className="App-logo" alt="logo" />
        <p>
          это Ира
        </p> 
        <a
          className="App-link"
          href="https://vk.com/neenyasho"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Irko
        </a>
				<img src="https://sun9-west.userapi.com/sun9-1/s/v1/ig2/qY4pbJJXTzdHrtX5SYTBE4vDhyMo7q9x1yGoVNIYyMV1wHK9c2AUIcf618bkiv9yN-T6b7LAXSOo8FR6an3R3mde.jpg?size=1080x1080&quality=95&type=album" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
