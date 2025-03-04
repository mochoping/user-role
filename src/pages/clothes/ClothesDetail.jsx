import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const ClothesDetail = () => {
    const navigate =useNavigate();
    const{id} = useParams();
    const[clothes, setclothes] = useState(null);
    const[errm,setErrm] = useState(null);

    useEffect(() => {
       apiClothesService.getClothesById(id,setclothes,setErrm)
     /*   axios
            .get(`http://localhost:8080/api/clothes/1`)
            .then((res)=>{setclothes(res.data)})
            .catch((err)=>{
                console.log(err)
            })*/
    }, [id]);

    if(!clothes){
        return <p>정보를 로딩중입니다. </p>
    }


    const handleDelete = () => {

        if(window.confirm("정말 삭제하시겠습니까?")){
            apiClothesService.deleteClothes(id);
            navigate("/clothes");
        }
    }


    return (
        <div className="ClothesDetail-container">
            {<p style={{color: "red"}}>{errm}</p>}
            <p> 이름 : {clothes.cname}</p>
    <p> 카테고리 : {clothes.ccategory}</p>
    <p> 시즌 : {clothes.cseason}</p>
    <p> 성별 : {clothes.cgender}</p>
    <p> 가격 : {clothes.cprice}</p>
    <p> 브랜드 : {clothes.cbrand}</p>
    <p> 재고 : {clothes.cstock}</p>
    <p> 사이즈 : {clothes.csize}</p>
    <p> 재질 : {clothes.cmaterial}</p>
    <p> 등록일자 : {clothes.cregisterDate}</p>
            <p>파람파람 {id}</p>
            <Link to={`/clothes/edit/${id}`}>
            <button>수정하기</button>
            </Link>

            <button onClick={handleDelete}>삭제하기</button>

        </div>
    )
}

export default ClothesDetail;