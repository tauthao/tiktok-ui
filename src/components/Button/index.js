import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    lefIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        text,
        disabled,
        small,
        large,
    });

    const props = {
        onClick,
        ...passProps,
    };
    // Remove event listener when button disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            console.log(key);

            if (key.startsWith('on') && typeof props[key] !== 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {lefIcon && <span className={cx('icon')}>{lefIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
