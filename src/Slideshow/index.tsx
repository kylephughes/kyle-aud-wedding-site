import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'

import Carousel from 'react-material-ui-carousel'

var items = [
  {
    image: '/elfreths-alley.jpg',
    description: 'Elfreths Alley - Philadelphia, PA',
  },
  {
    image: '/cape-wedding.jpg',
    description: 'Pleasant Rd Beach - West Harwich, MA',
  },
  {
    image: '/lobster-fishing.jpg',
    description: 'Lobster fishing - Portland, Maine',
  },
]
const Slideshow = (props) => {
  return (
    <Carousel
      indicatorProps={{ className: 'slideshow-indicator', style: {} }}
      indicatorContainerProps={{ className: 'slideshow-indicator-container', style: {} }}
      navButtonsAlwaysInvisible={true}
      className="carousel-root"
    >
      {items.map((item, index) => (
        <Card key={index} className="slideshow-card">
          <CardMedia style={{ height: 500 }} image={item.image} title={item.description} />
          <CardContent>
            <Grid container justify="center">
              <Typography variant="body1">{item.description}</Typography>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  )
}

export default Slideshow
