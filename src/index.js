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

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/subcategory" element={<SubCategories />} />
      <Route path="/group" element={<Groups />} />
      <Route path="/subgroup" element={<SubGroups />} />
      <Route path="/categorymap" element={<CategoryMap />} />
      <Route path="/subcategorymap" element={<SubCategoryMap />} />
      <Route path="/groupmap" element={<GroupMap />} />
      <Route path="/subgroupmap" element={<SubGroupMap />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
