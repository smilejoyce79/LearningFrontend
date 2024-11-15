import {React, useState, useEffect} from 'react';
import {imgSrc} from './config';
import { 
Layout, Calendar, Button, Form, Input, InputNumber, Divider, Image, Row, Col, Progress
} from 'antd';

const { Header } = Layout;

const headerStyle = { color:'#FFFFFF'}

const layout = {
    labelCol: {   //表單欄位名稱 寬度所佔格數
      span: 8,
    },
    wrapperCol: {  //表單輸入格 寬度所佔格數
      span: 12,
    },
  };

// form欄位填寫若不符合rule會跳出的提醒文字
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
 
const columnStyle = {
    padding:'10px',
}

const centerStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

function App(){

    const onFinish = (values) => {
        console.log(values);
    };

    // 設定progress的填寫完成度百分比: if元素有值(true)則 變數result +25%
    const onFieldsChange = (changedFields, allFields) => {
        let result = 0
        allFields.forEach((element)=>{
            if (element.value) result+=25
        })
        setPercent(result) 
    }
    const [percent,setPercent] = useState(0)

    //註1 用Form裡面的setFieldsValue 設定表單輸入格的預設文字
    //使用情境:若已登入會員,就從後端get資料自動填入
    const [form] = Form.useForm()
    useEffect(()=>{
        form.setFieldsValue({
            user:{
                name: 'JC',
                email: 'abc@gmail.com',
            }
        })
    },[])

    return(
    <div>
        <Header style={headerStyle}>餐廳訂餐系統</Header>
        <Image src={imgSrc} preview={false} width="100%"/> 
        <Divider orientation="left" >請選擇日期</Divider>
        <Calendar fullscreen={false}/>
        <Divider orientation="left" >請填寫資訊</Divider>

        {/* 用格線系統布局各佔一半(RWD尺寸變小:則上下排列) */}
        <Row>
            {/* 填寫進度條 */}
            <Col xs={24} md={12} style={{...columnStyle,...centerStyle}}>
                <Progress type="circle" percent={percent} size={320}/>
            </Col>

            {/* 填寫表單欄位 */}
            <Col xs={24} md={12} style={columnStyle}>
                <Form
                    form = {form} //註1
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    onFieldsChange={onFieldsChange}
                    on
                    style={{
                        maxWidth: 600,
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['user', 'name']} label="Name" rules={[
                            {
                            required: true, //必填
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" 
                        rules={[ {required: true, type: 'email'}, ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="people" 
                        rules={[ {required: true, type: 'number', min: 1, max: 99}, ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'comment']} label="Comment" 
                        rules={[{required: true}]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        {/* 若disabled=true 則submit按鈕呈現灰色(不能按) */}
                        <Button type="primary" htmlType="submit" disabled={percent != 100}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </div>
    );
}

export default App;