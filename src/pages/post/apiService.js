// axios. 작성했던 기능을 모아서 설정한 다음 각 jsx로 전달

import axios from "axios";

const API_POST_URL = "http://localhost:8080/api/posts";
// 주소값의 유지관리등의 보수를 쉽게 하기 위해서 따로 작성.
// 한번에 관리 가능


const apiService = {
    // 외부에서 사용할 메서드 명칭 기능설정 (파라미터값){기능작성}
    getAllPosts:
        function (callback, errCallback){// 그냥 변수명임. 두 값이 모두 존재하지 않아도 전달을 진행함.
                axios
                    .get(API_POST_URL)
                    .then(
                        (res) => callback(res.data)
                    )
                    .catch(
                        (err)=> {
                            errCallback(err);
                        }
                    )

        }, // 자바스크립트는 , 뒤에 값이 없어도 문제가 발생하지 않음.
    // 기능간 구분시 ,작성

    getPostById :
        function(postId, setPost,setErr){
            axios
                //
                //.get(API_POST_URL +"/"+ postId)
                .get(`${API_POST_URL}/${postId}`)
                .then(
                    res => setPost(res.data)
                )
                .catch(
                    err => {
                        //setErr(err)
                        alert("데이터를 가져올 수 없습니다" );
                        console.log("백엔드 데이터 에러: ", setErr(err));
                    }
                )
        },

    searchPosts: function (keyword, callback, errorCallback) {
        axios.get(`${API_POST_URL}/search?keyword=${encodeURIComponent(keyword)}`)
            .then(response => callback(response.data))
            .catch(error => errorCallback(error));
    },
    suggestedPosts :
        function (value, callback, errorCallback) {
            axios
                .get(`http://localhost:8080/api/post/searcj?keyword=${value}`)
                .then((res) => {
                    callback(res.data?.map(post => post.postTitle) || [])

                })
                .catch( (err)=>{
                    console.log(err)
                })
        },

    createPost: function (postData, callback, errorCallback) {
        axios.post(API_POST_URL, postData, {
            headers: { "Content-Type": "application/json" }
        })
            .then(response => callback(response.data))
            .catch(error => errorCallback(error));
    },
}
export default apiService;