import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import AcountItem from "~/components/AccountItem";
import images from "~/assets/images";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { Link } from "react-router-dom";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img
                        alt="tiktok-logo"
                        src={images.tiktokLogoBlack}
                        width="118"
                    />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input
                            placeholder="Search account and videos"
                            spellCheck="false"
                        />

                        <button className={cx("clear")}>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                style={{ color: "#ccc" }}
                            />
                        </button>
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />

                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("actions")}>
                    <Button outline text>
                        Register
                    </Button>
                    <Button
                        primary
                        leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                        to="/login"
                        className={cx("custom-btn")}
                    >
                        Login
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx("more-btn")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
