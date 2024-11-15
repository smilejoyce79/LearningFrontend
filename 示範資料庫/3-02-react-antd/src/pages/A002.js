import React from "react";
import DefaultLayout from "../layout/DefautLayout";
import { Row, Col, Flex, Space, Button, Input } from 'antd';
import { Container } from "../components/common/Container";
import ClearFixed from "../components/common/ClearFixed";
import styled from "styled-components";

const ColColor = {
    border: '0.5px solid blue',
}
const StyledBox = styled.div`
    height: 40px;
    width: 50px;
    background-color: orange;
    text-align: center;
    line-height: 40px;
`

const A002 =()=>{
    return(
        <DefaultLayout fixedHeader>
            <ClearFixed height={"100px"}/>

            <h1>格線系統 GridSystem (Row, Col)</h1>
            <h2>Col 24等分佔比 span=</h2>
            <Container>
                <Row>
                    <Col span={24} style={ColColor}>col-24</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col span={12} style={ColColor}>col-12</Col>
                    <Col span={12} style={ColColor}>col-12</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col span={8} style={ColColor}>col-8</Col>
                    <Col span={8} style={ColColor}>col-8</Col>
                    <Col span={8} style={ColColor}>col-8</Col>
                </Row>
            </Container>

            <h2>Col RWD sm=24 md=8 lg=4</h2>
            <Container>
                <Row>
                    <Col sm={24} md={8} lg={4} style={ColColor}>col</Col>
                    <Col sm={24} md={8} lg={4} style={ColColor}>col</Col>
                    <Col sm={24} md={8} lg={4} style={ColColor}>col</Col>
                    <Col sm={24} md={8} lg={4} style={ColColor}>col</Col>
                    <Col sm={24} md={8} lg={4} style={ColColor}>col</Col>
                    <Col sm={24} md={8} lg={4} style={ColColor}>col</Col>
                </Row>
            </Container>

            <Row>
                <Col span={6}>
                    <h2>Row 水平定位 justify=</h2>
                    <Container>
                        <span>start</span>
                        <Row justify="start">
                            <Col span={4} style={ColColor}><StyledBox></StyledBox></Col>
                        </Row>
                    </Container>
                    <Container>
                        <span>center</span>
                        <Row justify="center">
                            <Col span={4} style={ColColor}><StyledBox></StyledBox></Col>
                        </Row>
                    </Container>
                    <Container>
                        <span>end</span>
                        <Row justify="end">
                            <Col span={4} style={ColColor}><StyledBox></StyledBox></Col>
                        </Row>
                    </Container>
                    <Container>
                        <span>space-between</span>
                        <Row justify="space-between">
                            <Col span={4} style={ColColor}><StyledBox></StyledBox></Col>
                            <Col span={4} style={ColColor}><StyledBox></StyledBox></Col>
                        </Row>
                    </Container>
                    <Container>
                        <span>space-evenly</span>
                        <Row justify="space-evenly">
                            <Col span={4} style={ColColor}><StyledBox></StyledBox></Col>
                            <Col span={4} style={ColColor}><StyledBox></StyledBox></Col>
                        </Row>
                    </Container>
                </Col>
                <Col span={6}>
                    <h2>Row 垂直定位 align=</h2>
                    <Container>
                        <span>middle</span>
                        <Row align="middle" style={{height:'70px'}}>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'30px'}}></StyledBox> </Col>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'50px'}}></StyledBox> </Col>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'20px'}}></StyledBox> </Col>
                        </Row>
                    </Container>
                    <Container>
                        <span>top</span>
                        <Row align="top" style={{height:'70px'}}>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'30px'}}></StyledBox> </Col>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'50px'}}></StyledBox> </Col>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'20px'}}></StyledBox> </Col>
                        </Row>
                    </Container>
                    <Container>
                        <span>bottom</span>
                        <Row align="bottom" style={{height:'70px'}}>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'30px'}}></StyledBox> </Col>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'50px'}}></StyledBox> </Col>
                            <Col span={4} style={ColColor}> <StyledBox style={{height:'20px'}}></StyledBox> </Col>
                        </Row>
                    </Container>
                </Col>
                <Col span={10}>
                    <h2>Row gutter=[水平間距,垂直間距] <small>(不是col,是col內的物件)</small></h2>
                    <Container>
                        <p>gutter=[0,0]</p>
                        <Row gutter={[0,0]}>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                        </Row>
                        <p>gutter=[8,0]</p>
                        <Row gutter={[8,0]}>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                        </Row>
                        <p>gutter=[16,0]</p>
                        <Row gutter={[16,0]}>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                            <Col span={4} style={ColColor}> <StyledBox/> </Col>
                        </Row>
                        <p>gutter=[0,8]</p>
                        <Row gutter={[0,8]}>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                        </Row>
                        <p>gutter=[0,24]</p>
                        <Row gutter={[0,24]}>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                            <Col span={8} style={ColColor}> <StyledBox/> </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <h2>Row wrap= false <small>就算超過容器,也「不換行」</small></h2>
            <Container width="500px" height="50px">
                <Row wrap={false}>
                    <Col span={10} style={ColColor}> <StyledBox/> </Col>
                    <Col span={10} style={ColColor}> <StyledBox/> </Col>
                    <Col span={10} style={ColColor}> <StyledBox/> </Col>
                    <Col span={10} style={ColColor}> <StyledBox/> </Col>
                </Row>
            </Container>
            <hr/>
            <h1>Flex浮動排版</h1>
            <Row>
                <Col span={6}>
                    <h2>Flex預設</h2>
                    <Container height="90px">
                        <Flex>
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                    </Container>

                    <h2>水平定位 justify=</h2>
                    <Container>
                        <span>center</span>
                        <Flex justify="center">
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                        <span>flex-end</span>
                        <Flex justify="flex-end">
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                        <span>flex-start</span>
                        <Flex justify="flex-start">
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                        <span>space-between</span>
                        <Container height="50px">
                            <Flex justify="space-between">
                                <StyledBox>1</StyledBox>
                                <StyledBox>2</StyledBox>
                                <StyledBox>3</StyledBox>
                            </Flex>
                        </Container>
                        <span>space-evenly</span>
                        <Flex justify="space-evenly">
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                    </Container>
                </Col>
                <Col span={6}>
                    <h2>vertical 方向改"垂直"排列</h2>
                    <Container>
                        <Flex vertical>
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                    </Container>

                    <h2>垂直定位 align=</h2>
                    <Container>
                        <span>center</span>
                        <Container height="130px">
                            <Flex vertical align="center">
                                <StyledBox>1</StyledBox>
                                <StyledBox>2</StyledBox>
                                <StyledBox>3</StyledBox>
                            </Flex>
                        </Container>
                        <span>flex-end</span>
                        <Container height="130px">
                            <Flex vertical align="end">
                                <StyledBox>1</StyledBox>
                                <StyledBox>2</StyledBox>
                                <StyledBox>3</StyledBox>
                            </Flex>
                        </Container>
                        <span>flex-start</span>
                        <Container height="130px">
                            <Flex vertical align="start">
                                <StyledBox>1</StyledBox>
                                <StyledBox>2</StyledBox>
                                <StyledBox>3</StyledBox>
                            </Flex>
                        </Container>
                    </Container>
                </Col>
                <Col span={6}>
                    <h2>間距 gap= </h2>
                    <Container>
                        <span>large</span>
                        <Flex gap="large">
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                        <span>middle</span>
                        <Flex gap="middle">
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                        <span>small</span>
                        <Flex gap="small">
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                    </Container>

                    <h2>換行 wrap </h2>
                    <span>(預設會壓縮width塞滿;加上"wrap"變成超過的部分換行)</span>
                    <Container width="100px">
                        <Flex>
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                    </Container>
                    <Container width="100px">
                        <Flex wrap>
                            <StyledBox>1</StyledBox>
                            <StyledBox>2</StyledBox>
                            <StyledBox>3</StyledBox>
                        </Flex>
                    </Container>
                </Col>
            </Row>
            <hr/>
            <h1>間距 Space</h1>
            <span>可對inline排列 (而Flex主要是對box/inline-box排列)</span>
            <Row>
                <Col span={4}>
                    <h2>Space預設</h2>
                    <Container>
                        <Space>
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Button>Box</Button>
                        </Space>
                    </Container>
                    <h2>換行 wrap</h2>
                    <Container>
                        <Space wrap>
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Button>Box</Button>
                        </Space>
                    </Container>
                    <h2>合併邊框 compact</h2>
                    <Container width="500px">
                        <Space.Compact>
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Input style={{width:'100px'}} placeholder="input"></Input>
                        </Space.Compact>
                        {` `}
                        <Space.Compact direction="vertical">
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Button>Box</Button>
                            <Input style={{width:'100px'}} placeholder="input"></Input>
                        </Space.Compact>
                    </Container>

                </Col>

                <Col span={6}>
                    <h2>方向 direction="vertical"</h2>
                    <Container>
                        <Space direction="vertical">
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                        </Space>
                    </Container>
                </Col>
                <Col span={6}>
                    <h2>間距 size= </h2>
                    <span>large</span>
                    <Container>
                        <Space size="large">
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                        </Space>
                    </Container>
                    <span>middle</span>
                    <Container>
                        <Space size="middle">
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                        </Space>
                    </Container>
                    <span>small(預設)</span>
                    <Container>
                        <Space size="small">
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                            <StyledBox>Box</StyledBox>
                        </Space>
                    </Container>
                </Col>
                <Col span={6}>
                    <h2>垂直定位 align=</h2>
                    <span>center</span>
                    <Container>
                        <Space align="center">
                            <Button type="primary">Primary</Button>
                            <span>Block</span>
                        </Space>
                    </Container>
                    <span>start</span>
                    <Container>
                        <Space align="start">
                            <Button type="primary">Primary</Button>
                            <span className="mock-block">Block</span>
                        </Space>
                    </Container>
                    <span>end</span>
                    <Container>
                        <Space align="end">
                            <Button type="primary">Primary</Button>
                            <span className="mock-block">Block</span>
                        </Space>
                    </Container>
                </Col>
            </Row>

            <h1>頁面切版配置 Layout</h1>
            <pre>{`
提供已const樣式的 Header, Content, Footer, Sider 容器，可用 JSX 的方式直接套用
            `}</pre>

        </DefaultLayout>
    )
}
export default A002;