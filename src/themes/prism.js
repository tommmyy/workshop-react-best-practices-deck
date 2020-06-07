import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { mergeDeepRight } from 'ramda';

import { darkGray } from './sqnColors';

const lundeStyle = mergeDeepRight(style, {
	'pre[class*="language-"]': { background: darkGray },
});

export const getLanguage = className => {
	const match = /language-(\w*)/.exec(className || 'language-javascript');
	let lang = 'javascript';
	if (match && match.length > 1) {
		lang = match[1];
	}
	return lang;
};

export const pre = props => props.children;

export const code = ({ className, style, ...rest }) => (
	<Prism
		language={getLanguage(className)} className={className} style={{ ...style, ...lundeStyle }}
		{...rest}
	/>
);

export default {
	components: {
		pre,
		code,
	},
};
