import Image from "next/image";
import logoDark from '../../../public/images/logo/nimbus_dark.png'


export default function Title() {
    return (
        <div className={`flex flex-col text-center items-center gap-4 my-4`}>
            <Image
                src={logoDark}
                alt="Nimbus logo"
                className={`max-w-three-quarter`}
            />
            <div>
                <h3>Your weather.</h3>
                <p>Straight from the cloud.</p>
            </div>

        </div>
    )
}