// pages/under-construction.js
import Head from 'next/head';

function UnderConstruction() {
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
                        Were working hard to bring something amazing. Please
                        check back soon!
                    </p>
                </div>
            </div>
        </>
    );
}

export default UnderConstruction;
