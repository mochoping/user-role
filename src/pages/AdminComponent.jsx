import React from "react";
import styled from "styled-components";
import UserSearch from "./admin/UserSearch";
import ProductSearch from "./product/ProductSearch";

const AdminComponent = () => {
    return (
        <div style={{ backgroundColor: "#ffcccc", padding: "20px", borderRadius: "5px" }}>
            <h2>📢 관리자 전용 대시보드</h2>
            <p>이곳에서 모든 관리 기능을 사용할 수 있습니다.</p>
            <h3>유저 검색</h3>
            <UserSearch />
            <ProductSearch />
        </div>
    );
};

export default AdminComponent;