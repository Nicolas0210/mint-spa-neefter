import './App.css';
import { postNft } from './components/calls/Post';
import Home from './components/Home/Home'

function App() {
  postNft()

  return (
    <div>
      <h1>nueva app neefter</h1>
      <Home/>
    </div>
  );
}

export default App;
