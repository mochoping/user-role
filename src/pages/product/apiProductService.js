//ProductSearch
//ProductDetail
// 작성된 api 호출
// 분리하여 기능 사용


// 1. getProducts(keyword)
// 2. getSuggestions(keyword)
// 3. getProductById(keyword)

import axios from "axios";

const API_PRODUCTS_URL = "http://localhost:8080/api/products"


const apiProductService = {

    getProducts:
        function (setRes,setErr){
            axios
                .get(API_PRODUCTS_URL)
                .then(
                    (res)=> {
                        setRes(res.data);
                    }
                )
                .catch( (err)=>{
                    console.log(err)
                    setErr(err);
                })
        },

    getSuggestions:
        function (keyword, setRes, setErr) {

            axios
                .get(`${API_PRODUCTS_URL}/search?keyword=${keyword}`)
                .then((res) => {
                    console.log(res)
                    setRes(res.data);
                })
                .catch((err) => {
                    console.log(err)
                    setErr(err);
                })

        },
    

    getProductById:
        function (productId, setRes,setErr) {


            axios
                .get(`${API_PRODUCTS_URL}/${productId}`)
                .then(
                    (res) => {

                        /*
                        상세정보와 같이 하나의 데이터를 가져올 수 있는지 확일할 때 사용
                        if(res.data >0)

                        리스트 목록 검색이 존재하는지 확인할 때 사용
                        if(res.data.length >0)

                         */
                        if(res.data) { // res로 데이터를 한개이상 가져오고 가져온 데이터를 활용해서 프론트 앤드 UI 로 출력할 변수명칭 작성할때 활용
                            console.log(res.data)
                            setRes(res.data);
                        } else {
                            console.log(res);
                            console.log("data가 없음");
                        }
                    }
                )
                .catch(
                    (err) => {
                        console.error("백엔드 연결 실패 : ", err)
                        setErr(err);
                    }
                )
        },

        updateProduct:
            function () {

            },

        deleteProduct:
            function (productId,navigate) {
                axios
                    .delete(`http://localhost:8080/api/products/${productId}`)
                    .then(
                        ()=>{
                            alert("삭제가 완료되었습니다.");
                            navigate("/products");
                        }
                    )
                    .catch(
                        (err) => {
                            alert("상품을 삭제할 수 없습니다.")
                            console.log(err)
                        }
                    )
            },
}
export default apiProductService;