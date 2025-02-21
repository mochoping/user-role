import {useState} from "react";


const ProductDetail = () =>{


    //제품 아이디 변수 이름
    const [productId, setProductId] = useState("");
    //제품 정보 변수 이름
    const [product, setProduct] = useState(null);

    const getProductDetail = () => {
        // input 비어있는지 확인 후 비어있다면
        // "상품 ID를 입력하세요." 보여준 후 리턴

    }


    return(
    <div className="ProductDetail-container">
        <h2>상품 상세 조회</h2>
        <input
            type="text"
            value={productId}
            placeholder="상품 ID 입력"
        />
        <button onClick={getProductDetail}>조회</button>

        {product ? (
            <div>
                <h3>{product.productName}</h3>
                <p>카테고리: {product.productCategory}</p>
                <p>가격: {product.productPrice}원</p>
                <p>재고: {product.productStock}개</p>
                <p>설명: {product.productDescription}</p>
            </div>
        ) : (
            <p>상품 정보를 찾을 수 없습니다.</p>
        )}
    </div>
    )
}
    
export default ProductDetail;