// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// Styled Box component
const StyledBox1 = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(6.5, 6),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`
}))

// Styled Box component
const StyledBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(6.5, 6),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`
}))

const FaqFooter = () => {
  return (
    <Box sx={{ mt: 13, textAlign: 'center' }}>
      <CustomChip size='small' skin='light' color='primary' label='Question' />
      <Typography variant='h5' sx={{ my: 2.5 }}>
        You still have a question?
      </Typography>
      <Typography variant='body2' sx={{ mb: 13.5 }}>
        If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <StyledBox1>
            <CustomAvatar skin='light' variant='rounded' sx={{ mt: 1.5, height: 50, width: 50 }}>
              <Icon icon='mdi:phone-outline' fontSize={30} />
            </CustomAvatar>
            <Typography
              href='/'
              variant='h5'
              component={Link}
              onClick={e => e.preventDefault()}
              sx={{ my: 4, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              + (810) 2548 2568
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>We are always happy to help!</Typography>
          </StyledBox1>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledBox2>
            <CustomAvatar skin='light' variant='rounded' sx={{ mt: 1.5, height: 50, width: 50 }}>
              <Icon icon='mdi:email-outline' fontSize={30} />
            </CustomAvatar>
            <Typography
              href='/'
              variant='h5'
              component={Link}
              onClick={e => e.preventDefault()}
              sx={{ my: 4, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              hello@help.com
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Best way to get answer faster!</Typography>
          </StyledBox2>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FaqFooter
