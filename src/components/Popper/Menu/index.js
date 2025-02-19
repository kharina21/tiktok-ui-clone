import classnames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
import Header from "./HeaderMenu";
import { useState } from "react";

const cx = classnames.bind(styles);
const defaultfn = () => {};

function Menu({ children, items = [], onChange = defaultfn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent)
                            setHistory((prev) => [...prev, item.children]);
                        else onChange(item);
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            offset={[18, 8]}
            delay={[0, 800]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx("content")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    );
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
