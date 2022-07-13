import { useState, useEffect, Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
// import Search from "./Components/Search";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [Search, setSearch] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  document.title="ToDo-List"

  const Searchhandle = (Search) => {
    setSearch(Search);
    if (Search !== "") {
      const newTodoList = todos.filter((todo) => {
        return Object.values(todo)
          .join(" ")
          .toLowerCase()
          .includes(Search.toLowerCase());
      });
      setsearchResult(newTodoList);
    } else {
      setsearchResult(todos);
    }
  };

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const OnDelete = (todo) => {
    console.log("This item is deleted", todo);
    // This won't work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("Adding ", title, desc);
    let no;
    if (todos.length === 0) {
      no = 1;
    } else {
      no = todos[todos.length - 1].no + 1;
    }
    const myTodo = {
      no: no,
      title: title,
      desc: desc,
    };
    settodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Navbar todo={todos} Search={Search} Searchhandle={Searchhandle} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos todo={Search.length < 1 ? todos : searchResult} OnDelete={OnDelete} />
              </Fragment>
            }
          />
          <Route exact path="/about" element={<About/> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
