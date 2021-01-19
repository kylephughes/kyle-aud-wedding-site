import { AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core'

import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Audrey & Kyles Wedding</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
          <Typography variant="h5">Audrey & Kyle's Wedding</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" alignContent="center" alignItems="center">
        <Grid container justify="center" item xs={12}>
          <Paper>
            <Image src="/cape-wedding.jpg" alt="cape-wedding" width={800} height={900} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
