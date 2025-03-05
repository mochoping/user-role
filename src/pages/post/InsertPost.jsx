import apiService from "./apiService";
import {useState} from "react";
import FormPostData from "./FormPostData";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const InsertPost = () => {
    const navigate = useNavigate();
    //(#{userId}, #{postTitle}, #{postContent}, #{thumbnail}, #{postCategory}, #{postStatus},
    const inputPostField = [
        {id:"postTitle", label:"게시물 제목",placeholder:"제목을 작성해주세요."},
        {id:"postContent", label:"내용",placeholder:"내용을 작성해주세요."},
        {id:"thumbnail", label:"이미지",placeholder:"이미지를 삽입해주세요."},
        {id:"postCategory", label:"카테고리",placeholder:"카테고리를 작성해주세요."},
        {id:"postStatus", label:"상태",placeholder:"상태를 작성해주세요."},
    ]
    const [formData,setFormData]=useState({
        postTitle:"",
        postContent:"",
        thumbnail:"",
        postCategory:"",
        postStatus:"",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지

        axios
            .post("http://localhost:8080/api/posts", formData)
            .then(
                (res) => {
                    alert("게시물 등록이 완료되었습니다.");
                    // navigate 이용해서 게시물 리스트로 이동
                    navigate("/posts")
                }
            )
            .catch(
                (err) => {
                    alert("데이터를 등록할 수 없습니다.")
                    console.error("err : ", err);
                }
            )
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className="col-6 mx-auto">
            {inputPostField.map(
            (field) => (
                <FormPostData key={field.id}{...field}
                              value={formData.value}
                        onchange={handleChange}
                />
                )
            )}
            <div className={"d-grid mt-3"}>
                <button className="btn btn-success btn-lg">
                    등록하기
                </button>

            </div>
        </div>
             </form>
    )
}

export default InsertPost;