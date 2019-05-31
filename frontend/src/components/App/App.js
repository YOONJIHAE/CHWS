/* Core 라이브러리 */
import React from "react";

/* 컴포넌트 Import */
import Search from "components/Search/Search";
import Menu from "components/Menu/Menu";
import CategoryList from "components/CategoryList/CategoryList";
import TotalList from "components/TotalList/TotalList";

/* CSS */
import "./App.css";

function App() {
  return (
    <div>
      <Search />
      <Menu />
      <div id="list_wrapper">
        <CategoryList />
        <TotalList />
      </div>
    </div>
  );
}

export default App;
