import Image from "next/image";
import serverErrorImage from "~/src/assets/images/serverError.svg"
function Error({ statusCode }) {
    return (
        <div className="w-full h-[80%] relative">
            <Image src={serverErrorImage} fill alt="server error icon" />
            An error occurred on server
        </div>
    );
}


export default Error;