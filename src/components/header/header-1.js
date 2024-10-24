import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { OffcanvasData } from './offcanvas-data';
import WhiteLogo from './white-logo';

function HeaderOne() {
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;

        scrollTop >= 90
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    //   End Here

    const router = useRouter();
    const headerCss = `flex lg:justify-between justify-end items-center`;
    return (
        <>
            <header className="absolute z-10 w-full">
                <div
                    className="sticky-holder header-section sticky-style-1"
                    ref={header}
                >
                    <div className="container custom-container">
                        <div className="grid grid-cols-12 items-center leading-[120px]">
                            <div className="col-span-6 lg:col-span-3">
                                <WhiteLogo />
                            </div>
                            <div className="hidden lg:col-span-8 lg:block">
                                <nav>
                                    <ul className="text-white main-menu">
                                        <li
                                            className={
                                                router.pathname === '/'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/">
                                                <a>
                                                    <span>Home</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/about'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/">
                                                <a>
                                                    <span>About</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/programs'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/">
                                                <a>
                                                    <span>Programs</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/projects'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/">
                                                <a>
                                                    <span>Projects</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname === '/contact'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href="/">
                                                <a>
                                                    <span>Contact</span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-span-6 lg:col-span-1">
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="menu-bars flex text-white text-[24px]"
                                        aria-label="Right Align"
                                    >
                                        <FaBars onClick={showOffcanvas} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="offcanvas-menu-holder" onClick={showOffcanvas}>
                <div
                    className={
                        offcanvas
                            ? 'offcanvas-menu-wrap active'
                            : 'offcanvas-menu-wrap'
                    }
                >
                    <nav
                        className="offcanvas-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="offcanvas-menu-items">
                            <li className="navbar-toggle flex justify-between items-center pb-[15px]">
                                <div className="logo" onClick={showOffcanvas}>
                                    <Link href="/">
                                        <a>
                                            <Image
                                                src="/images/logo/atmaja-color.png"
                                                alt="Logo"
                                                width={280}
                                                height={84}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <button
                                    type="button"
                                    className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                                    aria-label="Right Align"
                                >
                                    <AiOutlineClose onClick={showOffcanvas} />
                                </button>
                            </li>
                            {OffcanvasData.map((item) => (
                                <li key={item.id} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>
                                            <span onClick={showOffcanvas}>
                                                {item.title}
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default HeaderOne;
