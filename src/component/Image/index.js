import { useState, forwardRef } from 'react';
import image from '~/assets/image';
import styles from './image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, className, fallBack: customFallback = image.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
