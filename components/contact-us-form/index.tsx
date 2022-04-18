import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Input from '@mui/material/Input'

export default function ContactUsForm() {
	return (
		<Container sx={{ my: 10 }}>
			<Grid container alignItems="center">
				<Grid item xs={5}>
					<Typography variant="h3">This will be the map</Typography>
				</Grid>
				<Grid item xs={7} sx={{ bgcolor: '#ecf9f3', p: 5 }}>
					<Grid container>
						<Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
							Бидэнд санал хүсэлтээ бичиж илгээгээрэй
						</Typography>
						<Grid item xs={6} sx={{ px: 2, my: 2 }}>
							<Typography variant="h6" fontWeight="bold">
								Таны нэр
							</Typography>
							<Input
								placeholder="Нэр"
								required={true}
								type="text"
								name="name"
								fullWidth={true}
								sx={{
									py: 1,
									px: 2,
									mt: 2,
									color: '#222',
									bgcolor: 'white'
									// border: '1px solid #127F06'
								}}
							></Input>
						</Grid>
						<Grid item xs={6} sx={{ px: 2, my: 2 }}>
							<Typography variant="h6" fontWeight="bold">
								Утасны дугаар
							</Typography>
							<Input
								placeholder="Утасны дугаар"
								required={true}
								type="phone"
								name="phone"
								inputProps={{ pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' }}
								fullWidth={true}
								sx={{
									py: 1,
									px: 2,
									mt: 2,
									color: '#222',
									bgcolor: 'white'
									// border: '1px solid #127F06'
								}}
							></Input>
						</Grid>
						<Grid item xs={12} sx={{ px: 2, mb: 2 }}>
							<Typography variant="h6" fontWeight="bold">
								И-мэйл хаяг
							</Typography>
							<Input
								placeholder="И-мэйл хаяг"
								required={true}
								type="email"
								name="email"
								fullWidth={true}
								sx={{
									py: 1,
									px: 2,
									mt: 2,
									color: '#222',
									bgcolor: 'white'
									// border: '1px solid #127F06'
								}}
							></Input>
						</Grid>
						<Grid item xs={12} sx={{ px: 2, mb: 2 }}>
							<Typography variant="h6" fontWeight="bold">
								Сэтгэгдэлээ бичнэ үү
							</Typography>
							<Input
								placeholder="Сэтгэгдэлээ бичнэ үү"
								required={true}
								type="text"
								name="text"
								fullWidth={true}
								multiline={true}
								rows="5"
								sx={{
									p: 3,
									my: 2,
									color: '#222',
									bgcolor: 'white'
									// border: '1px solid #127F06'
								}}
							></Input>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}
