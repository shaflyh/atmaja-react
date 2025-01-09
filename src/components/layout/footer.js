import Link from 'next/link';
import * as AiIcons from 'react-icons/ai';
import Image from 'next/image';

function Footer() {
    const currentYear = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
    });
    return (
        <footer className="footer-area md:pt-[120px] pt-[60px]">
            <div className="footer-top">
                <div className="custom-container">
                    <div className="lm:grid grid-cols-12 xl:gap-x-[30px] gap-[30px]">
                        <div className="flex items-center justify-center col-span-3 fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-12 max-sm:text-center">
                            <div className="footer-logo">
                                <Image
                                    src="/images/logo/atmaja-logo-1.png"
                                    alt="Logo"
                                    width={194}
                                    height={164}
                                />
                            </div>
                        </div>
                        <div className="col-span-6 fixed-lg:col-span-6 fixed-md:col-span-6 fixed-lm:col-span-12 flex flex-col items-center max-lm:text-center max-sm:pt-[35px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Contact</h2>
                                <ul className="contact-info mt-[25px]">
                                    <li>
                                        Jl. Pluit Karang Cantik VI No.36,
                                        RT.4/RW.8, Pluit, Kec. Penjaringan,
                                        Jakarta Utara, Daerah Khusus Ibukota
                                        Jakarta 14450
                                    </li>
                                    <li>
                                        <Link href="mailto:info@atmajapin.com">
                                            <a className="transition-all hover:text-black">
                                                info@atmajapin.com
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+6283135698000">
                                            <a className="transition-all hover:text-black">
                                                (+62) 831-3569-8000
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-span-3 fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-12 flex flex-col items-center max-lm:text-center max-sm:pt-[30px]">
                            <div className="footer-widget-item">
                                <h2 className="title">Quick Links</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/contact">Works</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Affiliate</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Partners</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="custom-container">
                    <div className="inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9">
                        <div className="flex flex-col md:grid md:grid-cols-12">
                            <div className="md:col-span-4 max-lm:order-last max-lm:pt-[10px]">
                                <div className="copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]">
                                    © {currentYear}
                                    <span className="mx-1">
                                        PT Atmaja Perkasa International
                                    </span>
                                </div>
                            </div>
                            <div className="md:col-span-6">
                                <ul className="footer-social-link md:mb-0 mb-[10px]">
                                    <li>
                                        <Link href="https://linkedin.com/">
                                            <a>LinkedIn</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com/">
                                            <a>Instagram</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
