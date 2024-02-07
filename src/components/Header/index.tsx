import Image from "next/image"
import lightImg from "../../../public/images/logo/nimbus_light.png"

export default function Header() {
    return (
        <div id="header" className={`bg-lightTeal w-full`}>
            <Image
                src={lightImg}
                alt="Nimbus logo"
                id="header-logo"
            />
        </div>
    )
}