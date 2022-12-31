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
import AddBlackList from './component/BorrowBook/AddBlackList';
import Okey from './component/BorrowBook/Okey';
import AddedBorrowBook from './component/BorrowBook/AddedBorrowBook';
import ReturnedBorrowBook from './component/BorrowBook/ReturnedBorrowBook';
import OkeyReturned from './component/BorrowBook/OkeyReturned';
import AddedBlackList from './component/BorrowBook/AddedBlackList';
import AddedBook from './component/Book/AddedBook';
import SurveyForm from './component/Survey/SurveyForm';
import ResultSurvey from './component/Survey/ResultSurvey';
import CompiledSurvey from './component/Survey/CompiledSurvey';

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
          <Route exact path="/api/persons/registered" element={<PersonRegistered />}></Route>
          <Route  path="/api/borrowBooks/blackLists/:borrowBookId" element={<BlackList />}></Route>
          <Route  path="/api/black/:borrowBookId" element={<AddBlackList />}></Route>
          <Route  path="/api/black/okey/:borrowBookId" element={<Okey />}></Route>
          <Route  path="/api/black/delete/:borrowBookId" element={<ReturnedBorrowBook />}></Route>
          <Route  path="/api/borrowBooks/added" element={<AddedBorrowBook />}></Route>
          <Route  path="/api/borrowBooks/okeyReturned" element={<OkeyReturned />}></Route>
          <Route  path="/api/black/added" element={<AddedBlackList />}></Route>
          <Route  path="/api/books/added" element={<AddedBook />}></Route>
          <Route  path="/api/survey" element={<SurveyForm />}></Route>
          <Route  path="/api/survey/result" element={<ResultSurvey />}></Route>
          <Route  path="/api/survey/compile" element={<CompiledSurvey />}></Route>
          
         
    
        </Routes>
      </Router>
        
      
    </div>
  );
}

export default App;
