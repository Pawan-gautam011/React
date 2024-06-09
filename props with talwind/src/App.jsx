import './App.css';
import Card from './components/Card';


function App() {

  return (
    <>
    
      <h1>Props</h1>
      <Card username="Google" paragraph="hello world this is a test case paragraph"/>
      <div className='m-2'>
      <Card username="Bill Gates" paragraph="“Tailwind CSS is the only framework that I have seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”"/>
      </div>
    </>
  );
}

export default App;
