import React, {ReactElement} from "react"
import {createTheme, ThemeProvider} from "@mui/material";
import {useLayoutContext} from "~/src/Utils/Contexts/LayoutContext";

interface IMuiProviderProps {
    children: ReactElement
}

// const theme = createTheme({
//     palette:{
//       // mode:'dark'
//     },
//     components: {
//         MuiAppBar: {
//             styleOverrides: {
//                 root: {
//                 },
//             },
//         },
//     },
// });




const colorPalette = {
    primary:{
        main:'#FFFFFF',
        dark:'#2B3743',
        light:'#FFFFFF',
    },
    secondary:{
        main:'#FFFFFF',
        dark:'#212E37',
        light:'#FFFFFF',
    },
}

const MuiProvider: React.FC<IMuiProviderProps> = ({children}) => {
    const {layout} = useLayoutContext()
    const theme = React.useMemo(() =>
            createTheme({
                palette: {
                    mode:layout.mode,
                    ...colorPalette,
                },
                components:{
                    MuiAppBar:{
                        styleOverrides:{
                            root:{
                                background:colorPalette.primary[layout.mode],
                                boxShadow:`0px 2px 9px -3px ${layout.mode === 'light' ? '#cbcbcb' : 'black'}`,
                                position:'relative'
                            }
                        }
                    },
                    MuiCard:{
                        styleOverrides:{
                            root:{
                                background:colorPalette.primary[layout.mode],
                                boxShadow:`0px 0px 9px 0px ${layout.mode === 'light' ? '#e5e5e5' : '#454545'}`
                            }
                        }
                    },
                    MuiInputBase:{
                        styleOverrides:{
                            root:{
                                border:'unset !important',
                                outline:'unset',
                                background:colorPalette.primary[layout.mode],
                                boxShadow:`0px 0px 9px 0px ${layout.mode === 'light' ? '#e5e5e5' : '#454545'}`,
                                '& fieldset':{
                                    border:'unset !important',
                                }
                            }
                        }
                    },
                    MuiMenu:{
                        styleOverrides:{
                            paper:{
                                background:colorPalette.primary[layout.mode],
                                boxShadow:`0px 0px 9px 0px ${layout.mode === 'light' ? '#e5e5e5' : '#454545'}`,
                            }
                        }
                    },
                    MuiButton:{
                        styleOverrides:{
                            root:{
                                boxShadow:`0px 0px 9px 0px ${layout.mode === 'light' ? '#e5e5e5' : '#454545'}`,
                            }
                        }
                    }
                }
            }),
        [layout.mode],
    );


    return (
        <ThemeProvider theme={theme}>
                {children}
        </ThemeProvider>
    )
}

export default React.memo(MuiProvider)