import React, {ReactNode} from "react"
import {AppBar, Box, Toolbar, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useLayoutContext} from "~/src/Utils/Contexts/LayoutContext";
import Script from "next/script";

interface IMasterLayoutProps{
    children:ReactNode
}

const MasterLayout:React.FC<IMasterLayoutProps> = ({children})=>{
    const {layout,layoutSetter} = useLayoutContext()
    const theme = useTheme()
    return (<>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div">
                    <button  onClick={()=>layoutSetter({mode:layout.mode === 'light' ? 'dark' : 'light'})}>change theme </button>
                </Typography>
            </Toolbar>
        </AppBar>
       <Box p={4} bgcolor={theme.palette.primary[layout.mode]}>
           {children}
       </Box>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
    </>)
}



export default MasterLayout