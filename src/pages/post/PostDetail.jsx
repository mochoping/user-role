import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import apiService from "./apiService";

const PostDetail = () => {


    const navigate = useNavigate();
    const {postId} = useParams();
    const[post,setPost] = useState(null);
    const[err,setErr] = useState(null);

    useEffect(() => {
        apiService.getPostById(postId,setPost,setErr)
    }, [postId]);


    if(!post) {
        return <p>게시물 불러오는 중입니다.</p>
    }

    const handleDelete = () => {
        alert("알림메시지")
        prompt("프롬프트", "이것은 기본값") // 기본값 생략가능
        window.confirm("확인 혹은 취소");

        if(window.confirm("정말 삭제하시겠습니까?")){
            // deletePost 메서드 호출 후에 기능 실행
            apiService.deletePost(postId);
            navigate("/"); // 메인으로 이동하기
        }

    }
    
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0"
                             src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">{post?.postTitle}</div>
                        <h1 className="display-5 fw-bolder">Shop item template</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$45.00</span>
                            <span>$40.00</span>
                        </div>
                        <p className="lead">
                            {post?.postContent}
                        </p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                                   style="max-width: 3rem"/>
                            <Link to={`/posts/edit/${postId}`}>
                                <button class="btn btn-outline-warning">수정</button>
                            </Link>
                            {/* ✅ 삭제 버튼 */}
                            <button onClick={handleDelete} class="btn btn-outline-danger">삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const PostDetail2 = () => {
    /*
    기본 자바스크립트에서는 페이지를 이동할 때
    window.location.href("이동할경로") 로 페이지 이동
    리액트 자바스크립프에서는 페이지 이동할 때
    useNavigate() hook 을 사용해서 페이지 이동
    Link의 경우 a 태그 대신에 활용

    useNavigate = html 형식이 아니라 자바 스크립트 내에서 특정 행동을 진행한 후
    페이지를 이동하거나
    페이지 이동 후 특정 기능을 수행해야 할 때 사용

    navigate(-1) : 뒤로가기
    navigate(+1) : 앞 페이지로 이동하기

     */
    const navigate = useNavigate();
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        apiService.getPostById(postId, setPost, setErr)
    }, [postId]);


    if (!post) {
        return <p>게시물 불러오는 중입니다.</p>
    }
    /*
    alert(message)
    간단한 알림 메세지 표시
    확인 버튼 누르기만 가능 입력 반환 불가
    prompt(message, defaultValue)
    사용자로부터 입력 받을 때 사용
    확인 취소 버튼 존재,
    문자열 입력 가능. 입력한 문자 반환 가능 취소시 null 반환
    defaultValue = 입력하는 기본 값을 제공할 수 있음. 보통은 사용하지 않음.
    confirm(message)
    사용자의 확인 또는 취소여부를 물어볼 때 사용
    확인 취소 버튼 존재 문자열 입력 불가 확인버튼 -> true
                                         취소버튼 -> false 반환
                                          window 함수 내부 기본 메서드이기에
                                          window.confirm 형식으로 사용가능.
                                          window 생략이 가능하지만 리액트는 붙여주어야함.
     */
    const handleDelete = () => {
        alert("알림메시지")
        prompt("프롬프트", "이것은 기본값") // 기본값 생략가능
        window.confirm("확인 혹은 취소");

        if (window.confirm("정말 삭제하시겠습니까?")){
            // deletePost 메서드 호출 후에 기능 실행
            apiService.deletePost(postId);
            navigate("/"); // 메인으로 이동하기
        }

    }


    return (
        <div className="PostDetail-container">
            <h2>{post.postTitle}</h2>
            <p>{post.postContent}</p>
            {/* ✅ 수정 버튼 */}
            {/* Route 에 작성한 path 와 to 경로를 맞춰서 작성 */}
            <Link to={`/posts/edit/${postId}`}>
                <button>수정</button>
            </Link>
            {/* ✅ 삭제 버튼 */}
                <button onClick={handleDelete}>삭제</button>
        </div>
    )
}

export default PostDetail;