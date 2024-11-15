import styled from "styled-components";

export const Container = styled.div`
    border: 1px dotted salmon;
    margin: 10px 20px 10px 20px;
    padding: 5px;
    width:${(props)=>props.width || ""};
    height:${(props)=>props.height || ""};
    background-color: ${(props)=>props.backgroundcolor || ""};

`