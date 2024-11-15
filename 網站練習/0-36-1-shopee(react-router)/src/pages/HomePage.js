import React, { useContext, useState } from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import styled,{css} from 'styled-components';
import ClearFix from '../components/common/ClearFix.js';
import { Carousel } from 'antd';
import banner1 from '../images/banner/banner1.jpg';
import banner2 from '../images/banner/banner2.jpg';
import banner3 from '../images/banner/banner3.jpg';
import advertising from '../images/banner/advertising.png';
import {Link} from 'react-router-dom';
import ProductCard from "../components/product/ProductCard.js";
import AuthContext from "../components/auth/AuthContext.js";
import PopupModal from '../components/common/PopupModal.js';

// ------- 第一段banner (左側輪播,右側2塊小的) ------
const BannerBox = styled.div`
    display: flex;
    align-items: center;
    /* 問題:左右兩半的banner高度沒有對齊,我用align-item和下方<Image height={204}...>調整,但還是差一點點? 業界通常能允許這樣的誤差嗎? 應該怎麼寫才能完美對齊?*/
    flex-wrap: wrap;
    margin-bottom: 24px;
`;
const BannerCarouselContainer = styled.div`
    width: 100%;
    @media (min-width: 769px) {width: 66%};
    padding: 1px;
`;
const BannerSectionContainer = styled.div`
    width: 100%;
    @media (min-width: 769px) {width: 33%};
    padding: 1px;
`;
const BannerContainer = styled.div`
    width: 100%;
    padding: 1px;
`;
// ------- 商場三大特色 ------
const BannerFeatureContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    margin-bottom: 24px;
`;
const BannerFeatureColumn = styled.div`
    width: 33.33%;
`;
// ------- 廣告版幅 ------
const CustomerContainer = styled.div`
    margin-bottom: 48px;
`;
// ------- 商品卡 ------
const ProductCollectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px 48px -4px; 
    width: 100%;
`;
const ProductContainer= styled.div`
    width: 100%;
    padding: 4px;
    @media (min-width: 577px) {width:48%}
    @media (min-width: 769px) {width:18%}
    margin: auto auto;
`;

const Image = styled.img`
    width:100%;
    height: ${(props)=> props.height}px;
    background-image: ${(props)=> `url(${props.url})`};
    background-position: center;
    background-size: cover ; 
`;

const HomePage = () =>{
    const{isLoggined}=useContext(AuthContext) //註3
    return (
        <DefaultLayout fixedHeader>
        <ClearFix height="150px"/>  {/* 註2 */}
        <PopupModal/>
        {isLoggined && <h4>歡迎回來</h4> } {/*註3 */}
        <BannerBox>
            <BannerCarouselContainer>
                <Carousel autoplay>
                    <Link to ="/p001">
                        <Image url={banner1} height={204} />
                    </Link>
                    <Link to ="/p002">
                        <Image url={banner2} height={204} />
                    </Link>
                    <Link to ="/p003">
                        <Image url={banner3} height={204} />
                    </Link>
                </Carousel>
            </BannerCarouselContainer>
            <BannerSectionContainer>
                <BannerContainer>
                    <Link to ="/p005">
                        <Image url={banner1} height={100} />
                    </Link>
                </BannerContainer>
                <BannerContainer>
                    <Link to ="/p006">
                        <Image url={banner2} height={100} />
                    </Link>
                </BannerContainer>
            </BannerSectionContainer>
        </BannerBox>
        <BannerFeatureContainer>
            <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
            <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
            <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
        </BannerFeatureContainer>
        <CustomerContainer>
            <Link to="/advertising">
                <Image url={advertising} height={100} />
            </Link>    
        </CustomerContainer>
        <ProductCollectionContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner1" coverUrl={banner1} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner2" coverUrl={banner2} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner3" coverUrl={banner3} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>            
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner1" coverUrl={banner1} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner2" coverUrl={banner2} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner3" coverUrl={banner3} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner1" coverUrl={banner1} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner2" coverUrl={banner2} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner3" coverUrl={banner3} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner1" coverUrl={banner1} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner2" coverUrl={banner2} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner3" coverUrl={banner3} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner1" coverUrl={banner1} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner2" coverUrl={banner2} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to ="/p001" style={{textDecoration: "none"}}>
                    <ProductCard title="banner3" coverUrl={banner3} listPrices={[200,299]} salePrices={[100,200]}/>
                </Link>
            </ProductContainer>
        </ProductCollectionContainer>
    </DefaultLayout>
);
};
export default HomePage;