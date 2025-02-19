import Button from "~/components/Button";
import classnames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classnames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx("item-btn", { separateTop: data.separateTop });
    return (
        <div>
            <Button
                leftIcon={data.icon}
                className={classes}
                to={data.to}
                onClick={onClick}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
