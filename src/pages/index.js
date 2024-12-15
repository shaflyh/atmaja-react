import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import PricingTab from '../components/home-page/pricing-tab';
import Testimonial from '../components/home-page/testimonial';
import Brand from '../components/home-page/brand';
import FeaturedPost from '../components/home-page/featured-post';
import LatestProject from '../components/home-page/latest-project';

function HomePage({
    heroItems,
    services,
    projects,
    pricingItems,
    testimonialItems,
    brandItems,
    posts,
}) {
    return (
        <>
            <Head>
                <title>Rustic - React Business Template</title>
                <meta
                    name="description"
                    content="Rustic - React Business Template is an excellent solution to the web designing needs for your website related to creative agency, business, portfolio, corporate, etc. "
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={heroItems} />
            <About />
            <Services services={services} />
            <LatestProject projects={projects} />
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="+1,250 Happy Clients"
            />
            <Brand brandItems={brandItems} />
        </>
    );
}

// Use getServerSideProps to redirect to the under-construction page
export async function getServerSideProps() {
    const siteUnderConstruction = true; // Set this to true if the site is under construction

    if (siteUnderConstruction) {
        return {
            redirect: {
                destination: '/under-construction',
                permanent: false,
            },
        };
    }

    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');

    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    pricingItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
