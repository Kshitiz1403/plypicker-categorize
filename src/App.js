import './App.css';
import { Link } from 'react-router-dom';

export const SERVER_URL = "http://localhost:4000/api"

function App() {
  return (
    <div className="App-header">
      <Link to={"/create/category"}>
        Create category
      </Link>
      <Link to={"/create/subcategory"}>
        Create subcategory
      </Link>
      <Link to={"/create/group"}>
        Create group
      </Link>
      <Link to={"/create/subgroup"}>
        Create subgroup
      </Link>
      <div>-------------------------</div>
      <Link to={"/map/category"}>
        Get category map
      </Link>
      <Link to={"/map/subcategory"}>
        Get subcategory map
      </Link>
      <Link to={"/map/group"}>
        Get group map
      </Link>
      <Link to={"/map/subgroup"}>
        Get subgroup map
      </Link>
      <div>----------</div>

      <Link to={'/delete/category'}>
        Delete Category
      </Link>
      <Link to={'/delete/subcategory'}>
        Delete subcategory
      </Link>
      <Link to={'/delete/group'}>
        Delete Group
      </Link>
      <Link to={'/delete/subgroup'}>
        Delete SubGroup
      </Link>
      {/* <div>-----</div>
      <Link to={'/upload'}>Upload</Link> */}

    </div>
  );
}

export default App;
