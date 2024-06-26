import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import ImageCollage from "../components/ImageCollage"
import CustomAccordion from "../components/CustomAccordion"
import BasicModal from "../components/BasicModal"

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component={"h1"} marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
          alt=""
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component={"h4"} marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component={"p"} marginTop={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum vero nobis porro
          architecto sed error reprehenderit deserunt expedita velit earum, ad, provident
          nam, esse optio! Vitae maiores corporis minus nemo modi sint natus deleniti rem
          repellendus eos, pariatur quos maxime.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component={"h4"} marginTop={3} marginBottom={2}>
          Frequently asked questions
        </Typography>
        <CustomAccordion />
      </Box>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour
