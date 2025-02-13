import classnames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);
function Button({
    className,
    primary = false,
    light = false,
    outline = false,
    rounded = false,
    success = false,
    dark = false,
    warning = false,
    info = false,
    small = false,
    text = false,
    leftIcon,
    rightIcon,
    disabled = false,
    large = false,
    to,
    href,
    onClick,
    children,
    ...passProps
}) {
    const props = {
        onClick,
        ...passProps,
    };

    //remove event listioner when disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }
    let Comp = "button";
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    const classes = cx("wrapper", {
        [className]: className,
        primary,
        light,
        success,
        dark,
        warning,
        info,
        outline,
        rounded,
        text,
        leftIcon,
        rightIcon,
        small,
        large,
        disabled,
    });
    return (
        <Comp {...props} className={classes}>
            {leftIcon && <span className={cx("left-icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("right-icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
