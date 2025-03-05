const FormPostData = ({id,label,placeholder,value,onchange}) => {

    return (
        <div className="FormPostData-container">
            <label htmlFor={id}>{label} : </label>
            <input
                className={"form-control"}
                id={id}
                name={id}
                type={"text"}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                required
            />
        </div>
    )
}

export default FormPostData;