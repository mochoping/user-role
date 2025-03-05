import {Link} from "react-router-dom";
import {useState} from "react";

const ClothesCard = ({cid,cname,cprice,handleDelete,barrel}) => {


    return (
        <>
        {barrel
    ?
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                    <img className="card-img-top mb-5 mb-md-0"
                         src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..."/>
                </div>
                <div className="col-md-6">
                    <div className="small mb-1">{cname}</div>
                    <h1 className="display-5 fw-bolder"></h1>
                    <div className="fs-5 mb-5">
                        <span>{cprice}</span>
                    </div>
                    <p className="lead">
                    </p>
                    <div className="d-flex">
                        <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                               style={{maxWidth: 3 + 'rem'}}/>
                        <Link to={`/clothes/${cid}`}>
                            <button className="btn btn-outline-warning">자세히보기</button>
                        </Link>
                        {/* ✅ 삭제 버튼 */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    :
    <div class={"col-4 mb-5"} key={cid}>
        <Link to={`/clothes/${cid}`}>

            <div class="card h-100">
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                     alt="Fancy Product"/>
                <div class="card-body p-4 text-center">
                    <h5 class="fw-bolder">

                        <p class="text-decoration-none">{cname}</p>
                    </h5>
                    {cprice}원
                </div>
            </div>
        </Link>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
                <button class="btn btn-outline-dark mt-auto" onClick={handleDelete}>삭제</button>
            </div>
        </div>
    </div>
        }
        </>
)
}

export default ClothesCard;