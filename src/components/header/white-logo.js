import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
    return (
        <Link href="/">
            <a className="inline-block align-middle leading-[1]">
                <Image
                    src="/images/logo/atmaja-white.png"
                    alt="Logo"
                    width={180}
                    height={60}
                />
            </a>
        </Link>
    );
}

export default WhiteLogo;
