import Image from "next/image";
import serverErrorImage from "~/src/assets/images/serverError.svg"
function Error({ statusCode }) {
    return (
        <div className="w-full h-[80%]">
            <Image src={serverErrorImage} alt="server error icon" />
            {statusCode && `An error ${statusCode} occurred on server`}
        </div>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;