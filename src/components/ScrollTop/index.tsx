import ScrollToTop from "react-scroll-up"

export default function ScrollTop() {
    return (
        <ScrollToTop showUnder={180}
        style={{
            zIndex: 10,
            bottom: "3em"
        }}>
            <span className={`bg-lightTeal p-oneEm rounded-full text-offWhite box-border`}>Top</span>
        </ScrollToTop>
    )
}