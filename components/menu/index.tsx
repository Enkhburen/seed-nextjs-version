import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import SeedLogoBlack from '../../assets/logo/seed_logo_black.svg'
import { textTransform } from '@mui/system'

const pages = ['Нүүр', 'Төслүүд', 'Блог', 'Бидний тухай', 'Холбогдох']
const pagesUrls = ['/', 'projects', 'blogs', 'about-us', 'contact-us']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const MenuButton = styled(Button)({
	textAlign: 'center',
	boxShadow: 'none',
	textTransform: 'uppercase',
	fontSize: 14,
	padding: '6px 12px',
	margin: '0 2px',
	border: 'none',
	lineHeight: 1.5,
	backgroundColor: 'transparent',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"'
	].join(','),
	'&:hover': {
		backgroundColor: '#127F06',
		border: '0 0 0 10px solid #000',
		color: '#fff',
		boxShadow: 'none'
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#000',
		borderColor: '#005cbf'
	},
	'&:focus': {
		boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)'
	}
})

export default function SeedMenu() {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const handleOpenNavMenu = (event: any) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: any) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar
			position="static"
			color="default"
			sx={{
				display: {
					xs: 'none',
					md: 'block',
					background: '#fff',
					boxShadow: 'none'
				}
			}}
		>
			<Container>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={3}>
						<Typography variant="h6" noWrap component="div">
							<Link href={pagesUrls[0]}>
								<a>
									<Image
										width="160"
										src={SeedLogoBlack}
										alt="Seed Logo Black"
									/>
								</a>
							</Link>
						</Typography>
					</Grid>

					<Grid item>
						<Box>
							{pages.map((page, index) => (
								<MenuButton
									key={page}
									href={pagesUrls[index]}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, display: 'inline-block' }}
									color="primary"
								>
									{page}
								</MenuButton>
							))}
						</Box>
					</Grid>

					<Grid item xs={3} sx={{ textAlign: 'right' }}>
						<Button
							sx={{ dislay: 'block' }}
							href="/login"
							color="primary"
							variant="outlined"
							disabled
						>
							Нэвтрэх
						</Button>
					</Grid>
				</Grid>

				{/* MOBILE -- START */}

				{/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Mobile
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

				{/* MOBILE -- END */}

				{/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
				{/* </Box> */}
			</Container>
		</AppBar>
	)
}
