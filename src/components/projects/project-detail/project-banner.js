import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

function ProjectBanner({ title, excerpt, image, registerLink }) {
    return (
        <div className="relative project-banner">
            <div className="image relative w-full lg:h-[980px] h-[550px] before:absolute before:bg-black before:opacity-40 before:w-full before:h-full before:z-[1]">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                />
            </div>
            <div className="container">
                <div className="content absolute top-1/2 transform -translate-y-1/2 z-[1]">
                    <div className="inner-content relative z-[1]">
                        <span className="text-[18px] leading-[29px] text-white uppercase block mb-[30px]">
                            {excerpt}
                        </span>
                        <h2 className="md:text-[80px] lm:text-[45px] text-[36px] md:leading-[90px] text-white md:max-w-[770px]">
                            {title}
                        </h2>
                        <Link href={registerLink}>
                            <a className="boxed-btn text-[18px] leading-[30px] mt-4">
                                Register
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectBanner.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    registerLink: PropTypes.string.isRequired,
};

export default ProjectBanner;
