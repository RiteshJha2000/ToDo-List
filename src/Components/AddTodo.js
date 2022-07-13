import { useState } from 'react';

export default function AddTodo(props) {

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const enterText1=(e)=>{
        settitle(e.target.value)
    }
    const enterText2=(e)=>{
        setdesc(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot be left blank")
        }
        else{
        props.addTodo(title,desc);
        settitle("")
        setdesc("")
        }
    }

  return (
    <div className='container'  style={{ marginTop: "58px"}}>
        <h4 className='text-center my-3' style={{fontFamily:"Ubuntu",fontWeight:"bold"}}>Add ToDo</h4>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" value={title} onChange={enterText1} id="InputTitle" aria-describedby="TitleHelp"/>
                <div id="emailHelp" className="form-text">Write the title of your ToDo list here.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Write Description</label>
                <input type="text" value={desc} onChange={enterText2} className="form-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Submit</button>
        </form>
    </div>
  )
}
