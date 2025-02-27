import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link} from "react-router-dom";

const ClothesList = () => {
    const [clothes,setClothes] = useState([]);
    const [errm, setErrm] =  useState(null);

    useEffect(() => {
            apiClothesService.getAllClothes(setClothes,setErrm)
    }, []);


    return (
        <div>

            {clothes.map((clothes)=> (
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
            ))}

        </div>
    )
}

export default ClothesList;