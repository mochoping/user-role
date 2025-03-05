import axios from 'axios';

// API_URL 이름 사용 금지
const API_URL = "http://localhost:8080/api/clothes";

//자바스크립트 기능을 작성하겠다 이기 때문

/*
const 기능명칭 = {
1번기능 :
        function() {
        },

}
export default 기능 명칭;
기능 명칭.1번 기능();
과 같이 사용 가능.
 */
const apiClothesService = {


    getAllClothes:
        function(setSuc,setFail){
            axios
                .get(API_URL)
                .then(
                    (res) => {
                        console.log(res.data)
                        setSuc(res.data)
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        setFail(err)
                    }
                )
    },

    getClothesById:
        function(clotheId,setSuc,setErr){
            axios
                .get(`http://localhost:8080/api/clothes/${clotheId}`)
                .then(
                    (res)=> {
                        setSuc(res.data);
                        console.log(res);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        alert("데이터를 로딩하는데 실패했습니다.")
                    }
                )
        },


    insertClothes:
        function (postdata){
            axios
                .post(API_URL, postdata)
                .then(
                    (res) => {
                        console.log(res.data)
                        alert("성공적으로 업로드 되었습니다.")

                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        alert("데이터 전송에 실패했습니다. 잠시후 다시 시도해주세요.")
                    }
                )
        },

    updateClothes:
        function (clothesId,postdata){
            axios
                .put(`${API_URL}/${clothesId}`,postdata)
                .then(
                    (res) => {
                        console.log(res.data)

                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        alert("데이터를 전송하지 못했습니다. 잠시후 다시 시도해주세요.")
                    }
                )
        },

    deleteClothes:
        function (clotheId){
            axios
                .delete(`${API_URL}/${clotheId}`)
                .then(
                    (res) => {
                        alert("삭제완료")
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        alert("요청을 보내지 못했습니다. 잠시후 다시 시도해주세요")
                    }
                )
        },



}


export default apiClothesService;