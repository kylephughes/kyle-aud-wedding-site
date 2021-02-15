import { Grid, Paper, Tab, Tabs, withStyles } from '@material-ui/core'

import Link from 'next/link'
import { teal } from '@material-ui/core/colors'
import { useState } from 'react'

enum TabEnum {
  about = 0,
  schedule = 1,
  places = 2,
  rsvp = 3,
}
const StyledTabs = withStyles({
  root: {
    overflowX: 'auto',
  },
  fixed: {
    overflowX: 'auto',
  },
})((props: any) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)
const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: teal[900],
    '&:hover': {
      color: teal[200],
      opacity: 1,
    },
  },
}))((props: any) => <Tab disableRipple {...props} />)

// custom way to handle tab for smooth scroll
const getElementToScrollTo = (value: number) => {
  let element = null
  if (value === TabEnum.about) {
    element = document.getElementById('about')
  } else if (value === TabEnum.schedule) {
    element = document.getElementById('schedule')
  } else if (value === TabEnum.places) {
    element = document.getElementById('places')
  } else {
    element = document.getElementById('rsvp')
  }
  return element
}

const CustomTabs = (props) => {
  const [value, setValue] = useState(false)
  const handleChange = (event, newValue) => {
    event.preventDefault()
    const element = getElementToScrollTo(newValue)
    element.scrollIntoView({ behavior: 'smooth' })
    setValue(newValue)
  }

  return (
    <StyledTabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
      <StyledTab className="tabber" label="About Us" />
      <StyledTab label="Schedule Of Events" />
      <StyledTab label="Places To Stay" />
      <StyledTab label="RSVP" />
    </StyledTabs>
  )
}
export default CustomTabs
