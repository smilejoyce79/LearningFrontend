import React from "react";
import DefaultLayout from "../layout/DefautLayout";
import { Typography,Space,Row,Col,Divider,Anchor,ConfigProvider,Button,Input,Progress,Spin,DatePicker,Slider } from 'antd';
import { Container } from "../components/common/Container";
import ClearFixed from "../components/common/ClearFixed";
import { SmileFilled, SmileOutlined } from "@ant-design/icons";

const A001 =()=>{
    const { Title, Text, Link , Paragraph } = Typography;

    return(
        <>
            <DefaultLayout fixedHeader>
                <ClearFixed height={"100px"}/>

                <h1>頁面定位錨點 Anchor</h1>
                <pre>{`
項目 items={[ {key:'1', href:'#跳轉目的區塊的id', title:'顯示文字'} ]}
方向 direction="horizontal"
                `}</pre>
                <Anchor
                    direction="horizontal"
                    items={[
                        {
                            key:'1',
                            href:'#section1',
                            title:'排版'
                        },{
                            key:'2',
                            href:'#section2',
                            title:'分割線'
                        },{
                            key:'3',
                            href:'#section3',
                            title:'全局樣式設定'
                        }
                    ]}
                />

                <h1 id="section1">排版 Typography </h1>
                <Row gutter={24}>

                    <Col xl={6}>
                        <h2>標題字級 Title</h2>
                        <Container>
                            <Title>h1. Title</Title>
                            <Title level={2}>h2. Title level= 2</Title>
                            <Title level={3}>h3. Title level= 3</Title>
                            <Title level={4}>h4. Title level= 4</Title>
                            <Title level={5}>h5. Title level= 5</Title>
                        </Container>
                    </Col>

                    <Col xl={7}>
                        <h2>內文樣式 Text</h2>
                        <Container>
                            <Space direction="vertical">
                                <Text>Text</Text>
                                <Text type="secondary">Text type= secondary</Text>
                                <Text type="success">Text type= success</Text>
                                <Text type="warning">Text type= warning</Text>
                                <Text type="danger">Text type= danger</Text>
                                <Text disabled>Text disabled</Text>
                                <Text mark>Text mark</Text>
                                <Text code>Text code</Text>
                                <Text keyboard>Text keyboard</Text>
                                <Text underline>Text underline</Text>
                                <Text delete>Text delete</Text>
                                <Text strong>Text strong</Text>
                                <Text italic>Text italic</Text>
                                <Link href="https://ant.design" target="_blank">
                                    Link (href="_" target="_blank")
                                </Link>
                            </Space>
                        </Container>
                    </Col>

                    <Col xl={10}>
                        <h2>內文複製/編輯功能 Text</h2>
                        <Container>
                            <Space direction="vertical">
                                <Text editable>Text editable</Text>
                                <Text copyable>Text copyable</Text>
                                <Text copyable={{tooltips:false}}>Text copyable= tooltips:false</Text>
                                <Text copyable={{
                                    icon:[
                                        <SmileOutlined key="copy"/>,
                                        <SmileFilled key="copied"/>
                                    ],
                                    tooltips:[
                                        'click here',
                                        'you clicked'
                                    ]
                                }} >
                                    Text copyable= icon:[ ], tooltips:[ ]
                                </Text>
                                <hr/>
                                <span>只顯示icon, 但可以copy到程式碼 text:'_' 中的文字</span>
                                <Text copyable={{text:'text to be copied.'}}></Text>
                                
                            </Space>
                        </Container>
                                
                        <h2>段落收縮/展開更多 Paragraph <small>ellipsis=expandable:true</small></h2>
                        <Container>
                            <Paragraph ellipsis={{expandable:true}}>
                                Paragraph  Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                            </Paragraph>
                        </Container>
                    </Col>
                </Row>

                <hr/>
                <h1 id="section2">分割線 Divider</h1>
                <Container>                    
                    <Row gutter={24}>
                        <Col xl={10}>
                            <span>Divider style= borderColor:'_' </span>
                            <Divider style={{borderColor:'#7cb305'}}/>

                            <span>Divider variant="dashed"</span>
                            <Divider variant="dashed" style={{borderColor:'#7cb305'}}/>

                            <span>Divider variant="dotted"</span>
                            <Divider variant="dotted" style={{borderColor:'#7cb305'}}/>

                            <Divider>Divider</Divider>

                            <Divider type="vertical"/> Divider <Divider type="vertical"/> type="vertical" 

                            <Divider orientation="left">Divider orientation="left"</Divider>
                            <Divider orientation="left" plain>Divider orientation="left" plain</Divider>
                            <Divider orientation="left" orientationMargin={0}>Divider orientation="right" orientationMargin={0}</Divider>              
                            <Divider orientation="right">Divider orientation="right"</Divider>
                        </Col>
                    </Row>
                </Container>

                <hr/>
                <h1>全局樣式設定 ConfigProvider</h1>
                <Space size={50} id="section3">
                    
                    <Space direction="vertical">
                        <p>原預設主題</p>
                        <Button type="primary">Button</Button>
                        <Input placeholder="Type here"/>
                        <Progress percent={50} type="circle"/>
                        <Spin spinning/>
                        <DatePicker/>
                        <Slider/>
                    </Space>

                    <ConfigProvider
                        theme={{
                        token: {
                            // 在seeds.d.ts檔案有各項變數用途說明
                            colorPrimary: 'red', //改變所有設定為primary的元件色彩
                            borderRadius: 20, //改變所有圓角弧度
                            colorInfo:'#62c936', //改變進度條色彩
                            colorBgContainer: '#ffecd1', //改變input背景色
                            colorTextBase:'#169e65', //改變文字顏色
                            fontFamily: 'STHupo', //改變字型
                            fontSize:20 //改變字大小
                        },
                        }}
                    >

                        <Space direction="vertical"> 
                            <p>在父層用ConfigProvider改變主題樣式</p>
                            <Button type="primary">Button</Button>
                            <Input placeholder="Type here"/>
                            <Progress percent={50} type="circle"/>
                            <Spin spinning/>
                            <DatePicker/>
                            <Slider/>
                        </Space>

                    </ConfigProvider>

                </Space>
            </DefaultLayout>
        </>
    )
}
export default A001;