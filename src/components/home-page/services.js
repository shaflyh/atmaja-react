import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function Services({ services }) {
    return (
        <div className="service-area md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]">
            <div className="container max-w-full lg:pl-[70px] lg:pr-0">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
                    <div className="lg:col-span-6 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]">
                        <div className="service-content xl:w-[490px] w-full ml-auto">
                            <h2 className="title text-black lm:text-[42px] lm:leading-[50px] text-[32px] mb-4">
                                Our Programs
                            </h2>
                            <span className="sub-title text-secondary text-base mb-[25px] block">
                                We offer a comprehensive suite of programs and
                                services designed to advance education and
                                ensure seamless event execution.
                            </span>
                            <div className="fixed-md:grid fixed-md:grid-cols-2 grid max-md:gap-[25px]">
                                {services?.map((service) => {
                                    const Icon = AiIcons[service?.icon];
                                    return (
                                        <div
                                            className="service-box"
                                            key={service?.title}
                                        >
                                            <div className="service-box-inner">
                                                <div className="service-list">
                                                    <div className="icon">
                                                        <Icon />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">
                                                            <Link href="/projects">
                                                                <a className="hover:underline">
                                                                    {
                                                                        service?.title
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <p className="desc">
                                                            {service?.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="service-image flex justify-end w-full lg:h-full h-[679px] relative">
                            <Image
                                src="/images/service/service-img.jpg"
                                alt="Service Image"
                                quality={70}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-slidedown delay-[1200ms]">
                <Link href="/">
                    <a className="boxed-btn text-[18px] leading-[30px]">
                        Learn More
                    </a>
                </Link>
            </div>
        </div>
    );
}

Services.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
};

export default Services;
