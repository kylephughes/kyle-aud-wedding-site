import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { createMuiTheme, withStyles } from '@material-ui/core/styles'

import CustomTabs from '../src/CustomTabs'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import Head from 'next/head'
import Image from 'next/image'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slideshow from '../src/Slideshow'
import teal from '@material-ui/core/colors/teal'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[900],
    },
    secondary: {
      main: teal[200],
    },
    text: {
      primary: teal[900],
      secondary: teal[200],
    },
  },
  typography: {
    h3: {
      fontFamily: 'Luminari, fantasy',
    },
    h5: {
      fontFamily: 'Luminari, fantasy',
    },
  },
})
const StyledAccordion = withStyles({
  root: {
    backgroundColor: teal[50],
    border: '1px solid #00796b',
  },
})((props: any) => <Accordion {...props} />)
const StyledAccordionSummary = withStyles({
  root: {
    backgroundColor: teal[50],
  },
})((props: any) => <AccordionSummary {...props} />)
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="main-container">
        <Head>
          <title>Audrey & Kyles Wedding</title>
        </Head>
        <Grid container direction="column" justify="center" spacing={3}>
          <Grid container justify="center" item>
            <Typography variant="h3" color="primary">
              Audrey & Kyles Wedding
            </Typography>
          </Grid>
          <Grid container justify="center" item>
            <Typography color="primary" variant="body1">
              May 28th, 2022
            </Typography>
          </Grid>
          <Grid container justify="center" item>
            <Typography color="primary" variant="body1">
              Lighthouse Inn - West Dennis, MA
            </Typography>
          </Grid>
          <Grid container style={{ paddingTop: 12 }} justify="center" item>
            <CustomTabs />
          </Grid>
          <Grid container justify="center" item>
            <Grid container item xs={12} md={6}>
              <Slideshow />
            </Grid>
          </Grid>
          <Grid container direction="column" alignContent="center" item>
            <Grid id="about" item>
              <Typography color="primary" variant="h5">
                About Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="primary" variant="body1">
                TBD
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="column" alignItems="center" item>
            <Grid id="schedule" item>
              <Typography color="primary" variant="h5">
                Schedule Of Events
              </Typography>
            </Grid>
            <Grid container direction="column" alignItems="center" item xs={12} md={6}>
              <StyledAccordion
                style={{ width: '100%', backgroundColor: teal[50], border: '1px solid #00796b' }}
              >
                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color="primary" variant="h6">
                    Friday May 27th
                  </Typography>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} direction="column">
                    <Grid container item>
                      <Grid item xs={12} md={2}>
                        <Typography color="primary" variant="body1">
                          9:00 am
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography color="primary" variant="body1">
                          Golf outing - for those interesting please reach out as soon as possible
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item xs={12} md={2}>
                        <Typography color="primary" variant="body1">
                          5:00 pm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography color="primary" variant="body1">
                          <a href="https://www.instagram.com/theimproperbostonian/?hl=en">
                            Jim Plunkett Happy Hour at Improper Bostionian
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item xs={12} md={2}>
                        <Typography color="primary" variant="body1">
                          8:00 pm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography color="primary" variant="body1">
                          Rehearsal dinner at TBD
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </StyledAccordion>
            </Grid>
            <Grid container direction="column" alignItems="center" item xs={12} md={6}>
              <StyledAccordion
                style={{ width: '100%', backgroundColor: teal[50], border: '1px solid #00796b' }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color="primary" variant="h6">
                    Saturday May 28th
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} direction="column">
                    <Grid container item></Grid>
                    <Grid container item>
                      <Grid item xs={12} md={2}>
                        <Typography color="primary" variant="body1">
                          4:00 pm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography color="primary" variant="body1">
                          Wedding Ceremony at TBD
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item xs={12} md={2}>
                        <Typography color="primary" variant="body1">
                          6:00 pm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography color="primary" variant="body1">
                          Reception at the Lighthouse Inn
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item>
                      <Grid item xs={12} md={2}>
                        <Typography color="primary" variant="body1">
                          11:30 pm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography color="primary" variant="body1">
                          After party at the cottages and/or the Sand Bar
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </StyledAccordion>
            </Grid>
            <Grid container direction="column" alignItems="center" item xs={12} md={6}>
              <StyledAccordion
                style={{ width: '100%', backgroundColor: teal[50], border: '1px solid #00796b' }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color="primary" variant="h6">
                    Sunday May 29th
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} direction="column">
                    <Grid container item></Grid>
                    <Grid container item>
                      <Grid item xs={12} md={2}>
                        <Typography color="primary" variant="body1">
                          10:00 am
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography color="primary" variant="body1">
                          Boozy brunch at the cottages
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </StyledAccordion>
            </Grid>
          </Grid>
          <Grid container direction="column" alignContent="center" item>
            <Grid id="places" item>
              <Typography color="primary" variant="h5">
                Places To Stay
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center" item>
            <Grid id="rsvp" item>
              <Typography color="primary" variant="h5">
                RSVP
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="primary" variant="body1">
                Email kyle.hughes025@gmail.com or audreym@udel.edu
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
