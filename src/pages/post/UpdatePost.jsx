import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import apiService from "./apiService";

const UpdatePost = () => {

    const { postId } = useParams(); //url 에서 postId 가져오기
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("일반");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        apiService.getPostById(postId,
            (data) => {
            setPost(data); // 데이터를 재대로 가져왔는지 확인시 필요함.
            setTitle(data.postTitle);
            setContent(data.postContent);
            setCategory(data.postCategory);
            }

            ,setMessage)
    }, [postId]);


    const handleUpdate = () => {
        const updateContent = {
            // userId 는 추후 login 한 세션에서 가져와 넣을 것
            // 현재 postStatus는 설정해 놓은 변수 이름이 없기 때문에 임의로 "XX" 설정
            // controller DTO 명칭 : react 에서 value 값에 들어가 있는 명칭
                                postId:postId,
                                userId:post.userId, //기존작성자 유지
                                postTitle: title,
                                postContent: content,
                                postCategory: category,
                                postStatus: "XX",
                                updateAt : new Date().toISOString(),
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>안뇽하세요</h1>
                </div>
            </div>


            <h2>게시물 수정</h2>
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>


            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="일반">일반</option>
                <option value="공지사항">공지사항</option>
                <option value="질문">질문</option>
                <option value="후기">후기</option>
            </select>

            <button onClick={handleUpdate}>수정</button>
        </div>
    )
}

export default UpdatePost;