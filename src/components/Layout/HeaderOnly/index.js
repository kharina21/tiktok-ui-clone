import Header from "~/components/Layout/components/Header";
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
        </div>
    );
}

export default DefaultLayout;
