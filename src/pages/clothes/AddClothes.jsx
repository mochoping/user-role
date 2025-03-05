import {useState} from "react";
import apiClothesService from "./apiClothesService";
import axios from "axios";
import InputTags from "./InputTags";
import {Link} from "react-router-dom";

/*
 <FormInput key={field.id} {...field} /> 로 inputFields 를 가져와서 활용하는 방법

 1. React 가 각 값을 구별할 수 있도록 index 대신 key 라는 명칭으로 숫자를 가져올 수 있도록 설정
 각 키에 해당하는 id 를 가져오고 가져온 아이디에 해당하는 모든 속성을 FormInput 전달

 {...field} -> inputFields 에서 key 순서에 해당하는 id, label, placeholder 값을 FormInput 으로 전달

  onChange 이벤트 핸들러를 사용하지 않아도 되는가 ?!
  FormInput 내부에 onChange 를 추가해서 상태 관리를 해야함

  onChange 가 없으면 사용자가 입력한 값을 저장할 수 없음
           하는 역할 : 사용자가 입력한 값을 임시저장 -> 저장해놓은 값을 백엔드로 전달
*/
const AddClothes = () => {
    // 의류 정보 상태 관리
    const [formData, setFormData] = useState({
        cname: "",
        ccategory: "",
        cbrand: "",
        cseason: "",
        cgender: "",
        cprice: "",
        cstock: "",
        csize: "",
        cmaterial: "",
        ccolor: ""
    });
    const inputFields = [
        {id:"cname",label:"의류명칭", placeholder:"상품 명칭을 입력해주세요."}    , //index 0
        {id:"ccategory",label:"카테고리", placeholder:"카테고리를(예:티셔츠, 바지, 자켓) 입력해주세요."}   ,
        {id:"cbrand",label:"브랜드", placeholder:"브랜드명을 입력해주세요."}   ,
        {id:"cseason",label:"시즌", placeholder:"계절(예: 봄, 여름, 가을, 겨울, 사계절)을 입력해주세요."}   ,
        {id:"cgender",label:"성별", placeholder:"성별(예: 공용, 남성, 여성)을 입력해주세요."}    ,
        {id:"cprice",label:"가격", placeholder:"가격을 입력해주세요."}    ,
        {id:"cstock",label:"재고수량", placeholder:"재고수량을 입력해주세요."}   ,
        {id:"csize",label:"사이즈", placeholder:"사이즈(예: S, M, L, XL)를 입력해주세요."}   ,
        {id:"cmaterial",label:"소재", placeholder:"소재를 입력해주세요."}   ,
        {id:"ccolor",label:"색상", placeholder:"색상을 입력해주세요."}   , // index 9
    ]


    /*
    입력갑 변경시 상태 업데이트
    e.target = 사용자가 값을 작성했고, 사용자가 값을 작성함으로 인해 input 값이 변경된 곳을 가르킴
    {name, value} =e.target
    e.target.name  : 현재 입력 필드의 name 속성을 가져옴
    e.target.value : 현재 입력 필드의 value 속성을 가져옴
    구조 분해 할당 방식
    e.target 이벤트가 발생한 input 에서 name과 value 값을 가져오는 과정

    예를들어
    <input type="text" name="cName" value = {formData.cName} onChange={handleChange}

    사용자가 input 내부에 입력
    1. onChange 함수실행 -> handleChange 기능 호출
    2. 호출된 내부에는 e.target 이벤트가 발생한 타겟의 name과 value 값 가져오기 실행
    e.target = {
                    name:"cName".
                    value:"아름다운  티셔츠",
                    type:"text".
     }
     와 같은 형태로 이루어져 있음

    e.target 내부에 들어있는 값들 중에서 name과 value 값만 꺼내서 사용하겠다는 의미

    const name 변수와 value 변수 이름에 해당하는 값을 e.target에서 꺼내오기
    제대로 해당 변수이름과 일치하는 것을 꺼내왔다면
    name = "cname"
    value = "사용자가 입력한 값"
    의 형식으로 담겨지게 됨.
     */
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData, // 값이 변경된 다른 input 을 제외하고  변경되지 않은 input값 상태를 그대로 유지한채로
            [name]: value, // 값이 변경된 input 값만 변경
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // 유효성 검사 체크 -> pattern 정규식 type required 와 같은 형식 참조하여 체크
        const form = e.target;
        if(!form.checkValidity()){
            form.classList.add("was-validated"); // bootstrap 내부에서만 동작
        }



        apiClothesService.insertClothes(formData)
    }

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
*//*
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
    */
 /*
 * <div className="EditClothes-container">
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
    * */

    return (
        <div className="container px-5">

            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i
                        className="bi bi-envelope"></i></div>
                    <h1 className="fw-bolder">의류 등록하기</h1>
                    <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <form onSubmit={handleSubmit}>
                            {inputFields.map(
                                (field)=>(
                                <InputTags key={field.id}
                                           {...field} // ... spread rest 연산자
                                            value={formData[field.id]}
                                           onChange={handleChange}
                                            required
                                />
                                )
                            )}

                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">
                                       등록 성공했습니다.
                                    </div>
                                    등록한 제품 확인하기
                                    <br/>
                                    <Link to={"/clothesList"}>의류 목록 페이지 이동하기</Link>
                                </div>
                            </div>

                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">의류를 등록하는데 문제가 발생했습니다.</div>
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg" id="submitButton"
                                        type="submit">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddClothes;