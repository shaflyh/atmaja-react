import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import HeaderTwo from '../../components/header/header-2';
import AllProjects from '../../components/projects/all-projects';
import { getAllItems } from '../../lib/items-util';

function allItemsPage({ projects }) {
    return (
        <>
            <Head>
                <title>All Projects</title>
                <meta name="description" content="A list of all programs" />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage="Programs" pageTitle="Our Programs" />
            <AllProjects projects={projects} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');

    return {
        props: {
            projects: allItems,
        },
    };
}

allItemsPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default allItemsPage;
