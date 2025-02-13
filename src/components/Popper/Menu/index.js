import classnames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const cx = classnames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem data={item} key={index} />);
    };
    return (
        <Tippy
            delay={[0, 800]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx("content")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
