import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
function Image({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
    const [fallBack, setFallback] = useState('');
    const handleOnError = () => {
        setFallback(customFallBack);
    };
    return (
        <img
            ref={ref}
            src={fallBack || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleOnError}
        />
    );
}

export default forwardRef(Image);
