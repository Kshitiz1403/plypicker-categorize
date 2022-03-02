import './App.css';
import { Link } from 'react-router-dom';

export const SERVER_URL = "http://localhost:4000/api"

function App() {
  return (
    <div className="App-header">
      <Link to={"/category"}>
        Create category
      </Link>
      <Link to={"/subcategory"}>
        Create subcategory
      </Link>
      <Link to={"/group"}>
        Create group
      </Link>
      <Link to={"/subgroup"}>
        Create subgroup
      </Link>
      <div>-------------------------</div>
      <Link to={"/categorymap"}>
        Get category map
      </Link>
      <Link to={"/subcategorymap"}>
        Get subcategory map
      </Link>
      <Link to={"/groupmap"}>
        Get group map
      </Link>
      <Link to={"/subgroupmap"}>
        Get subgroup map
      </Link>
    
    </div>
  );
}

export default App;
