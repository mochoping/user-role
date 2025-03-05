const InputTags = ({id, label, placeholder, value, onChange} ) => {
  // props 대신 {id, label, placeholder, value, onChange} 표현 가능 -> 그럴경우 변수들에 적힌 props. 제거 가능
    return (
        <div className="InputTags-container">
            <div className="form-floating mb-3">
                <input className="form-control"
                       id={id}
                       name={id}
                       type="text"
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       data-sb-validations="required"/>
                <label htmlFor={id}>{label} : </label>
                <div className="invalid-feedback" data-sb-feedback={`${id}:required`}>{/* + 대신 : */}
                    {label}은(는) 필수로 입력해야 합니다.
                </div>
            </div>
        </div>
    )
}

export default InputTags;