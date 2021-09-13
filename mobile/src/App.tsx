import {Home} from './pages/home'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
    </BrowserRouter>
  );
}

export default App;
