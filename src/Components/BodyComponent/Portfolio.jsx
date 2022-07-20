import { Box, Grid, Container, Typography, Button } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import React from 'react'
import { useStyles } from "../BodyComponent/BodyStyles"
import { CommonHeaderSection } from "../CommonComponents/CommonHeaderSection"
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ScrollAnimation from 'react-animate-on-scroll';


import image1 from "../../Images/Tanishq.png";
import image2 from "../../Images/Yatra.png";
import image3 from "../../Images/Dream11.png";

export const Portfolio = () => {
    const classes = useStyles();
    const portfolioData = [
        {url:image1,title:"Tanishq Github",visitLink:"https://psaini9211.github.io/Tanishq/Html/",git:"https://github.com/ansariShariq/tanishq/tree/master/src",ptitle:"Tanishq",desc:"Clone jewelery Website Tanishq.com",stack:"HTML | CSS | Java Script | Node Js | MongoDB |EJS.",},
        {url:image2,title:"Yatra Github",visitLink:"https://yatraa.netlify.app/",git:"https://github.com/neerajmasai/yatra-clone",ptitle:"Yatra",desc:"This is a clone of Indian travel agency www.yatra.com website.",stack:" React | HTML | CSS | Java Script | MongoDb | Node Js"}
        // {url:image3,title:"Dream11 Github",/*visitLink:"https://todolist-shariq.herokuapp.com/",*/git:"https://github.com/Niket1-1/DREAM11_project",ptitle:"Dream 11",desc:"Clone of Fantasy game website gofundme.com.",stack:" HTML | CSS | Java Script ",},
     
    ]
    return (
        // headerSection
        <Box className={classes.portFolioSection} id="Portfolio">
             <Grid container className={classes.portfolio1Cont}>
                <Grid item xs={12} sm={8}>
                    <CommonHeaderSection label="PROJECTS" headingBig="Let's See My Work" isAlign={true} arrowLogo={<ArrowDownwardRoundedIcon/>} withIcon={false} />
               </Grid>
            </Grid>

            {/* image Section */}
            <ScrollAnimation animateIn='fadeIn'>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {portfolioData.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={12} lg={4}>
                            <Box className={classes.imageContainer}>
                                    <img src={item.url} alt={item.title} className={classes.aboutImg1}/>
                                    {/* for hover over image */}
                                    <Box className={classes.imageOverly}>
                                        <Typography className={classes.overlyTitle}>
                                            <Link href={item.git} target="_blank" underline="hover" style={{color:"#fff"}}>{item.title} </Link>
                                        </Typography>
                                        <Button variant="contained">   <Link href={item.visitLink} target="_blank" underline="hover" style={{color:"grey"}}>Visit</Link></Button>
                                    </Box>
                                   
                                </Box>
                                
                                <Container>
                                <Box className={classes.projectDescription}>
                                         {/*Description Section*/}
                                        <Typography variant="h5">- Title: {item.ptitle}</Typography>
                                        <Typography variant="h6" component="h5">-Description: {item.desc }</Typography>
                                        <Typography variant="h6">- Tech Stack: {item.stack}</Typography>
                                        <Typography variant="h6"><Link href={item.git} target="_blank" underline="hover" style={{ color: "#fff" }}>- GitHub</Link></Typography>
                                        <Typography variant="h6"><Link href={item.visitLink} target="_blank" underline="hover" style={{ color: "#fff" }}>- Visit Website</Link></Typography>  
                                  </Box>
                                </Container>
                               
                         </Grid>
                        )
                    })}
                 </Grid>
            </Container>
            </ScrollAnimation>
        </Box>
       
    )
}
