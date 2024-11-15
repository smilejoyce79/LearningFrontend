import React,{useState} from "react";
import DefaultLayout from "../layout/DefautLayout";
import { Button,Space,Input,Flex,Tooltip,Row,Col,InputNumber,FloatButton } from 'antd';
import { Container } from "../components/common/Container";
import ClearFixed from "../components/common/ClearFixed";
import { SearchOutlined,InfoCircleOutlined,UserOutlined, QuestionCircleOutlined, SyncOutlined,HomeOutlined,SettingFilled,SmileOutlined,LoadingOutlined, SmileTwoTone } from "@ant-design/icons";

const A003 =()=>{

    const [loadings, setLoadings] = useState(false);
    const onButtonClick = (e)=>{
        setLoadings(true)

        setTimeout(()=>{
            setLoadings(false)
        },2000)
    }

    return(
        <DefaultLayout fixedHeader>
            <ClearFixed height={"100px"}/>
            <Row>
                <Col span={12}>
                    <h1>按鈕 Button</h1>
                    <h2>快速樣式 Type=</h2>
                    <Space>
                        <Button type="primary">primary</Button>
                        <Button type="dashed" >dashed</Button>
                        <Button type="link" >link</Button>
                        <Button type="text" >text</Button>
                        <Button type="default" >default</Button>
                    </Space>

                    <h2>主題顏色 color=</h2>
                    <Space>
                        <Button color="default" variant="solid">default</Button>
                        <Button color="primary" variant="solid">primary</Button>
                        <Button color="danger" variant="solid">danger</Button>
                    </Space>

                    <h2>框線樣式 variant=</h2>
                    <Space>
                        <Button color="default" variant="solid">Solid</Button>
                        <Button color="default" variant="outlined">Outlined</Button>
                        <Button color="default" variant="dashed">Dashed</Button>
                        <Button color="default" variant="filled">Filled</Button>
                        <Button color="default" variant="text">Text</Button>
                        <Button color="default" variant="link">Link</Button>
                    </Space>

                    <h2>外框形狀 shape=</h2>
                    <Space>
                        <Button color="default" shape="default">default</Button>
                        <Button color="default" shape="circle">circle</Button>
                        <Button color="default" shape="round">round</Button>
                    </Space>

                    <h2>圖示樣式 icon= 圖示位置 iconPosition= </h2>
                    <Space>
                        <Button color="default" icon={<SearchOutlined/>}></Button>
                        <Button color="default" icon={<SearchOutlined/>}>SearchOutlined</Button>
                        <Button color="default" icon={<SearchOutlined/>} iconPosition="end">SearchOutlined</Button>
                    </Space>

                    <h2>尺寸 size= </h2>
                    <Space>
                        <Button size="small">small</Button>
                        <Button size="middle">middle</Button>
                        <Button size="large">large</Button>
                    </Space>

                    <h2>其他boolean值設定</h2>
                    <Container width="400px" backgroundcolor="gray">
                        <p>禁按 disabled</p>
                        <Button disabled>Button</Button>
                        <p>透明樣式 ghost (適用於有色背景)</p>
                        <Button ghost>Button</Button>
                        <p>寬度佔滿父層 block</p>
                        <Button block>block</Button>
                    </Container>

                    <h2>超連結至 href="_" 跳轉方式另開新視窗 target="_blank"</h2>
                    <Button type="link" href="http://www.google.com/" target="_blank">Google Home</Button>            
                    <h2>按鈕類型 htmlType="submit/reset/button"</h2>

                    <h2>載入中動畫 loading</h2>
                    <Button loading>Loading</Button>
                    <h2>點擊觸發載入中動畫, 持續2秒結束 onClick= loading=</h2>
                    <Button onClick={onButtonClick} loading={loadings}>Loading</Button>

                    <h2>Dropdown.Button</h2>

                    <h1>懸浮按鈕(頁面右下角) FloatButton</h1>
                    <pre>{`
圖示樣式 icon= 主題色樣式 type="primary/default" 
行內終點距離 style={{insetInlineEnd: 24 +70 }}
外框形狀 shape="circle/square"
附註文字 description="_" 
游標懸停時對話框內文 tooltip={<div>文字<div>} 
右上角未讀數字(color未指定則預設red) badge={{count:5, color:'blue', overflowCount:999}}
                    `}</pre>
                    <FloatButton
                        icon={<QuestionCircleOutlined/>}
                        type="primary"
                        shape="circle"
                        style={{insetInlineEnd:24}}
                        tooltip={<div>tooltip</div>}
                        badge={{count:5, color:'blue', overflowCount:999}}
                    />
                    <FloatButton
                        icon={<QuestionCircleOutlined/>}
                        shape="circle"
                        style={{insetInlineEnd:24+70}}
                        badge={{count:2, overflowCount:999}}
                    />
                    <FloatButton
                        icon={<QuestionCircleOutlined/>}
                        shape="circle"
                        style={{insetInlineEnd:24+70+70}}
                        badge={{dot:true}}
                    />
                    <pre>{`
群組連續懸浮按鈕 FloatButton.Group > FloatButton
文件圖示 FloatButton
回到頁面頂部圖示 FloatButton.BackTop 
設定從頁面滾動高度{_}以後才顯示BackTop按鈕 visibilityHeight={0}
游標懸停/點擊才展開 trigger="hover/click"
展開方向 placement="left/top/bottom/right"
                    `}</pre>

                    <FloatButton.Group
                        shape="square"
                        trigger="hover"
                        placement="left"
                        style={{insetInlineEnd:24+70+70+70}}
                    >
                        <FloatButton />
                        <FloatButton.BackTop visibilityHeight={0} description="top" />
                        <FloatButton icon={<SyncOutlined/>}/>
                        <FloatButton icon={<QuestionCircleOutlined/>}/>
                    </FloatButton.Group>

                    <h1>圖示 Icon</h1>
                    <pre>{`
NPM安裝套件 npm install @ant-design/icons --save
風格: 外框線Outlined 底色Filled 雙色TwoTone
雙色主題色 twoToneColor='#eb2f96'
旋轉動畫 spin
旋轉角度 rotate={180}
可自訂義svg元件置入成icon
                    `}</pre>
                    <Space>
                        <HomeOutlined />
                        <SyncOutlined spin />
                        <SmileOutlined rotate={180} />
                        <LoadingOutlined />
                        <SmileTwoTone twoToneColor='#eb2f96'/>
                    </Space>

                </Col>
                
                <Col span={12}>
                    <h1>輸入框(單行) Input</h1>
                    <Container width="500px">
                        <h2>預設文字 defaultValue="_"</h2>
                        <h2>提示文字 placeholder="_"</h2>
                        <h2>外框樣式 variant=</h2>
                        <Flex vertical gap={6}>
                            <Input placeholder="default" defaultValue="defaultValue"/>                            
                            <Input variant="outlined" placeholder="outlined"/>
                            <Input variant="filled" placeholder="filled"/>
                            <Input variant="borderless" placeholder="borderless"/>
                        </Flex>

                        <h2>尺寸 size=</h2>
                        <Flex vertical gap={6}>
                            <Input size="small" placeholder="small"/>
                            <Input size="default" placeholder="default"/>
                            <Input size="large" placeholder="large"/>
                        </Flex>

                        <h2>外框顏色 status=</h2>
                        <Flex vertical gap={6}>
                            <Input status="warning" placeholder="warning"/>
                            <Input status="error" placeholder="error"/>
                        </Flex>

                        <h2>前綴 prefix=  後綴 suffix= </h2>
                        <Flex vertical gap={6}>
                            <Input prefix="￥" suffix="RMB" />
                            <Input
                                placeholder="Enter your username"
                                prefix={
                                    <UserOutlined/>
                                }
                                suffix={
                                    <Tooltip title="Extra information">
                                        <InfoCircleOutlined/>
                                    </Tooltip>
                                }
                            />
                        </Flex>

                        <h2>清空已填內容 的叉叉按鈕 allowClear </h2>
                        <Input allowClear placeholder="I have allowClear button"/>

                        <h2>禁用 disabled </h2>
                        <Input disabled placeholder="disabled"/>

                        <h2>顯示字數showCount 限制可填字數 maxLength=</h2>
                        <Input showCount maxLength={20}/>

                        <h2>提示上限字數 count=</h2>
                        <Input count={{
                            show: true,
                            max: 10,
                        }}/>

                        <h2>限制可輸入字數(含emoji圖示)</h2>
                    </Container>

                    <h1>輸入框(多行) Input.TextArea</h1>
                    <Container width="500px">
                        <h2>預設可調尺寸</h2>
                        <Input.TextArea/>

                        <h2>固定尺寸 style= height:_ , resize: 'none'</h2>
                        <Input.TextArea style={{
                                height: 60,
                                resize: 'none',
                        }}/>
                    </Container>

                    <Container width="500px">
                        <h1>輸入框(搜尋) Input.Search</h1>
                        <Input.Search/>

                        <h1>輸入框(密碼)Input.Password</h1>
                        <Input.Password/>

                        <h1>輸入框(單鍵輸入) Input.OTP</h1>
                        <Input.OTP length={8} size="small"/>
                    </Container>

                    <h1>輸入框(數字) InputNumber</h1>
                    <Container width="500px">
                        <h2>前綴 addonBefore= 後綴 addonAfter=</h2>
                        <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />

                        <h2>指定數值格式</h2>
                        <InputNumber formatter={(value) => `${value}%`}/>
                        <InputNumber formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>

                        <h2>數字 + - 間距</h2>
                        <InputNumber step={5}/>
                    </Container>                   
                    
                    <h2>onChange=... e.target.value </h2>
                    <h2>onPressEnter= onVisibleChange= onSearch= onStep=</h2>
                </Col>
            </Row>


            <hr/>

        </DefaultLayout>
    )
}
export default A003;