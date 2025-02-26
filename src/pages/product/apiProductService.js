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
        function (productId, setRes, setErr) {


            axios
                .get(`${API_PRODUCTS_URL}/${productId}`)
                .then(
                    (res) => {
                        setRes(res.data);
                    }
                )
                .catch(
                    (err) => {
                        console.error("백엔드 연결 실패 : ", err)
                        setErr(err);
                    }
                )
        },

}
export default apiProductService;