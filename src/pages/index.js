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
                <title>Atmaja Global Edu</title>
                <meta
                    name="description"
                    content="Atmaja Global Edu - Memajukan pendidikan, menghubungkan dunia!"
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={heroItems} />
            <About />
            <Services services={services} />
            <LatestProject projects={projects} />
            {/* <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="+1,250 Happy Clients"
            /> */}
            {/* <Brand brandItems={brandItems} /> */}
        </>
    );
}

export async function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            brandItems,
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
