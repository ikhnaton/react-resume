import React from 'react';
const sortAfter = 1;
const sortBefore = -1;

// target = key to pass to onClick
// text = text to display
// imageSource = path to image
// click = function to handle click evengt

const Skill = (props = {}) =>

	<li onClick={() => props.click(props.target)}>
		<img src={props.imageSource} onClick={() => props.click(props.target)} className={props.imageOnly === true ? "solo-img" : "" }/>
		<span onClick={() => props.click(props.target)}>{props.imageOnly === true ? "" : props.text}</span>
	</li>;

class Skills extends React.Component
{
	constructor()
	{
		super();
	}

	handler(target)
	{
		window.open(target);
	}

	render()
	{
		const rows = this.props.list.sort((a, b) =>
		{
			if (a.text.toLowerCase() > b.text.toLowerCase())
			{
				return sortAfter;
			}
			return sortBefore;
		}).map((item, index) => <Skill key={index}
			target={item.target}
			imageSource={item.imageSource}
			text={item.text}
			imageOnly={item.imageOnly}
			click={this.handler} />);

		return (
			<ul>
				{rows}
			</ul>
		);
	}
}
export default Skills;
