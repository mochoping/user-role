const Main = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 text-center p-4 border rounded shadow">
                    <h1 className="text-primary">메인 컴포넌트</h1>
                    <p className="lead">이 컴포넌트는 Bootstrap을 활용해서 스타일을 작성합니다.</p>
                    <buttom className="btn btn-primary">클릭하세요</buttom>
                </div>

                <div className="col-4 text-center p-4 border rounded shadow">
                    <h1 className="text-primary">메인 컴포넌트</h1>
                    <p className="lead">이 컴포넌트는 Bootstrap을 활용해서 스타일을 작성합니다.</p>
                    <buttom className="btn btn-warning">클릭하세요</buttom>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-1 border">
                    column
                </div>
                <div className="col-2 border border-4 border-primary p-5">
                    column
                </div>
                <div className="col-1 border">
                    column
                </div>
            </div>
            <div className="row">
                <div className="col-4">


            <div className="card">
                <img src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/07/554539-ultimo-caca-cerdo-construir-carreteras.jpg?tf=3840x" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">
                        카드제목
                    </h5>
                    <p className="card-text">
                        카드 내용입니다.
                    </p>
                    <a href="#" className="btn btn-warning">버튼</a>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Main;