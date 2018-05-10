import React from 'react';

const valid = (item) => typeof item !== 'undefined' && item !== null && item.trim() !== "";

const Social = (props = {}) =>
{
	const youtube = valid(props.profile.youtube)
		? <li>
			<a href={`https://www.youtube.com/user/${props.profile.youtube}`} target="_blank" title="Follow my videos on YouTube (new window)"><img src="images/icons/youtube-icon.svg" alt="YouTube"/><span >YouTube</span></a>
		</li> : null;

	const facebook = valid(props.profile.facebook)
		? <li>
			<a href={`https://www.facebook.com/${props.profile.facebook}`} target="_blank" title="Connect with me on Facebook (new window)"><img src="images/icons/facebook-icon.svg" alt="Facebook"/><span>Facebook</span></a>
		</li> : null;

	const twitter = valid(props.profile.twitter)
		? <li>
			<a href={`https://twitter.com/${props.profile.twitter}`} target="_blank" title="Follow my tweets on Twitter (new window)"><img src="images/icons/twitter.svg" alt="Twitter"/><span>Twitter</span></a>
		</li> : null;

	const linkedIn = valid(props.profile.linkedIn)
		? <li>
			<a href={`https://www.linkedin.com/in/${props.profile.linkedIn}`} target="_blank" title="Connect with me on LinkedIn (new window)"><img src="images/icons/linkedin-icon.svg" alt="LinkedIn"/><span>LinkedIn</span></a>
		</li> : null;

	const google = valid(props.profile.google)
		? <li>
			<a href={`https://plus.google.com/${props.profile.google}`} target="_blank" title="Connect with me on Google+ (new window)"><img src="images/icons/google-plus.svg" alt="Google+" /><span>Google+</span></a>
		</li> : null;

	return (
		<ul>
			{ youtube }
			{ facebook }
			{ twitter }
			{ linkedIn }
			{ google }
		</ul>
	);
};


export default Social;
