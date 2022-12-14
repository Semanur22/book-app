import './App.css';
import Home from "./component/Home/Home";
import ViewPersons from "./component/Person/ViewPersons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPerson from './component/Person/AddPerson';
import AddBook from './component/Book/AddBook';
import ChooseBook from './component/Book/ChooseBook';
import ReturnBook from './component/BorrowBook/ReturnBook';
import BlackList from './component/BorrowBook/BlackList';
import AddBorrowBook from './component/BorrowBook/AddBorrowBook';
import PersonRegistered from "./component/Person/PersonRegistered";

function App() {
  return (
    <div className="App">
    
      <Router>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/api/persons" element={<ViewPersons />}></Route>
          <Route exact path="/api/persons/addPerson" element={<AddPerson />}></Route>
          <Route exact path="/api/books" element={<AddBook />}></Route>
          <Route exact path="/api/books/choose/:personId" element={<ChooseBook />}></Route>
          <Route exact path="/api/borrowBooks" element={<ReturnBook />}></Route>
          <Route exact path="/api/borrowBooks/blackList" element={<BlackList />}></Route>
          <Route  path="/api/books/onay/:personId/book/:bookId" element={<AddBorrowBook />}></Route>
          <Route exact path="/api/persons/registered/:personId" element={<PersonRegistered />}></Route>
          <Route  path="/api/borrowBooks/blackLists/:borrowBookId" element={<BlackList />}></Route>
  
        </Routes>
      </Router>
        
      
    </div>
  );
}

export default App;
