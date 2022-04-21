import ProjectsPageProjectsCard from '../components/projects-project-card'
import { Container } from '@mui/material'

export default function ProjectsPage() {
	return (
		<Container sx={{ my: 10 }}>
			{/* Make it dynamic when backend completes */}
			<ProjectsPageProjectsCard />
		</Container>
	)
}
