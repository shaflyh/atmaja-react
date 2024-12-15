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

    if (underConstruction && router.pathname !== '/under-construction') {
        // Redirect all routes to the "Under Construction" page
        return (
            <>
                <Head>
                    <title>Under Construction</title>
                    <meta
                        name="description"
                        content="This page is under construction. Please check back later."
                    />
                </Head>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800">
                            🚧 Under Construction 🚧
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            We&aposre working hard to bring something amazing.
                            Please check back soon!
                        </p>
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
