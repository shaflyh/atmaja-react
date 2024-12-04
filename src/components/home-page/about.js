import Link from 'next/link';
import Image from 'next/image';

function About() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-4 lg:max-w-[490px]`;
    const desc2 = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id="about" className="about-area md:pt-[150px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
                    <div className="about-content max-md:pt-10">
                        <h2 className={title}>About Us</h2>
                        <p className={desc}>
                            PT Atmaja Perkasa International specializes in
                            educational support and event management on both
                            national and international scales. We are committed
                            to enhancing education by fostering
                            university-student collaborations and managing
                            high-quality events, ensuring growth and innovation
                            in the education sector.
                        </p>
                        <p className={desc2}>
                            Our vision is to be recognized as a global leader
                            and trusted partner in advancing education and event
                            management, providing innovative solutions that
                            connect educational institutions with students
                            worldwide.
                        </p>
                        <Link href="/about">
                            <a className="boxed-btn text-[18px] leading-[30px]">
                                More About Us
                            </a>
                        </Link>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/1.jpg"
                            alt="Service Image"
                            width={390}
                            height={760}
                            quality={70}
                            layout="fixed"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
