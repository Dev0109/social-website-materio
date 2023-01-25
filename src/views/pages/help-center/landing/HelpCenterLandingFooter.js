// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const HelpCenterLandingFooter = () => {
  return (
    <>
      <Typography variant='h5' sx={{ mb: 4 }}>
        Still need help?
      </Typography>
      <Typography variant='body2'>Our specialists are always happy to help.</Typography>
      <Typography variant='body2' sx={{ mb: 4 }}>
        Contact us during standard business hours or email us 24/7, and we'll get back to you.
      </Typography>
      <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant='contained'>Visit our community</Button>
        <Button variant='contained'>Contact us</Button>
      </Box>
    </>
  )
}

export default HelpCenterLandingFooter
