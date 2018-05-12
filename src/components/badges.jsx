import React from 'react';

const Badges = (props = {}) =>
	<article className="badges">
		{ props.list.map((item, index) =>
			<div key={index}>
				<a target="_blank" href={`https://www.youracclaim.com/badges/${item.issueId}`}><img src={item.badgeImageUrl} /></a>
				{item.badgeName}
			</div>)
		}
	</article>;

export default Badges;
