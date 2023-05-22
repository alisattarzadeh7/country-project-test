import {NextPage} from "next";
import {Box, Button, Grid} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useRouter} from "next/router";
import AnimatedPage from "~/components/AnimatedPage";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import serverErrorImage from "~/src/assets/images/serverError.svg"
import styles from "./countryDetail.module.scss"
import {motion} from "framer-motion"
import Link from "next/link";

const testPage:NextPage = () => {
    const router = useRouter()

    const handleGetBack = ()=>{
        router.replace('/')
    }

    return (<AnimatedPage>

       <Box mt={2}>
           <Button variant="outlined" onClick={handleGetBack} startIcon={<KeyboardBackspaceIcon className="text-black" />}>
               <span className="text-black capitalize">back</span>
           </Button>
           <Grid container height={400} mt={3}>
                <Grid item xs={12} lg={5} >
                   <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:0.3}} className={styles.imageContainer}> <Image src={serverErrorImage} fill alt="logo image"/></motion.div>
                </Grid>
               <Grid item xs={12} lg={7} px={10} py={5} container>
                       <Grid xs={12} item py={3}><Typography component="h1" fontSize={30} fontWeight="bolder" >Title</Typography></Grid>
                        <Grid item xs={12} lg={6}>asdf</Grid>
                        <Grid item xs={12} lg={6}>asdf</Grid>
                        <Grid item xs={12} lg={6}>asdf</Grid>
                        <Grid item xs={12} lg={6}>asdf</Grid>
                        <Grid item xs={12} lg={6}>asdf</Grid>
                        <Grid item xs={12} lg={6}>asdf</Grid>
                        <Grid item xs={12} >asdf</Grid>
                        <Grid item xs={12} >asdf</Grid>
                   <Grid item xs={12} container alignItems="center">
                       <Typography component="h1" fontSize={20} fontWeight="bold" >Border Countries: </Typography>
                       <Link href={`/country/${123}`}>
                           <Button sx={{
                               height:25
                           }} variant="outlined"  >
                               <span className="text-black capitalize">back</span>
                           </Button>
                       </Link>
                   </Grid>
               </Grid>

           </Grid>
       </Box>
    </AnimatedPage>)
}

export default testPage