import ScrollToTop from "react-scroll-up"

export default function ScrollTop() {
    return (
        <ScrollToTop showUnder={180}
        style={{
            zIndex: 10,
            bottom: "5em"
        }}>
            <span className={`bg-lightTeal p-6 rounded-full`}>UP</span>
        </ScrollToTop>
    )
}