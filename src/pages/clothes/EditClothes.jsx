import {useState} from "react";
import apiClothesService from "./apiClothesService";
import {useParams} from "react-router-dom";

const EditClothes = () => {
    const{id} = useParams();
    const[clothesForm, setClothesForm] = useState(null);
    const[cname, setCname] = useState("으어어");
    const[ccategory, setCcategory] = useState("");
    const[cbrand, setCbrand] = useState(null);
    const[cseason, setCseason] = useState("사계절");
    const[cgender, setCgender] = useState("공용");
    const[cprice, setCprice] = useState(0);
    const[cstock, setCstock] = useState(0);
    const[csize, setCsize] = useState("");
    const[cmaterial, setCmaterial] = useState("");

    const handleEdit =() =>{
        setClothesForm(cname+ccategory+cbrand+cseason+cgender+cprice+cstock+csize+cmaterial)

        let success
        let err
        apiClothesService.updateClothes(id,clothesForm,success,err)
        if(success){
            alert(success);
        } else{
            alert(err);
        }
    }

    return (
        <div className="EditClothes-container">
            <label> 이름 : </label>
            <input type={"text"}
                   value={cname}
                   placeholder={cname}
                   onChange={(e) => {
                       setCname(e.target.value)
                   }}/>
            <label> 카테고리 : </label>
            <input type={"text"}
                   value={ccategory}
                   onChange={(e) => {
                       setCcategory(e.target.value)
                   }}/>
            <label> 브랜드 : </label>
            <input type={"text"}
                   value={cbrand}
                   onChange={(e) => {
                       setCbrand(e.target.value)
                   }}/>
            <label> 시즌 : </label>
            <label htmlFor={"season0"}> 사계절 </label>
            <input hecked type={"radio"} name={"season"} id={"season0"} value={cseason} onClick={(e) => {
                setCseason("사계절")
            }}/>
            <label htmlFor={"season1"}> 봄 </label>
            <input type={"radio"} name={"season"} id={"season1"} value={cseason} onClick={(e) => {
                setCseason("봄")
            }}/>
            <label htmlFor={"season2"}> 여름 </label>
            <input type={"radio"} name={"season"} id={"season2"} value={cseason} onClick={(e) => {
                setCseason("여름")
            }}/>
            <label htmlFor={"season3"}> 가을 </label>
            <input type={"radio"} name={"season"} id={"season3"} value={cseason} onClick={(e) => {
                setCseason("가을")
            }}/>
            <label htmlFor={"season4"}> 겨울 </label>
            <input type={"radio"} name={"season"} id={"season4"} value={cseason} onClick={(e) => {
                setCseason("겨울")
            }}/>

            <label> 성별 : </label>

            <label htmlFor={"both"}> 공용 </label>
            <input type={"radio"} name={"gender"} id={"both"} value={cgender} onClick={(e) => {
                setCgender("공용")
            }}/>
            <label htmlFor={"male"}> 남성 </label>
            <input type={"radio"} name={"gender"} id={"male"} value={cgender} onClick={(e) => {
                setCgender("남성")
            }}/>
            <label htmlFor={"female"}> 여성 </label>
            <input type={"radio"} name={"gender"} id={"female"} value={cgender} onClick={(e) => {
                setCgender("여성")
            }}/>

            <label> 가격 : </label>
            <input type={"number"}
                   value={cprice}
                   onChange={(e) => {
                       setCprice(e.target.value)
                   }}/>
            <label> 재고 : </label>
            <input type={"number"}
                   value={cstock}
                   onChange={(e) => {
                       setCstock(e.target.value)
                   }}/>
            <label> 사이즈 : </label>
            <label htmlFor={"s"}> 스몰 </label>
            <input type={"radio"} name={"size"} id={"s"} value={csize} onClick={(e) => {
                setCsize("S")
            }}/>
            <label htmlFor={"m"}> 미디움 </label>
            <input type={"radio"} name={"size"} id={"m"} value={csize} onClick={(e) => {
                setCsize("M")
            }}/>
            <label htmlFor={"l"}> 라지 </label>
            <input type={"radio"} name={"size"} id={"l"} value={csize} onClick={(e) => {
                setCsize("L")
            }}/>
            <label htmlFor={"xl"}> 엑스라지 </label>
            <input type={"radio"} name={"size"} id={"xl"} value={csize} onClick={(e) => {
                setCsize("XL")
            }}/>
            <label htmlFor={"xxl"}> 투엑스라지 </label>
            <input type={"radio"} name={"size"} id={"xxl"} value={csize} onClick={(e) => {
                setCsize("XXL")
            }}/>
            <label> 소재 : </label>
            <input type={"text"}
                   value={cmaterial}
                   onChange={(e) => {
                       setCmaterial(e.target.value)
                   }}/>

            <button onClick={handleEdit}>수정하기</button>
        </div>
    )
}

export default EditClothes;