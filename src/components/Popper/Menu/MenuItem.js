import Button from "~/components/Button";
import classnames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classnames.bind(styles);
function MenuItem({ data }) {
    return (
        <div>
            <Button
                leftIcon={data.icon}
                className={cx("item-btn")}
                to={data.to}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
