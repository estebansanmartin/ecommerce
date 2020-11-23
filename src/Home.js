import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <div className="home_container">
                <img
                    className="home_image"
                    src="https://cdn.pixabay.com/photo/2018/08/29/17/07/ecommerce-3640321_960_720.jpg"
                    alt="home-amazon"
                />

            <div className="home_row">
                <Product
                    id="1232342"
                    title="Occhiali VR 3D Visore Realta Virtuale"
                    price={25.48}
                    rating={5}
                    image="https://cdn.pixabay.com/photo/2016/05/13/00/35/virtual-reality-1389032_960_720.jpg"
                />
                <Product
                    id="1232342"
                    title="Apple MacBook Pro 2.3GHz Intel Core i5 di settima generazione 13.3 2560 x 1600Pixel"
                    price={975.00}
                    rating={5}
                    image="https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_960_720.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="1232342"
                    title="Apple MQAF2ZD/A iPhone X - Smartphone 14.7 cm. (256 GB, 12 MP, iOS, 11, SIM singola), Grigio (Space Grey)"
                    price={515.54}
                    rating={5}
                    image="https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="1232342"
                    title="PS4 - 500 GB F Chassis, Black"
                    price={243.92}
                    rating={5}
                    image="https://cdn.pixabay.com/photo/2017/05/19/14/09/ps4-2326616_960_720.jpg"
                />
                <Product
                    id="1232342"
                    title="Smartwatch Fitness, Smart Watches Impermeabile IP68 con Cardiofrequenzimetro da Polso&Monitor Del Sonno"
                    price={23.99}
                    rating={5}
                    image="https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639_960_720.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="1232342"
                    title="Fotocamera Digitale 24MP con Obiettivo XF18-55mm F2.8-4 R LM OIS, Sensore CMOS X-Trans III APS-C, Schermo LCD Touchscreen, Orientabile, Filmati 4K"
                    price={654.96}
                    rating={5}
                    image="https://cdn.pixabay.com/photo/2015/11/21/15/29/photo-1055066_960_720.jpg"
                />
            </div>
        </div>
    </div>
    )
}

export default Home
