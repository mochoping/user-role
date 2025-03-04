import {useState} from "react";
import apiClothesService from "./apiClothesService";
import axios from "axios";


const AddClothes = () => {

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

    const handleAdd = () => {

        const formsetup = {cname:cname,
                                ccategory:ccategory,
                                cbrand:cbrand,
                                ccolor:ccolor,
                                csize:csize,
                                cmaterial:cmaterial,
                                cprice:cprice,
                                cstock:cstock,
                                cgender:cgender,
                                cseason:cseason
        }
           apiClothesService.insertClothes(formsetup)

    };


    return (
        <div className="EditClothes-container">
            <form>
                <label> 이름 : </label>
                <input type={"text"}
                       value={cname}
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
                <label> 색상 : </label>
                <input type={"text"}
                       value={ccolor}
                       onChange={(e) => {
                           setCcolor(e.target.value)
                       }}/>
                <label> 시즌 : </label>
                <select value={cseason}
                        onChange={(e) => {
                            setCseason(e.target.value)
                        }}>
                    <option value={"사계절"}>사계절</option>
                    <option value={"봄"}>봄</option>
                    <option value={"여름"}>여름</option>
                    <option value={"가을"}>가을</option>
                    <option value={"겨울"}>겨울</option>
                </select>

                <label> 성별 : </label>

                <select value={cgender}
                        onChange={(e) => {
                            setCgender(e.target.value)
                        }}>
                    <option value={"공용"}>공용</option>
                    <option value={"남성"}>남성</option>
                    <option value={"여성"}>여성</option>

                </select>

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

                <select value={csize}
                        onChange={(e) => {
                            setCsize(e.target.value)
                        }}>
                    <option value={"S"}>스몰</option>
                    <option value={"M"}>미디움</option>
                    <option value={"L"}>라지</option>
                    <option value={"XL"}>엑스라지</option>
                    <option value={"XXL"}>투엑스라지</option>

                </select>

                <label> 소재 : </label>
                <input type={"text"}
                       value={cmaterial}
                       onChange={(e) => {
                           setCmaterial(e.target.value)
                       }}/>

                <button onClick={handleAdd}>등록하기</button>
            </form>
        </div>
    )
}

export default AddClothes;