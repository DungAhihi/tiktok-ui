import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import image from '~/assets/image';
import styles from './image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = image.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
