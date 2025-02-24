import apiService from "./apiService";
import {useState} from "react";

const InsertPost = () => {
    const [postData,setPostData] = useState("");
    const [postTitle,setpostTitle] = useState("");
    const [postBody,setpostBody] = useState("");



    const handelInsert = () => {
        setPostData(postTitle + postBody);
        let callbackSucess;
        let callbackErr;
        apiService.createPost(postData,callbackSucess, callbackErr)
            if(callbackSucess){
                alert(callbackSucess);
            } else {
                alert(callbackErr);
            }

    }

    return (
        <div className="InsertPost-container">
            <label>새글</label>
            <input type={"text"}
                    value={postTitle}
                   onChange={(e) => setpostTitle(e.target.value)}
            />
            <textarea
                   value={postBody}
                   onChange={(e) => setpostBody(e.target.value)}
            />
            <button onClick={handelInsert}>작성하기</button>
        </div>
    )
}

export default InsertPost;