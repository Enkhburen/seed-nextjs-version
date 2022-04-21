import SeedProjectCard from '../../components/project-card'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

import ProjectGrid1 from '../../assets/project/project-grid-01.jpg'
import ProjectGrid2 from '../../assets/project/project-grid-02.jpg'
import ProjectGrid3 from '../../assets/project/project-grid-03.jpg'
import ProjectGrid4 from '../../assets/project/project-grid-04.jpg'
import ProjectGrid5 from '../../assets/project/project-grid-05.jpg'
import ProjectGrid6 from '../../assets/project/project-grid-06.jpg'

export default function ProjectPageProjectCard() {
	return (
		<div>
			<Grid container sx={{ mb: 5 }}>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid1}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid2}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid3}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
			</Grid>
			<Grid container sx={{ mb: 5 }}>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid4}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid5}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid6}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
			</Grid>
			<Grid container sx={{ mb: 5 }}>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid4}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid5}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
				<Grid item xs={4}>
					<SeedProjectCard
						image={ProjectGrid6}
						alt="Project Grid 1"
						title="Яаралтай Тусламжийн Тасгийнхан МУОАК"
						authorLink="http://seed.mn/"
						author="EKU"
						href="http://seed.mn/"
					/>
				</Grid>
				<Button sx={{ my: 5, mx: 'auto' }} variant="contained" disabled>
					<ExpandCircleDownIcon sx={{ mr: 1 }} />
					Нэмж үзэх
				</Button>
			</Grid>
		</div>
	)
}
