import React from "react";
// import { useNavigate } from "react-router-dom";


export default function Search(props) {

  //  const SearchBar = ({search,setSearch})=>{

  //   const navigate = useNavigate();
  //   const submit=(e)=>{
  //       navigate(`?s=${search}`);
  //       e.preventDefault();
  //   };
  
  

  // const submit=()=>{
    // e.preventDefault();
    // {props.todo.filter((val)=>{
    //     if(Search===""){
    //         alert("No Data entered");
    //         return val;
    //     }
    //     else if(val.title.toLowerCase().include(Search.toLowerCase())){
    //         console.log("Found");
    //         return val;
    //     }
    //     else{
    //         alert("No Such Data Found")
    //         return val;
    //     }
    //   }).map((val,key)=>{
    //     return alert(<div>{val.title}</div>)
    //   })}

  //   if(props.todo.length===0){
  //     alert("No Data To Show")
  //   }
  //   else if(Search===""){
  //     alert("No Data Entered")
  //   }
  //   else{
  //     props.todo.map((val)=>{
  //       return(
  //         <>
  //         {val.title.toLowerCase()===Search.toLowerCase()?"Data Found":"No Data Found"}
  //         </>
  //       )
  //     })
  //   }
  // }

  return (
    <form action="/" method="get" autoComplete="off" className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="text"
        value={props.Search}
        onChange={(e) => {
          props.Searchhandle(e.target.value);
        }}
        placeholder="Search"
        aria-label="Search"
        name="s"
      />
      {/* <button className="btn btn-outline-success" type="submit">
        Search
      </button> */}
    </form>
  );

}      


  
