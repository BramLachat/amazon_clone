import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product
                    id="12321341"
                    title="Anker Soundcore Life Q20 Hybrid Active Noise Cancelling Headphones"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61fU3njgzZL._AC_UY218_.jpg"
                />
                <Product
                    id="12321342"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD"
                    price={445.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321343"
                    title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape"
                    price={109.35}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
                />
                <Product
                    id="12321344"
                    title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                    price={233.65}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
                />
                <Product
                    id="12321345"
                    title="Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)"
                    price={799.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61vflt1U5gL._AC_UY218_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
