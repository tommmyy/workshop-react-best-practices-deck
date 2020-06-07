import { themes } from 'mdx-deck';
import chroma from 'chroma-js';
import { vsDark } from '@code-surfer/themes';
import { mergeDeepRight } from 'ramda';
import { mergeDeepRightAll } from 'ramda-extension';
import prism from './prism';

import { darkGray, green, blue, red, white } from './sqnColors';

const { dark } = themes;

const subtitleBase = {
	fontSize: '1.8rem',
	fontWeight: 'heading',
	textTransform: 'uppercase',
	position: 'relative',
	variant: 'text.heading',
	fontFamily: 'heading',

	'&:after': {
		position: 'absolute',
		bottom: '-8px',
		left: '50%',
		transform: 'translate(-50%, 0)',
		height: '5px',
		width: '50px',
		content: '""',
	},
};

const subtitle = {
	...mergeDeepRight(subtitleBase, {
		'&:after': {
			background: red,
		},
	}),
	secondary: mergeDeepRight(subtitleBase, {
		'&:after': {
			background: red,
		},
	}),
};

export const theme = mergeDeepRightAll([
	dark,
	prism,
	{
		blue,
		green,
		red,
		white,
		darkGray,
		googleFont: 'https://fonts.googleapis.com/css?family=Montserrat',
		fonts: {
			body: 'Montserrat, system-ui, sans-serif',
			heading: 'Montserrat, system-ui, sans-serif',
			monospace: 'Menlo, monospace',
		},
		fontWeights: { body: '300', heading: '400' },
		colors: {
			text: darkGray,
			background: white,
			backgroundBroke: red,
			primary: red,
			link: red,
			pre: darkGray,
			preBackground: darkGray,
			code: darkGray,
		},
		text: {
			heading: {
				fontFamily: 'heading',
			},
			body: {
				fontFamily: 'body',
			},
		},
		styles: {
			h1: {
				fontFamily: 'heading',
				textTransform: 'uppercase',
			},
			h2: subtitle,
			subtitle,
			// used by code-surfer
			h4: subtitle,
			a: {
				fontFamily: 'body',
				textDecoration: 'none',
				color: 'primary',
				borderBottom: `0.03em dashed ${chroma(white)
					.alpha(0.5)
					.hex()}`,

				'&:hover': {
					color: 'primary',
				},
			},
			ul: {
				listStyle: 'none',
				margin: '0',
				padding: '0',
			},
			li: {
				fontFamily: 'body',
				fontSize: '1.777em',
				marginBottom: '0.7em',
				textAlign: 'center',
				dense: {
					fontSize: '1em',
					marginBottom: '0.4em',
				},
			},
			blockquote: {
				backgroundColor: '#777',
				'border-left': '10px solid #ccc',
				margin: 2,
				maxWidth: ['100%', '70%'],
				padding: '0.5em 10px',
				quotes: '"“" "”"',

				'&:before': {
					color: 'primary',
					content: 'open-quote',
					'font-size': '4em',
					'line-height': '0.1em',
					'margin-right': '0.25em',
					'vertical-align': '-0.4em',
				},
				p: {
					display: 'inline',
					fontWeight: 'body',
					fontFamily: 'body',
				},
			},
			Small: {
				fontSize: '0.777em',
			},
			Slide: {
				background: 'white',
				fontFamily: 'body',
			},
			CodeSurfer: {
				...vsDark.styles.CodeSurfer,
				pre: {
					backgroundColor: darkGray,
				},
				code: {
					backgroundColor: darkGray,
				},
				title: {
					backgroundColor: darkGray,
				},
			},
		},
	},
]);

console.log({ theme });
