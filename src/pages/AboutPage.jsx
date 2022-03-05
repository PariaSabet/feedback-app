import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>This is about page</h1>
				<p>This is done by Paria :)</p>
				<p>
					<Link to="/">Back to homepage</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
