import React from 'react';

const Course = (props = {}) => <dd className="course-dd-li">{props.name}</dd>;

class OtherEd extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		const ed = this.props.info;
		const training =
			<dl>
				{ ed.groups.map((row, index) =>
				{
					const data = <dt key={index}>{row.name}</dt>;
					const courses = (row.list || []).map((course, cindex) => <Course name={course} key={`${index}-${cindex}`}/>);
					return [
						data,
						...courses
					];
				})}
			</dl>;

		return (
			<article>
				<h3>{ed.heading}</h3>
				{training}
			</article>
		);
	}
}
export default OtherEd;
