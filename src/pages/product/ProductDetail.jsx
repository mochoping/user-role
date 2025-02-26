import {useState} from "react";
import axios from "axios";
import apiProductService from "./apiProductService";
import {useParams} from "react-router-dom";


const ProductDetail = () => {

    const {productId} =useParams();
    //제품 아이디 변수 이름
    const [quantity, setQuantity] = useState(1);
    //제품 정보 변수 이름
    const [product, setProduct] = useState(null);
    const [err, setErr] = useState(null);


    const getProductDetail = () => {

        if (!productId.trim()) { // trim() 왼쪽 오른쪽 공백 제거
            alert("상품 ID를 입력하세요.");
            return;
        }
        apiProductService.getProductById(productId, setProduct, setErr);

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
                        <div className="small mb-1">{product?.productCategory}</div>
                        <h1 className="display-5 fw-bolder">{product?.productName}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">
                                {(product?.productPrice * 1.3).toLocaleString()}원
                            </span>
                            <span>{product?.productPrice}</span>
                        </div>
                        <p className="lead">{product?.productDescription.toLocaleString()}원</p>
                        <div className="d-flex">
                            <div className="fs-5 mb-5">
                                <span>{product?.productStock}</span>
                            </div>
                            {/*
                            리액트의 경우
                            style 태그를 직접적으로 작성 XX
                            style = "max-width: 3rem"  를
                            style={{maxWidth: "3rem"}} 와 같이 변형해서 작성
                            */}
                            <input className="form-control text-center me-3"
                                   id="inputQuantity"
                                   type="num"
                                   value={quantity}
                                   onChange={(e) => setQuantity(e.target.value)}
                                   style={{maxwidth: "3rem"}}/>

                            <button className="btn btn-outline-danger flex-shrink-0"
                                    type="button"
                                    >

                                <i className="bi-cart-fill me-1"></i>

                                Add to cart

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};


const ProductDetail2 = () => {


    //제품 아이디 변수 이름
    const [productId, setProductId] = useState("");
    //제품 정보 변수 이름
    const [product, setProduct] = useState(null);
    const [err, setErr] = useState(null);


    const getProductDetail = () => {

        if (!productId.trim()) { // trim() 왼쪽 오른쪽 공백 제거
            alert("상품 ID를 입력하세요.");
            return;
        }
        apiProductService.getProductById(productId, setProduct, setErr);

    }

    return (

        <div className="ProductDetail-container">
            <h2>상품 상세 조회</h2>
            {err && <p style={{color: "orange"}}>{err}</p>}
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