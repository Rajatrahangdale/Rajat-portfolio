/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/**
 * @copyright 2024 Rajatrahangdale
 * @license Apache-2.0
 */

/**
 * Primary button
 */

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`${classes} btn btn-primary`}>
        {label}

        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`${classes} btn btn-primary`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

/**
 * Outline button
 */

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`${classes} btn btn-outline`}>
        {label}

        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`${classes} btn btn-outline`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

export { ButtonPrimary, ButtonOutline };
