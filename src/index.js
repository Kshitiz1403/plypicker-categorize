import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './Create/Categories';
import SubCategories from './Create/SubCategories';
import Groups from './Create/Groups';
import SubGroups from './Create/SubGroups';
import CategoryMap from './Map/CategoryMap';
import SubCategoryMap from './Map/SubCategoryMap';
import GroupMap from './Map/GroupMap';
import SubGroupMap from './Map/SubGroupMap';
import SubCategoryDelete from './Delete/SubCategoryDelete'
import Upload from './Upload';
import GroupDelete from './Delete/GroupDelete';
import SubGroupDelete from './Delete/SubGroupDelete';
import CategoryDelete from './Delete/CategoryDelete';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/create'>
        <Route path="category" element={<Categories />} />
        <Route path="subcategory" element={<SubCategories />} />
        <Route path="group" element={<Groups />} />
        <Route path="subgroup" element={<SubGroups />} />
      </Route>

      <Route path='/map'>
        <Route path="category" element={<CategoryMap />} />
        <Route path="subcategory" element={<SubCategoryMap />} />
        <Route path="group" element={<GroupMap />} />
        <Route path="subgroup" element={<SubGroupMap />} />
      </Route>

      <Route path='/delete'>
        <Route path='category' element={<CategoryDelete />} />
        <Route path='subcategory' element={<SubCategoryDelete />} />
        <Route path='group' element={<GroupDelete />} />
        <Route path='subgroup' element={<SubGroupDelete />} />
      </Route>
      {/* <Route path="/upload" element={<Upload />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
