import React from 'react';
import School from './school.jsx';
import OtherEd from './other-ed.jsx';

class Education extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		const rows = this.props.list.map((item, index) =>
		{
			switch (item.type.toLowerCase())
			{
			case "school":
				return <School info={item} key={index}/>;

			case "other-education":
				return <OtherEd info={item} key={index}/>;

			default:
				// do nothing
				return null;
			}
		});

		return (
			<div>
				{rows}
			</div>
		);
	}
}

export default Education;
