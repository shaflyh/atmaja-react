import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import SwiperComps, { Slide } from '../swiper';

// Tailwind Related Stuff
const heroImage = `relative w-full h-[100vh] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 before:z-[1] before:pointer-events-none overflow-hidden`;
const heroContent = `absolute sm:w-[calc(100%_-_100px)] left-auto top-1/2 transform translate-y-[-50%] z-[2]`;

function HeroOne({ heroItems, settings }) {
    settings = {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: { clickable: true, type: 'bullets' },
        navigation: false,
        slidesPerView: 1,
        spaceBetween: 0,
    };

    return (
        <SwiperComps sliderCName="hero-area" settings={settings}>
            {heroItems?.map((heroItem) => (
                <Slide className="hero-item" key={heroItem.id}>
                    <div className={heroImage}>
                        <Image
                            src={heroItem?.image}
                            alt={heroItem?.title}
                            layout="fill"
                            objectFit="cover"
                            quality={70}
                            priority
                        />
                    </div>
                    <div className="container custom-container">
                        <div className={heroContent}>
                            <div className="grid grid-cols-12 hero-inner">
                                <div className="col-span-12 md:col-span-10">
                                    <div
                                        className="text-[18px] ml-2 leading-8 tracking-[5px] text-white uppercase md:mb-[30px] mb-[10px] block hero-slidedown delay-300"
                                        dangerouslySetInnerHTML={{
                                            __html: heroItem?.heroCategory,
                                        }}
                                    />
                                    <h2
                                        className="md:text-[90px] md:leading-[100px] text-[50px] leading-[1.2] text-white mb-[90px] hero-slidedown delay-[600ms]"
                                        dangerouslySetInnerHTML={{
                                            __html: heroItem?.heroTitle,
                                        }}
                                    />
                                    <div className="hero-slidedown delay-[1200ms]">
                                        <Link href={heroItem?.link}>
                                            <a className="boxed-btn text-[18px] leading-[30px]">
                                                Learn More
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mouse-btn-wrap absolute bottom-[30px] left-1/2 -translate-x-1/2">
                        <Link href="#about" passHref>
                            <ul className="mouse-btn-down">
                                <li className="chevron animate-move" />
                                <li className="chevron animate-move2" />
                                <li className="chevron animate-move3" />
                            </ul>
                        </Link>
                    </div>
                </Slide>
            ))}
        </SwiperComps>
    );
}

HeroOne.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HeroOne;
