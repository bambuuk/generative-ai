import { FC } from 'react';
import { styled, Link } from '@mui/material';
import { CustomContainer } from './CustomElements';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin, Telegram, Youtube } from './ImgComponents';
import { scrollToSection } from '../utils/scrollToSection';

const FooterUI = styled('footer')(({}) => ({
	width: '100%',
	background: '#151C27',
}));

const MainWrapper = styled('div')(({}) => ({
	padding: '50px 0',
	display: 'flex',
	flexDirection: 'column',
}));

const MainFooterPart = styled('nav')(({ theme }) => ({
	display: 'flex',
	gap: '72px',
	[theme.breakpoints.down(1024)]: {
		flexDirection: 'column',
		alignItems: 'center',
		gap: '50px',
	},
}));

const BrandName = styled('div')(({ theme }) => ({
	color: '#E2E2E2',
	textAlign: 'center',
	fontFamily: 'Work Sans',
	fontSize: '20px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '28px',
	[theme.breakpoints.down(1024)]: {
		marginTop: '50px',
	},
}));

const AuthorsList = styled('div')(({}) => ({
	marginTop: '50px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	color: '#E2E2E2',
	textAlign: 'center',
	fontFamily: 'Work Sans',
	fontSize: '20px',
	fontWeight: '400',
	lineHeight: '28px',
}));

const Author = styled(Link)(({ theme }) => ({
	color: '#E2E2E2',
	textAlign: 'center',
	fontSize: '18px',
	lineHeight: '24px',
	transition: 'all 0.3s',
	textDecoration: 'none',
	'&:hover': {
		'@media (hover: hover) and (pointer: fine)': {
			color: '#CE1AFE',
		},
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '16px',
		lineHeight: '22px',
	},
}));

const LogoWrapper = styled('div')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '31px',
	maxWidth: '262px',
	width: '100%',
}));

const SocialNetworksList = styled('ul')(({}) => ({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	padding: '0 0 3px 0',
}));

const SocialNetwork = styled('li')(({}) => ({
	width: '30px',
	height: '30px',
}));

const SocialNetworkLink = styled(Link)(({}) => ({
	textDecoration: 'none',
}));

const Navigation = styled('nav')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	flexWrap: 'wrap',
	[theme.breakpoints.down('lg')]: {
		gap: '24px',
	},
	[theme.breakpoints.down('sm')]: {
		justifyContent: 'space-around',
	},
}));

const LinkUI = styled('button')(({ theme }) => ({
	outline: 'none',
	background: 'transparent',
	position: 'relative',
	color: '#FFF',
	textAlign: 'center',
	fontFamily: 'Work Sans',
	fontSize: '20px',
	fontWeight: '400',
	lineHeight: '24px',
	transition: 'color 0.3s',
	'&:hover': {
		'@media (hover: hover) and (pointer: fine)': {
			color: '#CE1AFE',
		},
	},
	'&:after': {
		content: '""',
		position: 'absolute',
		bottom: 0,
		right: 0,
		width: 0,
		color: 'transparent',
		background: '#CE1AFE',
		height: '1px',
		transition: 'all 0.7s',
	},
	// '&:active:after': {
	//   width: '100%',
	//   left: 0,
	// }
	[theme.breakpoints.down('lg')]: {
		fontSize: '18px',
		lineHeight: '20px',
	},
}));

const Footer: FC = () => {
	return (
		<FooterUI>
			<CustomContainer>
				<MainWrapper>
					<MainFooterPart>
						<LogoWrapper>
							<Logo />
							<SocialNetworksList>
								<SocialNetwork>
									<SocialNetworkLink href="https://www.facebook.com/genusai" target="_blank">
										<Facebook />
									</SocialNetworkLink>
								</SocialNetwork>
								<SocialNetwork>
									<SocialNetworkLink href="https://www.instagram.com/" target="_blank">
										{' '}
										<Instagram />{' '}
									</SocialNetworkLink>
								</SocialNetwork>
								<SocialNetwork>
									<SocialNetworkLink href="https://www.youtube.com/" target="_blank">
										{' '}
										<Youtube />{' '}
									</SocialNetworkLink>
								</SocialNetwork>
								<SocialNetwork>
									<SocialNetworkLink href="https://web.telegram.org/" target="_blank">
										{' '}
										<Telegram />{' '}
									</SocialNetworkLink>
								</SocialNetwork>
								<SocialNetwork>
									<SocialNetworkLink
										href="https://www.linkedin.com/company/genus-ai/"
										target="_blank"
									>
										{' '}
										<Linkedin />{' '}
									</SocialNetworkLink>
								</SocialNetwork>
							</SocialNetworksList>
						</LogoWrapper>

						<Navigation>
							<LinkUI onClick={() => scrollToSection('home')}>Home</LinkUI>
							<LinkUI onClick={() => scrollToSection('features')}>Features</LinkUI>
							<LinkUI onClick={() => scrollToSection('solution')}>Solution</LinkUI>
							<LinkUI onClick={() => scrollToSection('price')}>Price</LinkUI>
							<LinkUI onClick={() => scrollToSection('testimonials')}>Testimonials</LinkUI>
							<LinkUI onClick={() => scrollToSection('contacts')}>Contacts</LinkUI>
						</Navigation>
					</MainFooterPart>
					<BrandName>Copyright © 2023 Genius AI</BrandName>
					<AuthorsList>
						Made by
						<Author href="https://www.linkedin.com/in/ivan-korobka-328b77208/" target="_blank">
							Ivan Korobka (Front-end developer)
						</Author>
						<Author href="https://www.linkedin.com/in/liliia-pipiia/" target="_blank">
							Liliia Pipiia (UX/UI Designer)
						</Author>
					</AuthorsList>
				</MainWrapper>
			</CustomContainer>
		</FooterUI>
	);
};

export default Footer;
