import styled from 'styled-components';

const Clearfix = styled.div`
    height:${(props)=>props.height || "200px"}; //註2:若未指定屬性,則維持預設200px高度;若有指定則依設定
`;

export default Clearfix;