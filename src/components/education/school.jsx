import React from 'react';

class School extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		const school = this.props.info;
		const subLine = [
			school.subName,
			school.city,
			school.state
		].filter(word => word !== null && word.trim() !== "").join(", ");
		let { name } = school;

		if (school.url !== null && school.url !== "")
		{
			name = <a href={school.url} target="_blank" >{school.name}</a>;
		}
		if (school.program === "degree")
		{
			return (
				<article>
					<h3>{name}</h3>
					<dl>
						<dt>
							{subLine}
						</dt>
						<dd>
							{school.degree}<br/>
							{school.startDate} - {school.endDate}
						</dd>
					</dl>
				</article>
			);
		}
		else if (school.program === "classes")
		{
			return (
				<article>
					<h3>{name}</h3>
					<dl>
						<dt>
							{subLine}
						</dt>
						<dd>
							Classes
							<ul className="school-classes">
								{school.courses.map((row, index) => <li key={index}>{row}</li>)}
							</ul>
						</dd>
					</dl>
				</article>
			);
		}

		return (
			<article>
				<h3 style="color: red;">Unknown Education Program Type</h3>
			</article>
		);
	}
}
export default School;
