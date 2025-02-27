// axios. 작성했던 기능을 모아서 설정한 다음 각 jsx로 전달


// 데이터를 백엔드에서 가지고 왔을 때 왜 res.data로 작성하는가?
// res.data 에서 res라는 명칭은 원하는 명칭으로 작성해도 됨.
// 자바스크립트에서 변수이름에 들어가 잇는 데이터를 확인 할 댸 .data
// 라는 명칭을 사용


import axios from "axios";

const API_POST_URL = "http://localhost:8080/api/posts";
// 주소값의 유지관리등의 보수를 쉽게 하기 위해서 따로 작성.
// 한번에 관리 가능


const apiService = {
    // 외부에서 사용할 메서드 명칭 기능설정 (파라미터값){기능작성}
    getAllPosts:
        function (setPost, setErr){// 그냥 변수명임. 두 값이 모두 존재하지 않아도 전달을 진행함.
                axios
                    .get(API_POST_URL)
                    .then(
                        (res) => {

                            if (res.data >0) { // 데이터가 1개 이상 존재하기 때문에 데이터 보여주기
                                setPost(res.data)

                            }else { // 데이터가 없어서 데이터 없음 표시
                                alert("백엔드에서 가져올 수 있는 데이터가 없습니다.")
                            }
                        }
                    )
                    .catch(
                        (err)=> {
                            alert("게시물을 불러오는 중 오류가 발생했습니다.")
                            setErr(err);
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

    deletePost:
    // PostDetail에서 전달받은 매개변수 자리
    // 매개변수는 전달받은 값을 기능내에서 사용할 수 있도록 설정한 이름일 뿐이기 때문에
    // {} 내부에서 작성한 변수의 이름을 활용하면 되는 것.
        // function (PostDetail 에서 apiService를 호출하여 deletePost 기능을 실행했을 때 가져온 postId
   //                PostDetail 에서 apiService를 호출하여 deletePost 기능을 실행했을 때 가져온 callback
   //                PostDetail 에서 apiService를 호출하여 deletePost 기능을 실행했을 때 가져온 errorCallback
        // function (postId, callback, errorCallback) {
        function (postId, callback, errorCallback) {
            axios
                .delete(`${API_POST_URL}/${postId}`)
                .then(
                    (response) => {
                        //  callback(response.data)
                        alert(callback);
                    }
                )
                .catch(
                    // 백엔드에서 삭제가 불가능할 때
                    // 알람으로
                    // 백엔드에서 컨트롤러 연결에 실패하였습니다.

                    error => {
                        alert(errorCallback);
                        //alert("백엔드에서 컨트롤러 연결에 실패하였습니다.");

                        console.error("프론트엔드에서 확인할 에러 메세지 : ", error);
                    }
                )
        },


    updatePost:
        function (postId, postData, callback, errorCallback)
        {
        axios
            .put(`${API_POST_URL}/${postId}`, postData, {
        headers: { "Content-Type": "application/json" }
                     })
    .then(// 백엔드와 연결에 성공했습니다.
        (res)=>{
            if(res.data && res.data.updatedAt){
                alert(callback);
            } else {
                alert("변경된 내용이 없습니다.");
            }
        }
    )
    .catch(
        ()=>{// 백엔드와 연결에 실패했습니다.
            alert(errorCallback)
        }
    );
},

}
export default apiService;