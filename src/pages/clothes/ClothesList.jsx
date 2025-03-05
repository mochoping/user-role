import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link, useNavigate} from "react-router-dom";
import ClothesCard from "./ClothesCard";
import HorizentalCMenu from "./HorizentalCMenu";

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


  <div className="col mb-5" key={clothes.cid}>
                        <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                 alt="Fancy Product"/>
                            <div className="card-body p-4 text-center">
                                <h5 className="fw-bolder">
                                    <Link to={`/clothes/${clothes.cid}`}>
                                        <p className="text-decoration-none">{clothes.cname}</p>
                                    </Link>
                                </h5>
                                {clothes.cprice.toLocaleString()}원
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <button className="btn btn-outline-dark mt-auto" onClick={handleDelete}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>


     */
    /*
    const handleRow = () =>{
        if(barrel === "col-4 mb-5"){
            setBarrel("col-12 mb-5")
        } else {
            setBarrel("col-4 mb-5")
        }


    }
    */
    const [barrel, setBarrel] = useState(true);


    const handleRow = () =>{

        if(barrel){
            setBarrel(false)

        } else {
            setBarrel(true)

        }

    }
    return (
        <>
            <HorizentalCMenu/>


        <div className={"row"} style={{justifyContent:"space-around"}}>
            <p class="col-1">{clothes.length}개</p>
            <button class={"col-1"} onClick={handleRow}>{barrel ? "3열 보기":"1열 보기"}</button>
        <div className={"row"}>

            {clothes.map((clothes) =>
                (
                  <ClothesCard  key={clothes.cid}
                                {...clothes}
                                cprice={clothes.cprice.toLocaleString()}
                                handleDelete={handleDelete}
                                barrel={barrel}/>
                ))
            }
        </div>
        </div>
        </>
    )
}

export default ClothesList;