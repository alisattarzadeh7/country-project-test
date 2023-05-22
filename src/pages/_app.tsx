import type {AppProps} from 'next/app'
import MainProvider from "~/src/Utils/Providers";
import MasterLayout from "~/components/MasterLayout";
import "~/src/global.scss"
export default function App({Component, pageProps}: AppProps) {
    return (<MainProvider>
        <MasterLayout>
            <Component {...pageProps} />
        </MasterLayout>
    </MainProvider>)
}
