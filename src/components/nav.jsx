import React from 'react';

const refs = [
	{
		target: "#page-header",
		text: "home"
	},
	{
		target: "#profile",
		text: "profile"
	},
	{
		target: "#skills",
		text: "skills"
	},
	{
		target: "#education",
		text: "education"
	},
	{
		target: "#experience",
		text: "experience"
	},
	{
		target: "#portfolio",
		text: "portfolio"
	},
	{
		target: "#contact",
		text: "contact"
	}
];

const direction = [
	"bounceInRight",
	"bounceInLeft"
];

const modulus = 2;

const Nav = (props = {}) =>
	<ul id={props.id}>
		{ refs.map((ref, index) => <li key={index} className={`animated ${direction[index % modulus]}`}><a href={ref.target}>{ref.text}</a></li>)}
	</ul>;

export default Nav;
