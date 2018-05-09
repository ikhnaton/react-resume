import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.jsx';
import Skills from './components/skills.jsx';
import Education from './components/education/education.jsx';
import Experience from './components/experience.jsx';
import { resume } from './resume.js';
//import { BrowserRouter, Link, Route } from 'react-router-dom';
//import { Provider, connect } from 'react-redux';
//import Messages from 'react-error';
//import * as messageActions from 'react-error/actions';
//import store from './store';
//import { Header, Button, Grid, Image, Menu, Icon } from 'semantic-ui-react';
//import { Home, Search, Edit, Save, Download, Layout, Email } from './components/home/Home.jsx';
//import { Me } from './components/me/me.jsx';
//import { getUserAction } from './actions/user';
//import "./main.less";

class App extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state = {
			nav: true
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav()
	{
		this.setState({
			nav: !this.state.nav
		});
	}

	render()
	{
		const navState = this.state.nav ? "nav_closed" : "nav_open";
		const agent = navigator.userAgent;

		const isIOS = navigator.userAgent.match(/iPod|iPhone|iPad/) !== null;

		return (
			<div>
				<nav className={navState} onClick={ this.toggleNav }>
					<a href="#mainnav" id="menu">MENU</a>
					<Nav id="navlist"/>
				</nav>
				<section id="page-header" style={isIOS === true ? {} : { backgroundAttachment: "fixed" } }>
					<header>
						<h1>Niall Cargill</h1>
						<h2>Developer Extraordinaire</h2>
					</header>
				</section>
				<section id="profile" className="page-content">
					<div>
						<header>
							<h1>Personal Profile</h1>
							<h2>who am i</h2>
						</header>
						<article>
							<p>I have eighteen years of professional experience in Architecture, Analysis, Design, and Development.  I have excellent communication skills, mentoring ability, and a strong work ethic.  I am a solid and proven team player and a believer in continued self-education.</p>
						</article>
					</div>
				</section>
				<section id="skills" className={isIOS === true ? "page-content" : "page-content bg-test"}>
					<div>
						<header>
							<h1>Skills</h1>
							<h2>tools of my trade</h2>
						</header>
						<article>
							<Skills list={resume.skills} />
						</article>
					</div>
				</section>
				<section id="education" className="page-content">
					<div>
						<header>
							<h1>Education</h1>
						</header>
						<Education list={resume.education} />
					</div>
				</section>
				<section id="experience" className={isIOS === true ? "page-content" : "page-content bg-test" } >
					<div>
						<header>
							<h1>Experience</h1>
							<h2>where i have worked</h2>
						</header>
						<Experience list={resume.experience} />
					</div>
				</section>
				<section id="portfolio" className="page-content">
					<div>
						<header>
							<h1>Portfolio</h1>
							<h2>see what i have done</h2>
						</header>
						<article>
							<h3>Web Development</h3>
							<ul>
								<li className="niall-portfolio">
									<a href="portfolio/site1.jpg" data-fluidbox data-lightbox="myPortfolio" data-title="My caption"><img src="portfolio/thumb_site1.jpg" alt="Placeholder" /></a>
								</li>
								<li className="niall-portfolio">
									<a href="portfolio/site2.jpg" data-fluidbox data-lightbox="myPortfolio" data-title="My caption"><img src="portfolio/thumb_site2.jpg" alt="Placeholder" /></a>
								</li>
								<li className="niall-portfolio">
									<a href="portfolio/site3.png" data-fluidbox data-lightbox="myPortfolio" data-title="My caption"><img src="portfolio/thumb_site3.png" alt="Placeholder" /></a>
								</li>
								<li className="niall-portfolio">
									<a href="portfolio/site4.jpg" data-fluidbox data-lightbox="myPortfolio" data-title="My caption"><img src="portfolio/thumb_site4.jpg" alt="Placeholder" /></a>
								</li>
								<li className="niall-portfolio">
									<a href="portfolio/site5.jpg" data-fluidbox data-lightbox="myPortfolio" data-title="My caption"><img src="portfolio/thumb_site5.jpg" alt="Placeholder" /></a>
								</li>
								<li className="niall-portfolio">
									<a href="portfolio/site6.jpg" data-fluidbox data-lightbox="myPortfolio" data-title="My caption"><img src="portfolio/thumb_site6.jpg" alt="Placeholder" /></a>
								</li>
							</ul>
						</article>
						<article id="lightboxControls">
							<h3>Click images to view using Lightbox2</h3>
							<button id="fluidboxButton">Use Fluidbox</button>
							<button id="lightboxButton">Use Lightbox2</button>
						</article>
					</div>
				</section>
				<section id="contact" className="page-content">
					<div>
						<header>
							<h1>Contact</h1>
							<h2>get in touch with me</h2>
						</header>
						<article>
							<p><a href="" id="reach">my.email@gmail.com</a></p>
							<ul>
								<li>
									<a href="#" target="_blank" title="Follow my videos on YouTube (new window)"><img src="images/icons/youtube-icon.svg" alt="YouTube"/><span >YouTube</span></a>
								</li>
								<li>
									<a href="#" target="_blank" title="Connect with me on Facebook (new window)"><img src="images/icons/facebook-icon.svg" alt="Facebook"/><span>Facebook</span></a>
								</li>
								<li>
									<a href="#" target="_blank" title="Follow my tweets on Twitter (new window)"><img src="images/icons/twitter.svg" alt="Twitter"/><span>Twitter</span></a>
								</li>
								<li>
									<a href="#" target="_blank" title="Connect with me on LinkedIn (new window)"><img src="images/icons/linkedin-icon.svg" alt="LinkedIn"/><span>LinkedIn</span></a>
								</li>
								<li>
									<a href="#" target="_blank" title="Connect with me on Google+ (new window)"><img src="images/icons/google-plus.svg" alt="Google+" /><span>Google+</span></a>
								</li>
							</ul>
						</article>
					</div>
				</section>
			</div>
		);
	}
}

const speed = navigator.userAgent.match(/Safari/) === null ? 1500 : 500; //time in milliseconds
const intervalTimeHandicap = 10; //number of milliseconds to process the interval

function doTheScroll(event)
{
	const atarget = event.currentTarget.getAttribute('href');
	const target = document.querySelector(atarget);
	event.preventDefault();

	const scrollNode = document.scrollingElement
		? document.scrollingElement : document.body;

	const diff = target.offsetTop - scrollNode.scrollTop;
	const parms = {
		increment: diff / (speed / intervalTimeHandicap),
		current: scrollNode.scrollTop,
		stopAt: Math.abs(diff),
		counter: 0
	};

	const interval = setInterval(() =>
	{
		parms.current += parms.increment;
		scrollNode.scrollTop = parms.current;
		parms.counter += parms.increment;
		if (Math.abs(parms.counter) >= parms.stopAt)
		{
			clearInterval(interval);
			location.href = atarget;
		}
	}, Math.abs(speed / diff));
}

document.addEventListener("DOMContentLoaded", (event) =>
{
	ReactDOM.render(
		<App/>,
		document.getElementById("root")
	);

	const refs = document.querySelectorAll("a[href^='#']");

	for (let item = 0; item < refs.length; item++)
	{
		if (refs[item].id !== "menu")
		{
			refs[item].addEventListener('click', doTheScroll, true);
		}
	}

	const setty = document.querySelector('section#education');
});
