import {useEffect, useRef, useState} from "react";
import apiClothesService from "./apiClothesService";
import {useParams} from "react-router-dom";

const EditClothes = () => {
    const{id} = useParams();
    const[errm,setErrm] = useState(null);
    const[suc,setSuc] = useState(null);
    const[clothes,setclothes] = useState({
                                                                            cname:'',
                                                                            ccategory:'',
                                                                            cbrand:'',
                                                                            ccolor:'',
                                                                            csize:'',
                                                                            cmaterial:'',
                                                                            cprice:0,
                                                                            cstock:0,
                                                                            cgender:'공용',
                                                                            cseason:'사계절'
                                                                            });
    /*
    const[cname, setCname] = useState("으어어");
    const[ccategory, setCcategory] = useState("");
    const[cbrand, setCbrand] = useState("");
    const[cseason, setCseason] = useState("사계절");
    const[cgender, setCgender] = useState("공용");
    const[cprice, setCprice] = useState(0);
    const[cstock, setCstock] = useState(0);
    const[csize, setCsize] = useState("");
    const[cmaterial, setCmaterial] = useState("");
    const[ccolor, setCcolor] = useState("");
    */
    /*
    useEffect(() => {
        apiClothesService.getClothesById(id,setSuc,setErrm)

        setCname(suc.cname)
        setCcategory(suc.ccategory)
        setCbrand(suc.cbrand)
        setCcolor(suc.ccolor)
        setCsize(suc.csize)
        setCmaterial(suc.cmaterial)
        setCprice(suc.cprice)
        setCstock(suc.cstock)
        setCgender(suc.cgender)
        setCseason(suc.cseason)


    }, []);
    */

    const handleEdit =(event) =>{
        event.preventDefault();
        console.log(clothes)
        console.log(id)
        /*
        const formsetup = {
            cname:cname,
            ccategory:ccategory,
            cbrand:cbrand,
            ccolor:ccolor,
            csize:csize,
            cmaterial:cmaterial,
            cprice:cprice,
            cstock:cstock,
            cgender:cgender,
            cseason:cseason}
*/
        apiClothesService.updateClothes(id,clothes)

    }


    const handleInputChange = (value, event) =>{
        setclothes((a) => ({
                ...a, // 함수형 업데이트? 동기적으로 사용하기 위해 작성?
            [value]: event.target.value,
        }) );
    }
        /* ref를 이용한 DOM 값의 직접적인 수정.
    const cnameRef = useRef();
    const ccategoryRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("cname: " + cnameRef.current.value);
        console.log("ccategory: " + ccategoryRef.current.value);
    }
    */

    /* 자바스크립트 초기 배웠던 폼데이터 방식.
    const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const cname= formData.get("cname");

    const cgenderData = formData.getAll("cgender");
    const cseasonData = formData.getAll("cseason");
    const data = Object.fromEntries(formData.entries());
    data.cgender = cgenderData;
    data.cseason = cseasonData;
    }
    */

    return (
        <div className="EditClothes-container">
            <form>
                <label> 이름 : </label>
                <input type={"text"}
                       value={clothes.cname}
                       onChange={(e) => handleInputChange("cname",e)
                       }/>
                <label> 카테고리 : </label>
                <input type={"text"}
                       value={clothes.ccategory}
                       onChange={(e) => handleInputChange("ccategory",e)
                       }/>
                <label> 브랜드 : </label>
                <input type={"text"}
                       value={clothes.cbrand}
                       onChange={(e) => handleInputChange("cbrand",e)
                       }/>
                <label> 색상 : </label>
                <input type={"text"}
                       value={clothes.ccolor}
                       onChange={(e) => handleInputChange("ccolor",e)
                       }/>
                <label> 시즌 : </label>
                <select value={clothes.cseason}
                        onChange={(e) => handleInputChange("cseason",e)
                        }>
                    <option value={"사계절"}>사계절</option>
                    <option value={"봄"}>봄</option>
                    <option value={"여름"}>여름</option>
                    <option value={"가을"}>가을</option>
                    <option value={"겨울"}>겨울</option>
                </select>

                <label> 성별 : </label>

                <select value={clothes.cgender}
                        onChange={(e) => handleInputChange("cgender",e)
                        }>
                    <option value={"공용"}>공용</option>
                    <option value={"남성"}>남성</option>
                    <option value={"여성"}>여성</option>

                </select>

                <label> 가격 : </label>
                <input type={"number"}
                       value={clothes.cprice}
                       onChange={(e) => handleInputChange("cprice",e)
                       }/>
                <label> 재고 : </label>
                <input type={"number"}
                       value={clothes.cstock}
                       onChange={(e) =>handleInputChange("cstock",e)
                       }/>
                <label> 사이즈 : </label>

                <select value={clothes.csize}
                        onChange={(e) => handleInputChange("csize",e)
                        }>
                    <option value={"S"}>스몰</option>
                    <option value={"M"}>미디움</option>
                    <option value={"L"}>라지</option>
                    <option value={"XL"}>엑스라지</option>
                    <option value={"XXL"}>투엑스라지</option>

                </select>

                <label> 소재 : </label>
                <input type={"text"}
                       value={clothes.cmaterial}
                       onChange={(e) => handleInputChange("cmaterial",e)
                       }/>

                <button onClick={handleEdit}>등록하기</button>
            </form>
        </div>
    )
}

export default EditClothes;