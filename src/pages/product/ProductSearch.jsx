import {useState} from "react";
import axios from "axios";
import './ProductSearch.css'
import apiProductService from "./apiProductService";

const ProductSearch = () => {
// 검색 변수 이름
    const [keyword, setKeyword] = useState("");
    //검색 결과 조회 목록 변수 이름
    const [products, setProducts] = useState([]);

    //검색 자동 완성
    const [sugs,setSugs] = useState([]); //추천검색어 제안 리스트
    const [adv, setAdv] = useState(false);  // 빈값일 경우 제안하지 않음. 빈값이 아닐경우 제안 ok
    const [err, setErr] = useState(null);



    const searchProducts = () => {
        // input 비어있는지 확인 후 비어있다면
        // "검색어를 입력하세요." 보여준 후 리턴
        if(!keyword.trim()){
            alert("검색어를 입력하세요.")
            return
        }
        apiProductService.getSuggestions(keyword,setSugs,setErr)

    }




    //검색추천 기능
    const handleChange = (e) =>{
        const value = e.target.value.trim(); // input 창에서 이벤트가 발생했을 때, 발생한 값의 공백을 제거하고  value 에 저장.
        //if(!value.trim()){
        // alert("추천할 검색어가 없습니다.")
        // }
        // 검색 추천은 추천이기 때문에 alert을 사용하지 않음. 유저 경험에 악영향


        setKeyword(value); // value 값을 setKeyword 에 저장.

        if(value){ // value 값이 존재한다면 추천 검색어 제공
                axios
                    .get(`http://localhost:8080/api/products/search?keyword=${value}`)
                    .then(
                        (res)=>{
                            // res.data 는 배열 형식으로 데이터를 가져올 수 없기 때문에 사용 불가
                            const 제안리스트 = res.data?.map(p => p.productName) || []; // 줄임말
                            setSugs(제안리스트); // 백엔드에서 가져온 리스트에서 이름만 sugs변수 이름으로 전달
                            setAdv(true); //  제안 리스트를 sugs 변수 이름으로 전달했고, 전달한 값이 존재하면 추천 검색어 보여주기 설정
                        }
                    )
                    .catch(
                        (err) => {
                            console.error("추천 검색어 동작 실패 : ",err);
                            setSugs([]); // 값 비우기

                        }
                    )


        }else { // 추천할 검색어가 없다면, input 이 없다면
            setSugs([]);
            setAdv(false);

        }
    }

    const handleSug = (sugs) =>{
        setKeyword(sugs);
        setAdv(false);


    }
    return (
        <div className="productsearch-container">
            <h2>상품 검색</h2>
            {err && <p style={{color: "orange"}}>{err}</p>}
            <div>
            <input type={"text"}
                   value={keyword}
                   placeholder="검색할 상품명을 입력해주세요."
                   onFocus={()=>setAdv(true)}
                   onChange={(handleChange)}
                   onBlur={ () => setTimeout( ()=> setAdv(false), 200)}
            />

            {
                adv && sugs.length > 0 && (
                    <ul>
                        {sugs.map(
                            (sugs,index) => (
                                <li key={index} onMouseDown={()=> handleSug(sugs)}>
                                    {sugs}
                                </li>
                            )
                        )}

                    </ul>
                )
            }
            </div>
            <button onClick={searchProducts}>검색</button>

            <ul>
                {products.length > 0
                    ?
                    (
                    products.map((product) => (
                        <li key={product.productId}>
                            {product.productName}
                            {product.productDescription}
                            {product.productPrice}
                            {product.productStock}
                            {product.productCategory}
                            {product.productImageUrl}
                        </li>
                    ))
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </ul>
        </div>
    )
}

export default ProductSearch;