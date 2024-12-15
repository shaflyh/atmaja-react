import { useRouter } from 'next/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const underConstruction =
        process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true';

    if (underConstruction) {
        // Redirect all routes to the "Under Construction" page
        return (
            <>
                <Head>
                    <title>Atmaja Global Edu - Under Construction</title>
                    <meta
                        name="description"
                        content="This page is under construction. Please check back later."
                    />
                </Head>
                <div className="flex items-center justify-center min-h-screen text-white bg-black">
                    <div className="px-4 text-center sm:px-8">
                        <h1 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                            🚧 Under Construction
                        </h1>
                        <p className="mt-6 text-base sm:text-lg">
                            We are building something amazing for you. Stay
                            tuned for updates!
                        </p>
                        <div className="mt-8">
                            <div
                                className="w-12 h-1 mx-auto mb-4 border border-white sm:w-16 md:w-20"
                                aria-hidden="true"
                            />
                            <p className="text-sm tracking-wider">
                                <strong>Contact Us:</strong> info@atmajapin.com
                            </p>
                            {/* <p className="text-sm tracking-wider">
                                <strong>Visit Again:</strong> 01/01/2025
                            </p> */}
                        </div>
                        <footer className="mt-8 text-xs">
                            © {new Date().getFullYear()} Atmaja Global Edu. All
                            Rights Reserved.
                        </footer>
                    </div>
                </div>
            </>
        );
    }

    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="../favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.instanceOf(Object).isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
