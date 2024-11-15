import React,{useEffect, useState} from "react";
import { Modal } from "antd";
import banner1 from '../../images/banner/banner1.jpg';
import { Link } from "react-router-dom";

const PopupModal = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const eventProductId = 'p003';
    const timeLimit = 3000; //或設定1天: 24*60*60*1000
    
    useEffect(() => {
        const popupHistory = localStorage.getItem('shopee:popup.history');  
        const popupTimestamp = localStorage.getItem('shopee:popup.timestamp');
        const now = new Date().getTime(); // 當前的時間戳

        if (!popupHistory || !popupTimestamp || now - popupTimestamp > timeLimit) {
            setIsModalOpen(true);  // 如果沒有存取記錄or距離上次關閉Modal的時間超過timeLimit設定秒數:顯示 Modal 
        }
    }, []);

    const handleCloseModal = () => {
        // 關閉 Modal 並記錄當前時間戳到 localStorage
        setIsModalOpen(false); 
        const now = new Date().getTime(); // 當前的時間戳
        localStorage.setItem('shopee:popup.history', eventProductId);// 設定活動記錄
        localStorage.setItem('shopee:popup.timestamp', now);  // 記錄關閉 Modal 的時間

        //way2: 因一個物件裡存取多個變數,需加上JSON.srtingify確保資料型態為字串
        // const history = {
        //     time: Date.now(),  //時間戳
        //     productId: eventProductId 
        // }
        // localStorage.setItem('shopee:popup.history',JSON.stringify(history));
    };

    return(
            <Modal 
                title="Modal" 
                open={isModalOpen} 
                onOk={()=>setIsModalOpen(false)} 
                onCancel={handleCloseModal}
                footer={null}
            >
                <Link to={`/${eventProductId}`}>
                    <img src={banner1} width={450} alt={`${eventProductId}-event`}/>
                </Link>
            </Modal>
    )
}

export default PopupModal;
/*
    useEffect(()=>{
        const popupHistory = localStorage.getItem('shopee:popup.history')
        console.log(popupHistory)
        if (!popupHistory){
            localStorage.setItem('shopee:popup.history',eventProductId) //('key','value')
        } else {
            setIsModalOpen(false)
        }
    },[]);
*/