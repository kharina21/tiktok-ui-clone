import classnames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ea1e3115871533c3f3b73b45952c1cfd.jpeg?lk3s=a5d48078&nonce=56320&refresh_token=5f0fdbd0f335c34ddcb183566d1af903&x-expires=1739476800&x-signature=eF%2Bzj5l%2B%2FIN%2FumkNdBLhusswNtg%3D&shp=a5d48078&shcp=81f88b70"
                alt="avt"
            />
            <div className={cx("info")}>
                <div className={cx("name")}>
                    <p>Nguyen Van A</p>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </div>
                <p className={cx("username")}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
