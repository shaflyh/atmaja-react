import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IoMdGrid } from 'react-icons/io';
import ProjectBanner from './project-banner';

function ProjectContent({ project }) {
    const imagePath = `/images/projects/${project.slug}/${project.image}`;
    const descriptionImagePath = `/images/projects/${project.slug}/${project.descriptionImg}`;

    return (
        <article>
            <ProjectBanner
                title={project?.title}
                excerpt={project.excerpt}
                categoryName={project.category}
                image={imagePath}
            />
            <div className="project-upper-box md:pt-[150px] pt-[55px]">
                <div className="container">
                    <div className="navigation pb-[50px]">
                        <Link href="/projects">
                            <a className="flex items-center text-[14px] leading-6 uppercase">
                                <IoMdGrid className="text-[20px] mr-5" />
                                Back to Projects
                            </a>
                        </Link>
                    </div>
                    <ul className="grid grid-cols-1 info sm:grid-cols-2 md:grid-cols-3 gap-y-3">
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Location:
                            </span>
                            {project?.location}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Organizer:
                            </span>
                            {project?.organizer}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Application Deadline:
                            </span>
                            {project?.applicationDeadline}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Start Date:
                            </span>
                            {project?.startDate}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Eligibility:
                            </span>
                            {project?.eligibility}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Funding Coverage:
                            </span>
                            {project?.fundingCoverage}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Fields of Study:
                            </span>
                            {project?.fieldsOfStudy}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Language Requirement:
                            </span>
                            {project?.languageRequirement}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Program Duration:
                            </span>
                            {project?.programDuration}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Documents Required:
                            </span>
                            {project?.documentsRequired}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Additional Features:
                            </span>
                            {project?.additionalFeatures}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Result Announcement:
                            </span>
                            {project?.resultAnnouncement}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Contact:
                            </span>
                            <a
                                href={`mailto:${project?.contact}`}
                                className="underline text-primary"
                            >
                                {project?.contact}
                            </a>
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Application Link:
                            </span>
                            <a
                                href={project?.applicationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-primary"
                            >
                                Apply Here
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project-description md:pt-[80px] pt-[40px]">
                <div className="container">
                    <div className="content">
                        <h2 className="text-[36px] leading-[58px] pb-10">
                            Description
                        </h2>
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project?.additionDesc,
                            }}
                        />
                    </div>
                    <div className="image md:pt-[85px] pt-[50px]">
                        <Image
                            src={descriptionImagePath}
                            alt={project?.title}
                            width={1170}
                            height={610}
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string,
        category: PropTypes.string,
        image: PropTypes.string.isRequired,
        descriptionImg: PropTypes.string,
        location: PropTypes.string,
        organizer: PropTypes.string,
        applicationDeadline: PropTypes.string,
        startDate: PropTypes.string,
        eligibility: PropTypes.string,
        fundingCoverage: PropTypes.string,
        fieldsOfStudy: PropTypes.string,
        languageRequirement: PropTypes.string,
        programDuration: PropTypes.string,
        documentsRequired: PropTypes.string,
        additionalFeatures: PropTypes.string,
        resultAnnouncement: PropTypes.string,
        contact: PropTypes.string,
        applicationLink: PropTypes.string,
        additionDesc: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectContent;
