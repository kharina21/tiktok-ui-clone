import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import AcountItem from "~/components/AccountItem";
import images from "~/assets/images";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Footer from "~/components/Popper/Menu/Footer";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faArrowUpFromBracket,
    faUser,
    faGear,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                { type: "language", code: "en", title: "English" },
                { type: "language", code: "vi", title: "Tiếng Việt" },
                { type: "language", code: "cn", title: "中国人" },
                { type: "language", code: "jp", title: "日本語" },
            ],
        },
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

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "View profile",
        to: "/viewprofile",
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: "Get coin",
        to: "/getcoin",
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Setting",
        to: "/setting",
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: "Logout",
        to: "/logout",
        separateTop: true,
    },
];
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [currentUser, setCurrentUser] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
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
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx("actions")}>
                    {currentUser ? (
                        <div className={cx("currentUser")}>
                            <Tippy content="Upload video">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon
                                        icon={faArrowUpFromBracket}
                                    />
                                </button>
                            </Tippy>
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </div>
                    ) : (
                        <>
                            <Button text>Register</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    {currentUser ? (
                        <Menu items={USER_MENU} onChange={handleMenuChange}>
                            <button className={cx("user-btn")}>
                                <img
                                    src={images.khaImg1}
                                    className={cx("user-img")}
                                    alt="user-img"
                                />
                            </button>
                        </Menu>
                    ) : (
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
