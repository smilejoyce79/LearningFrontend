import React from "react";
import styled,{css} from "styled-components";
import Header from "../components/common/Header";

const PageHeader = styled.div`
    ${(props)=>props.fixed && css`
        position:fixed;
        z-index: 1;
    `}
`

const DefaultLayout=({fixedHeader,children})=> {
  return (
    <div>
        <PageHeader fixed={fixedHeader}>
            <Header/>
        </PageHeader>
        {children}
    </div>
  );
}

export default DefaultLayout;
