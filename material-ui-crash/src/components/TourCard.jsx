import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import TypoGraphy from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { AccessTime } from "@mui/icons-material"
import Rating from "@mui/material/Rating"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
})

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Link to={`${tour.id}`}>
            <img src={tour.image} className="img" alt="" />
          </Link>
          <Box paddingX={1}>
            <TypoGraphy variant="subtitle1" component={"h2"}>
              {tour.name}
            </TypoGraphy>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <TypoGraphy variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </TypoGraphy>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={2}
            >
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                precision={5 - tour.rating}
                size="small"
              />
              <TypoGraphy variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </TypoGraphy>
              <TypoGraphy variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </TypoGraphy>
            </Box>
            <Box>
              <TypoGraphy variant="h6" component="h3" marginTop={0}>
                From C ${tour.price}
              </TypoGraphy>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard
