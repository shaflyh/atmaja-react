import Link from 'next/link';
import Image from 'next/image';

function CompanyProfile() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-md leading-[25px] text-secondary mb-4 lg:max-w-[490px]`;
    const desc2 = `text-md leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id="about" className="about-area md:pt-[150px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
                    <div className="about-content max-md:pt-10">
                        <h2 className={title}>About Us</h2>
                        <p className={desc}>
                            Atmaja Perkasa International is a leading company
                            specializing in advancing educational support
                            services and event organization, both nationally and
                            internationally. We are committed to advancing
                            education by offering a range of services that
                            facilitate collaboration between universities and
                            students worldwide, as well as manage high-quality
                            academic and non-academic events, while also
                            managing a variety of high-quality professional
                            events.
                        </p>
                        <p className={desc2}>
                            Our expertise in organizing educational programs and
                            events ensures a seamless experience that fosters
                            growth and innovation in the educational sector.
                        </p>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src="/images/team/Photo-Saufi.png"
                            alt="Service Image"
                            width={390}
                            height={600}
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

export default CompanyProfile;
