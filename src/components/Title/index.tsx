import Image from "next/image";
import logoDark from '../../../public/images/logo/nimbus_dark.png'


export default function Title() {
    return (
        <div className={`flex flex-col text-center items-center gap-4 my-4`}>
            <Image
                src={logoDark}
                alt="Nimbus logo"
            />
            <div>
                <p>Your weather.</p>
                <p>Straight from the cloud.</p>
            </div>

        </div>
    )
}