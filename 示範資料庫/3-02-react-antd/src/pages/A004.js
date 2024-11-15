import DefaultLayout from "../layout/DefautLayout";
import ClearFixed from "../components/common/ClearFixed";
import {Select,Radio,Checkbox,Space,Switch,Flex,TreeSelect,DatePicker,TimePicker,Row,Col,Button,Spin,Progress,Calendar } from 'antd';
import { Container } from "../components/common/Container";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import {useState} from 'react';


const A004 =()=>{

    //Select
    const countryOptions =[
        {label: 'China',value: 'china',emoji: '🇨🇳',desc: 'China (中国)'},
        {label: 'USA',value: 'usa',emoji: '🇺🇸',desc: 'USA (美国)'},
        {label: 'Japan',value: 'japan',emoji: '🇯🇵',desc: 'Japan (日本)'},
        {label: 'Korea',value: 'korea',emoji: '🇰🇷',desc: 'Korea (韩国)'},
    ]

    //TreeSelect
    const treeData = [
        {
          value: 'parent 1',
          title: 'parent 1',
          children: [{
              value: 'parent 1-0',
              title: 'parent 1-0',
              children: [
                {value: 'leaf1',title: 'leaf1'},
                {value: 'leaf2',title: 'leaf2'},
                {value: 'leaf3',title: 'leaf3'},
                {value: 'leaf4',title: 'leaf4'},
                {value: 'leaf5',title: 'leaf5'},
                {value: 'leaf6',title: 'leaf6'},
              ],
            },{
              value: 'parent 1-1',
              title: 'parent 1-1',
              children: [
                {value: 'leaf11',
                 title: (<b style={{color: '#08c'}}>leaf11</b>),
                },
              ],
            },
          ],
        },
    ];

    //Spin
    //若變數為true:顯示加載中圖示, false:會消失(停止顯示'加載中')
    const [loading,setLoading] = useState(false)

    // Calendar 
    //面板改變(年/月調動)就會print出YYYY-MM-DD
    const onPanelChange = (date) => {
        console.log(date.format('YYYY-MM-DD'));
    };

    return(
        <>
        <DefaultLayout fixedHeader>
            <ClearFixed height={"100px"}/>

            <hr/>
            <h1>單選 Radio</h1>
            <Container>
                <Radio>Radio</Radio>
                <h2>單選群組按鈕 Radio.Button</h2>
                <Radio.Group defaultValue="b" size="small">
                    <Radio.Button value="a">a</Radio.Button>
                    <Radio.Button value="b">b</Radio.Button>
                    <Radio.Button value="c">c</Radio.Button>
                </Radio.Group>
            </Container>

            <hr/>
            <h1>複選/核取方塊 Checkbox</h1>
            <Checkbox/>
            <h2>預設勾選defaultChecked 預設暫選indeterminate</h2>
            <Checkbox defaultChecked/>
            <Checkbox indeterminate/>
            <h2>禁用disabled </h2>
            <Checkbox defaultChecked={false} disabled />    
            <Checkbox indeterminate disabled />
            <Checkbox defaultChecked disabled />
            <h2>群組生成選項Check.Group(先定義選項const options 再options=)</h2>
            <h2>一鍵全選</h2>
            <h2>onChange=... e.target.checked</h2>

            <h1>下拉選單 Select</h1>
            <h2>尺寸size= small/default/large</h2>
            <h2>框線樣式variant= default(outlined)/filled/borderless</h2>
            <h2>主題色樣式status= default/error/warning</h2>
            <h2>預設選項defaultValue="_"</h2>
            <h2>way1:選項option= Array</h2>
            <h2>禁選disabled:true</h2>
            <Flex vertical gap="small">
                <Select
                    style={{width:120}} 
                    defaultValue="lucy"
                    options={[
                        {value:'jack', label:'Jack'},
                        {value:'lucy', label:'Lucy'},
                        {value:'disabled', label:'Disabled',disabled:true},
                    ]}
                />

                <h2>way2:選項 Select.Option </h2>
                <Select>
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="femal">Female</Select.Option>
                </Select>

                <h2>禁選disabled</h2>
                <Select 
                    style={{width:120}}
                    defaultValue="jack"
                    options={[{value:'jack', label:'Jack'}]}
                    disabled
                    size="small"
                />

                <h2>可搜尋選項showSearch optionFilterProp="label"</h2>
                <Select
                    showSearch
                    optionFilterProp="label"
                    style={{width:150}} 
                    placeholder="search person"
                    options={[
                        {value:'jack', label:'Jack'},
                        {value:'joyce', label:'Joyce'},
                        {value:'lucy', label:'Lucy'},
                        {value:'disabled', label:'Disabled',disabled:true},
                    ]}
                />

                <h2>多選mode="multiple"</h2>
                <h2>way3:顯示多種描述:先定義選項const options 再optionRender=</h2>

                <Select
                    mode="multiple"
                    placeholder="select one country"
                    style={{width:300}}
                    maxCount={3}
                    options={countryOptions}
                    optionRender={(option)=>(
                        <span>
                            {option.data.emoji} {option.data.desc}
                        </span>
                    )}
                />         

                <h2>多選 且可新增選項mode="tags"</h2>
                <h2>最多選擇5項maxCount=5</h2>
                <h2>3個以上的項目用'+1...'簡化表示</h2>
                <Select
                    mode="tags"
                    style={{width:300}} 
                    placeholder="select or input to add"
                    maxCount={5}
                    maxTagCount={3}
                    options={[
                        {value:'jack', label:'Jack'},
                        {value:'lucy', label:'Lucy'},
                        {value:'joyce', label:'Joyce'},
                        {value:'ryan', label:'Ryan'},
                        {value:'anne', label:'Anne'},
                        {value:'jenny', label:'Jenny'},
                        {value:'alice', label:'Alice'},
                    ]}
                />
            </Flex>

            <h2>隱藏已選擇的選項</h2>
            <h2>對選項進行分組</h2>
            <h2>設定tags選項顏色</h2>
            <h2>可新增選項</h2>
            <h2>選單展開位置placement=topLeft/topRight/bottomLeft/bottomRight</h2>
            <h2>複選個數上限 suffixIcon=</h2>
            <h2>onChange=... value</h2>
            <h2>onSearch=</h2>

            <hr/>
            <h1>樹狀下拉式選單 TreeSelect</h1>
            <h2>const treeData : value title children</h2>
            <TreeSelect
                style={{width:300}}
                treeData={treeData}
            />

            <hr/>
            <h1>級聯選擇 Cascader</h1>

            <hr/>
            <h1>切換開關 Switch</h1>
            <Container>
                <h2>尺寸size= 禁按disabled 加載中動畫(禁按狀態)loading</h2>
                <Space>
                    <Switch/>
                    <Switch disabled/>
                    <Switch size="small" loading/>
                </Space>

                <h2>設定顯示文字checkedChildren="_" unCheckedChildren="_"</h2>
                <h2>預設開啟defaultChecked</h2>
                <Space>
                    <Switch checkedChildren="開" unCheckedChildren="關" defaultChecked/>
                    <Switch 
                        checkedChildren={<CheckOutlined/>}
                        unCheckedChildren={<CloseOutlined/>}
                    />
                </Space>
                <h2>onChange=... checked</h2>
                <h2>onClick=</h2>
            </Container>

            <hr/>
            <h1>日期選擇器 DatePicker</h1>
            <Space>
                <DatePicker />
                <DatePicker picker="month" size='small' />
                <DatePicker picker="year"/>
                <DatePicker picker="week"/>
                <DatePicker.RangePicker picker="month"/>
            </Space>
            
            <Container width="500px">
                <DatePicker 
                    multiple
                    maxTagCount="responsive"                        
                />
            </Container>


            <h1>時間選擇器 DatePicker</h1>            
            <TimePicker />

            <hr/>
            <h1>日曆 Calender</h1>
            <pre>{`
由父層容器決定尺寸 ; 
fullscreen={false}
onPanelChange={指定 年-月-日 格式}
onSelect={回傳選擇的日期}
            `}</pre>
            <Container width="300px">
                <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
            </Container>

            <hr/>
            <h1>上傳附件 Upload</h1>

            <hr/>
            <h1>進度條 Progress</h1>
            <h4>常應用於:顯示表單填寫完成度</h4>
            <Row gutter={8}>
                <Button onClick={()=>{setLoading(preValue=>!preValue)}}>Toggle Spinning</Button>

                {/* memo2 Spin載入圖示:設定button監聽點擊事件,啟動function切換變數值*/}
                <Col span={2}>
                    <p>Spin</p>
                    <Spin spinning={loading}></Spin>
                </Col>

                {/* memo3 Loading時,spin圖示會覆蓋文字區域*/}
                <Col span={3}>
                    <p>Spin text</p>
                    <Spin spinning={loading}>
                        <p>Text1</p>
                        <p>Text2</p>
                        <p>Text3</p>
                    </Spin>
                </Col>

                {/* memo4 Progress進度條*/}
                <Col span={4}>
                    <p>Progress type='line'</p>
                    <Progress 
                        type='line'
                        percent={33} 
                        status='active' //動畫效果
                        strokeColor='red' 
                        strokeWidth={5} //粗細程度
                    />
                    <Progress 
                        type='line'
                        percent={100} 
                        status='success'
                        strokeColor='green' 
                        strokeWidth={5}
                    />
                    <Progress 
                        type='line'
                        steps={10}
                        percent={50} 
                        strokeColor='blue' 
                        strokeWidth={5}
                    />

                    <p>Progress type='circle'</p>
                    <Flex gap="small" wrap>
                        <Progress
                            type='circle'
                            percent={50}
                            status='exception' //exception顯示打叉
                            strokeColor='red'
                            strokeWidth={10}
                            size={80} 
                        />
                        <Progress 
                            type='circle'
                            percent={100} 
                            status='success' //顯示進度已完成(打勾)
                            strokeColor='green' 
                            strokeWidth={10}
                            size={50}
                        />
                    </Flex>

                </Col>
                </Row>


            
        </DefaultLayout>
        </>
    )
}
export default A004;