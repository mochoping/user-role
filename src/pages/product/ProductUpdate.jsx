import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiProductService from "./apiProductService";

const ProductUpdate = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const [ product,setProduct] = useState({
        productName:"",
        productCategory:"",
        productPrice:"",
        productStock:"",
        productDescription:"",

    });
    useEffect(() => {
        apiProductService.updateProduct();
    }, []);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct( // 낯선 문법 축약 포함 아마

            {...product,  //직접 객체에 전달
            [name]: value
            }
        );
    }

    return (
        <div className="ProductUpdate-container">
            <h2>상품수정</h2>
            <div className={"mb-3"}>
                <label className={"form-label"}>
                    상품명
                </label>
                <input type="text"
                       className={"form-control"}
                       name={"productName"}
                       value={product.productName}
                       onChange={handleChange}
                       />
            </div>

        </div>
    )
}

export default ProductUpdate;