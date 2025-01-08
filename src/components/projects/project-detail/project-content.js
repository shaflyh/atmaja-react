import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IoMdGrid } from 'react-icons/io';
import ProjectBanner from './project-banner';
import ProjectField from './project-field';

function ProjectContent({ project }) {
    const projectPath = `/images/projects/${project.slug}/`;
    const imagePath = `/images/projects/${project.slug}/${project.image}`;
    const descriptionImagePath = `/images/projects/${project.slug}/${project.descriptionImg}`;

    const fields = [
        { label: 'Location', value: project?.location },
        { label: 'Organizer', value: project?.organizer },
        { label: 'Application Deadline', value: project?.applicationDeadline },
        { label: 'Start Date', value: project?.startDate },
        { label: 'Eligibility', value: project?.eligibility },
        { label: 'Funding Coverage', value: project?.fundingCoverage },
        { label: 'Fields of Study', value: project?.fieldsOfStudy },
        { label: 'Language Requirement', value: project?.languageRequirement },
        { label: 'Program Duration', value: project?.programDuration },
        { label: 'Documents Required', value: project?.documentsRequired },
        { label: 'Additional Features', value: project?.additionalFeatures },
        { label: 'Result Announcement', value: project?.resultAnnouncement },
        {
            label: 'Contact',
            value: project?.contact,
            isLink: true,
            linkPrefix: 'mailto:',
        },
        {
            label: 'Application Link',
            value: project?.applicationLink,
            isLink: true,
        },
    ];

    return (
        <article>
            <ProjectBanner
                title={project?.title}
                excerpt={project.excerpt}
                categoryName={project.category}
                image={imagePath}
                registerLink={project?.registerLink}
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
                        {fields.map(({ label, value, isLink, linkPrefix }) => (
                            <ProjectField
                                key={label}
                                label={label}
                                value={value}
                                isLink={isLink}
                                linkPrefix={linkPrefix}
                            />
                        ))}
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
                    {project?.attachments && project.attachments.length > 0 && (
                        <div className="attachments md:pt-[50px] pt-[30px]">
                            <h3 className="text-[24px] leading-[36px] pb-5">
                                Additional Attachments
                            </h3>
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                {project.attachments.map((attachment) => {
                                    const uniqueKey = attachment
                                        .split('/')
                                        .pop(); // Extract the file name or unique part of the URL
                                    return (
                                        <div
                                            key={uniqueKey}
                                            className="attachment"
                                        >
                                            <Image
                                                src={projectPath + attachment}
                                                alt={`Attachment ${uniqueKey}`}
                                                width={800}
                                                height={600}
                                                objectFit="cover"
                                                className="rounded shadow"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {project?.descriptionImg && (
                        <div className="image md:pt-[85px] pt-[50px]">
                            <Image
                                src={descriptionImagePath}
                                alt={project?.title}
                                width={1170}
                                height={610}
                                objectFit="cover"
                            />
                        </div>
                    )}
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
        attachments: PropTypes.arrayOf(PropTypes.string),
        registerLink: PropTypes.string,
    }).isRequired,
};

export default ProjectContent;
