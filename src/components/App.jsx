import { Route, Routes } from "react-router-dom";
import "../App.css";
import TableComponent from "../Page/Table/TableComponent";
import List from "../Page/List/List";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TableComponent />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
