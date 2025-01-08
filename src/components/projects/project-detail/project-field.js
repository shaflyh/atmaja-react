import PropTypes from 'prop-types';

function ProjectField({ label, value, isLink, linkPrefix }) {
    // If the value is not provided, do not render anything.
    if (!value) return null;

    return (
        <li>
            <span className="text-[#4D5660] mr-[5px]">{label}:</span>
            {isLink ? (
                <a
                    href={`${linkPrefix || ''}${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary"
                >
                    {value}
                </a>
            ) : (
                value
            )}
        </li>
    );
}

// Define PropTypes for type-checking
ProjectField.propTypes = {
    label: PropTypes.string.isRequired, // The label of the field, e.g., "Location"
    value: PropTypes.string, // The value of the field, e.g., "China"
    isLink: PropTypes.bool, // Whether the field should be rendered as a link
    linkPrefix: PropTypes.string, // Optional prefix for link fields, e.g., "mailto:"
};

// Default props for optional fields
ProjectField.defaultProps = {
    value: null,
    isLink: false,
    linkPrefix: '',
};

export default ProjectField;
