import './App.css';

function App() {
  console.log('Hello from component')
  const now = new Date()
  return (
    <div className="App">
      Hello World, it is {now.toString()}
    </div>
  );
}

export default App;
