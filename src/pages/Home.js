import React from 'react';
import { Feature, OptForm } from '../components';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';
const Home = () => {
	return (
		<>
			<HeaderContainer>
				<OptForm>
					<Feature>
						<Feature.Title>Unlimited films, TV programs, and more.</Feature.Title>
						<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
						<OptForm.Input placeholder='Email Address' />
						<OptForm.Button>Try it now</OptForm.Button>
						<OptForm.Break />
						<OptForm.Text>
							Ready to watch? Enter your email to create or restart your membership.
						</OptForm.Text>
					</Feature>{' '}
				</OptForm>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
};

export default Home;
