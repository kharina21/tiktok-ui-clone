import classnames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);
function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx("header")}>
            <button className={cx("back-icon")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    );
}

export default HeaderMenu;
