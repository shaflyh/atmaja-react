import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function Commisioner({ services }) {
    return (
        <div className="service-area md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]">
            <div className="container max-w-full lg:pl-[70px] lg:pr-0">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
                    <div className="lg:col-span-6 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]">
                        <div className="service-content xl:w-[490px] w-full ml-auto">
                            <h2 className="title text-black lm:text-[42px] lm:leading-[50px] text-[32px] mb-4">
                                Mission and Vision
                            </h2>
                            <h2 className="mb-2 text-2xl text-black title">
                                Mission
                            </h2>
                            <span className="sub-title text-secondary text-base mb-[25px] block">
                                To be a global leader and trusted partner in
                                advancing education and event management across
                                all fields, providing innovative solutions that
                                connect educational institutions with students
                                while ensuring the successful and seamless
                                management of academic and professional events.
                            </span>
                            <h2 className="mb-2 text-2xl text-black title">
                                Vision
                            </h2>
                            <span className="sub-title text-secondary text-base mb-[25px] block">
                                To support universities both internationally in
                                associating and international students.
                            </span>
                            <span className="sub-title text-secondary text-base mb-[25px] block">
                                To provide innovative educational support
                                solutions that enhance the experience and
                                success of educational institutions and students
                                alike.
                            </span>
                            <span className="sub-title text-secondary text-base mb-[25px] block">
                                To offer and deliver professional and efficient
                                management services for events includes
                                academics and non-academics.
                            </span>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="service-image flex justify-end w-full lg:h-full h-[300px] relative">
                            <Image
                                src="/images/team/Photo-Yusli.png"
                                alt="Service Image"
                                quality={100}
                                layout="fill"
                                objectFit="contain"
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

Commisioner.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
};

export default Commisioner;
