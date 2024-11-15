import DefaultLayout from "../layout/DefautLayout";
import ClearFixed from "../components/common/ClearFixed";
import {Container} from "../components/common/Container";
import { Form, Input, Select, Checkbox, Row, Col, Button, message} from "antd";
import styled from "styled-components";
import { useState } from "react";

const MyaTag =styled.a`
    border: none;
    color: blue;
    text-decoration: underline;
`

const A005 =()=>{

    const [showAlert,setShowAlert] = useState(false)
    const onFinish =(e)=>{
        console.log(e)
        //或改成下列寫法, 過濾掉password的值, 使密碼不會被顯示在console控制台
        // const {password, ...otherFields} =e;
        // console.log(otherFields);

        setTimeout(()=>{
            message.success('已成功送出')
            setShowAlert(true)
        },500)
    }

    return(
        <>
        <DefaultLayout fixedHeader>
            <ClearFixed height={"100px"}/>
            <h1>表單Form</h1>

            <Container>
                <Row>
                    <Col span={14}>
                        <Form
                            labelCol={{span:14}}
                            wrapperCol={{span:18}}
                            labelAlign="left"
                            size='large'
                            variant='filled'
                            layout='vertical'
                            onFinish={onFinish}
                        >                
                            <Form.Item label="User Name(必填,不可只輸入空白鍵)" name="username"
                                rules={[
                                    {whitespace:true,
                                     message:'不可只有輸入空白鍵'
                                    },{
                                     required:true,
                                     message:'此為必填欄位'
                                    }
                                ]}
                            >
                                <Input placeholder="required input"/>
                            </Form.Item>

                            <Form.Item label="User Name2" name="username2">
                                <Input placeholder="disabled input" disabled/>
                            </Form.Item>
                            
                            <Form.Item label="Password(必填,至少6字元,須包含字母'A')" name="password"
                                rules={[
                                    {min:6,
                                     message:'至少6字元以上'
                                    },{
                                     required:true,
                                     message:'此為必填欄位'
                                    },{
                                     validator:(_,value)=>
                                        value && value.includes('A') ? Promise.resolve() : Promise.reject('密碼必須含有大寫A')
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder="input.password"/>
                            </Form.Item>
                            
                            <Form.Item label="ConfirmPassword" name="confirmPassword" 
                                dependencies={['password']}
                                rules={[
                                    {required:true,
                                     message:'此為必填欄位'
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                          if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject(new Error('再次輸入的密碼與原設定不一致'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="input.password dependencies="/>
                            </Form.Item>
                            
                            <Form.Item label="Gender" name="gender">
                                <Select style={{width:'100%'}}>
                                    <Select.Option value="male">Male</Select.Option>
                                    <Select.Option value="female">Female</Select.Option>                        
                                </Select>
                            </Form.Item>
                            
                            <Form.Item label="Email" name="email"
                                rules={[
                                    {type:'email',
                                     message:'須符合email標準格式'
                                    }
                                ]}
                            >
                                <Input placeholder="xxx@___.___"/>
                            </Form.Item>
                            
                            <Form.Item label="Website" name="website"
                                rules={[
                                    {type:'url',
                                     message:'須符合標準網址格式'
                                    }
                                ]}
                            >
                                <Input placeholder="//___.___"/>
                            </Form.Item>
                            
                            <Form.Item name="agreement"
                                valuePropName="checked"
                                rules={[{
                                        validator:(_, checked) =>
                                        checked ? Promise.resolve() : Promise.reject(new Error('必須勾選同意'))
                                    }
                                ]}
                            >
                                <Checkbox>
                                    {' '}
                                    Agree to our <MyaTag href="#!" target="_blank">Terms and Conditions</MyaTag>
                                </Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>送出</Button>
                            </Form.Item>

                        </Form>
                    </Col>
                    <Col span={10}>
<pre>{`
外顯欄位名稱label=
電腦儲存值的名稱變數name=
排列方向垂直/水平layout="vertical/horizontal"

欄位名稱寬度labelCol=span: ,offset=
輸入欄位寬度wrapperCol=span: ,offset=
(span寬度佔比, offset推移)
欄位名稱定位labelAlign="left/right"
尺寸size= small/ middle/ large
外框樣式variant= outlined/ borderless/ filled

rule={[
    輸入類型 type:"email/url/"
    至少6字元以上 min:6
    限制不可只有輸入空白鍵 whitespace:true (同時需有required設定)
    必填 required: true
    輸入不合法的提示訊息 message:
    密碼規則,必須有值,必須包含'A'
        validator:(_,value)
        value.includes('A')
        ? Promise.resolve()
        ? Promise.reject('輸入不合法的提示訊息')
    僅提醒仍可提交warningOnly: true
]}
顯示錯誤/正確icon圖示 hasFeedback

連帶關係 dependencies=

必填required
禁用disabled
欄位名稱太長換行labelwrap

記住上次填寫的內容 initialValues= {remember:true}
自動依上次記錄填寫 autoComplete="off"
成功提交後執行 onFinish=... values
提交失敗後執行 onFinishFailed=... errorInfo

.useForm 使欄位有連帶關係(ex.選A自動帶入B欄位,選C才會出現D欄位)

布局排列:垂直/水平/單行接續


`}</pre>
                    </Col>
                </Row>

            </Container>
            <hr/>
        </DefaultLayout>
        </>
    )
}
export default A005;