import React, { Component, Fragment } from 'react';

const Bullets = (props = {}) =>
{
	if (typeof props.data === 'undefined' || props.data === null || props.data === "")
	{
		return null;
	}
	const rows = props.data.map((row, index) => <li key={index}>{row}</li>);
	return (
		<ul>
			{rows}
		</ul>
	);
};

class Experience extends Component
{
	constructor()
	{
		super();
	}

	isInvalid(item)
	{
		const invalidCompany = typeof item.company === 'undefined' || item.company === null || item.company.trim() === "";
		const invalidPosition = typeof item.position === 'undefined' || item.position === null || item.position.trim() === "";
		const invalidStart = typeof item.start === 'undefined' || item.start === null || item.start.trim() === "";
		const invalidEnd = typeof item.end === 'undefined' || item.end === null || item.end.trim() === "";
		const invalidDescription = typeof item.description === 'undefined' || item.description === null || item.description.trim() === "";

		/* eslint-disable no-extra-parens */
		return invalidCompany || invalidPosition || (invalidStart && invalidEnd) || invalidDescription;
		/* eslint-enable no-extra-parens */
	}

	render()
	{
		const experiences = this.props.list;
		return (
			<article>
				{experiences.map((item, index) =>
				{
					if (this.isInvalid(item))
					{
						return null;
					}

					const location = [
						item.company,
						item.city,
						item.state
					].filter(row => row !== null && row.trim() !== "").join(", ");

					const period = [
						item.start,
						item.end
					].filter(row => row !== null && row.trim() !== "").join(" - ");

					return (
						<Fragment key={index}>
							<h3>{period}</h3>
							<dl>
								<dt>{item.position}: {location}</dt>
								<dd>
									<p>{item.description}</p>
									<Bullets data={item.bullets} />
								</dd>
							</dl>
						</Fragment>
					);
				})
				}
			</article>
		);
	}
}
export default Experience;
