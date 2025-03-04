import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link, useNavigate} from "react-router-dom";

const ClothesList = () => {
    const [clothes, setClothes] = useState([]);
    const [errm, setErrm] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        apiClothesService.getAllClothes(setClothes, setErrm)
    }, []);



    const handleDelete = () => {

        if(window.confirm("정말 삭제하시겠습니까?")){
            apiClothesService.deleteClothes(clothes.cid);
            navigate("/clothes");
        }
    }
    /*
     <div style={{textAlign: "center"}}>
                    <ul  key={clothes.cid}>
                    <li class="list-group">
                        <Link to={`/clothes/${clothes.cid}`}>
                        <p class="list-group-item"> 이름 : {clothes.cname}</p>
                        </Link>
                        <p> 카테고리 : {clothes.ccategory}</p>
                        <p> 시즌 : {clothes.cseason}</p>
                        <p> 성별 : {clothes.cgender}</p>
                        <p> 가격 : {clothes.cprice}</p>
                        <p> 브랜드 : {clothes.cbrand}</p>
                        <p> 재고 : {clothes.cstock}</p>
                        <p> 사이즈 : {clothes.csize}</p>
                        <p> 재질 : {clothes.cmaterial}</p>
                        <p> 등록일자 : {clothes.cregisterDate}</p>
                    </li>
                    </ul>
                </div>
     */



    return (
        <div className={"row"}>

            {clothes.map((clothes) =>
                (
                    <div class="col mb-5" key={clothes.cid}>
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                 alt="Fancy Product"/>
                            <div class="card-body p-4 text-center">
                                <h5 class="fw-bolder">
                                    <Link to={`/clothes/${clothes.cid}`}>
                                    <p class="text-decoration-none">{clothes.cname}</p>
                                    </Link>
                                </h5>
                                {clothes.cprice.toLocaleString()}원
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <button class="btn btn-outline-dark mt-auto" onClick={handleDelete}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ClothesList;