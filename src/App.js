import { Link, Outlet } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
       <h1 className='border border-2 border-success m-2 p-2'>App</h1>
       <ul>
        <li>
          <Link to="/kajal">kazal darling</Link>
          </li>
          <li>
        <Link to='/prabhas'>prabhas darling</Link>
          </li>
          <li>
            <Link to="/countries">countries</Link>
          </li>

       </ul>
       <Outlet></Outlet>
    </div>
  );
}

export default App;
