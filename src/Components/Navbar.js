import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search.js";


// const filterPost=(posts,query)=>{
//   if(!query){
//     return posts;
//   }
//   return posts.filter((query)=>{
//     const postTitle = posts.title.toLowerCase();
//     return postTitle.include(query);
//   });
// };

export default function Navbar(props) {
  // const posts = props.todo;
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('s')
  // const filteredPost = filterPost(posts,query)
  // const [searchQuery, setSearchQuery] = useState(query || '');
  

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          ToDo List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
          </ul>
          <Search todo={props.todo} Search={props.Search} Searchhandle={props.Searchhandle}/>
          {/* <ul>
            {filteredPost.map((element)=>{
              <li key={element.no}>{element.title}</li>
            })}
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

// Navbar.defaultProps = {
//     title : "Enter Your title here"
// }
// Navbar.propTypes = {
//     title : PropTypes.string.isRequired
// }
