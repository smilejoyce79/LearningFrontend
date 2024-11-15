import DefaultLayout from "../layout/DefautLayout";
import ClearFixed from "../components/common/ClearFixed";
import { Container } from "../components/common/Container";
import { Alert,Button,Space } from 'antd';
import Marquee from "react-fast-marquee";

const A006 =()=>{
    return(
        <>
        <DefaultLayout fixedHeader>
            <ClearFixed height={"100px"}/>

            <h1>警示訊息框 Alert</h1>
            <Container width="600px">
                <h2>主題色type= </h2>
                <h2>標題message= 內文description= </h2>
                <h2>關閉按鈕 closable 圖示showIcon</h2>
                <Alert
                    type="success"
                    message="success"
                    description="description"
                    closable
                    showIcon
                />
                <h2>頂部公告 banner</h2>
                <Alert type="info" message="info" size="large" banner/>

                <h2>自定義按鈕 action (多個按鈕要用Space包)</h2>
                <Alert 
                    type="warning" 
                    message="warning"
                    action={
                        <Space direction="vertical">
                            <Button>確認</Button>
                            <Button>取消</Button>
                        </Space>
                    }   
                />
                <Alert type="error" message="error"/>

                <h2>跑馬燈 Marquee</h2>
                <p>需先 npm install react-fast-marquee</p>
                <p>游標懸停時暫停pauseOnHover 內文漸層gradient=false</p>
                <Alert type="error" message={
                    <Marquee pauseOnHover gradient={false}>
                        message run run run message run run run message run run run
                    </Marquee>
                }/>
                <h2>關閉後有滑出動畫 afterClose= </h2>

                <h2>onClose=</h2>
                <h2>用Alert包住error訊息</h2>
            </Container>
        </DefaultLayout>
        </>
    )
}
export default A006;