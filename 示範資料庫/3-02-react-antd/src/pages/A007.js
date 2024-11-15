import DefaultLayout from "../layout/DefautLayout";
import ClearFixed from "../components/common/ClearFixed";
import React, { useEffect, useState } from "react";
import{Row,Col} from 'antd';
import{Table} from 'antd';
import axios from 'axios';

//從API placeholder請求資料,代入Table樣式呈現
//memo2 加上loading效果,使table內容尚在加載時會顯示spin圖示
//memo3 設定可切換'分頁'及'每頁顯示筆數'的功能
//memo4 加上'排序'功能
//memo5 加上'篩選'功能
const A007 =()=>{

    const [dataSource,setDataSource] = useState([])
    //memo2
    const [loading,setLoading] = useState([])
    //memo3
    const [page,setPage] = useState(1)
    const [pageSize,setPagesize] = useState(10)

    // Way2: Fetch
    // useEffect(()=>{
    //     setLoading(true) //memo2
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response=>response.json()) //解析json文件
    //     .then(data=>{   //取值成功,改變狀態
    //         setDataSource(data)
    //     }).catch(err=>{  //取值失敗,顯示錯誤
    //         console.log(err)
    //     }).finally(()=>{  //取值完成,改變狀態
    //         setLoading(false) //memo2
    //     })
    // },[])

    // Way1: axios

    useEffect(()=>{
        setLoading(true) //memo2
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function(response){
            console.log(response);
            const data = response.data; 
            setDataSource(data);
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function(){ 
            setLoading(false)  //memo2
        })
    }, [])


    // 欄位標題
    const columns = [
        {
            key:'1',
            title:'ID',
            dataIndex:'id' //API json原始資料的key
        },{
            key:'2',
            title:'User ID',
            dataIndex:'userId',
            sorter:(a,b)=>{
                return a.userId > b.userId //memo4 依userId的value大小排序
            }
        },{
            key:'3',
            title:'Status',
            dataIndex:'completed',
            render: (completed)=>{
                return <p>{completed ? 'ok':'not yet'}</p>
            },
            //memo5
            filters:[  //設定篩選器的選單
                {text:'ok', value:true},  //篩選'ok'代表json原始資料的completed值為true的
                {text:'not yet', value:false} //篩選'not yet' =原始json檔的completed值為false的
            ],
            onFilter:(value,c)=>{  //篩選條件,若json原始資料的completed值符合上述設定的value條件才顯示
                return c.completed === value
            }
        },
    ]

    return(
        <>
        <DefaultLayout fixedHeader>
            <ClearFixed height={"100px"}/>
                <Row>
                    <Col span={10}>
                        <Table
                            columns={columns}
                            dataSource={dataSource}
                            loading={loading} //memo2
                            size="small"
                            //memo3
                            pagination={{
                                current:page, //預設停在哪個頁次
                                pageSize:pageSize, //預設每頁顯示筆數
                                total:300, //此範例json原始資料只有200筆,將表格強制拓展成有300筆的空間(多餘的頁次會顯示'No data')
                                onChange:(page,pageSize)=>{ //使變數 隨著滑鼠點擊切換
                                    setPage(page);
                                    setPagesize(pageSize)
                                }
                            }}
                        >
                        </Table>
                    </Col>
                </Row>
        </DefaultLayout>
        </>
    )
}
export default A007;