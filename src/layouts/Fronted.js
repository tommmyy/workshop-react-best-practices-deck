/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import { Small, MetaList } from '../components';

export const Wrapper = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-direction: column;
		fontFamily: body;
		background:	${p => p.theme[p.color]};

		& h1 {
			margin: 0;
		}

	}
`;

const Fronted = ({ children, ...rest }) => {
	const [title, subtitle, meta, footer, ...restChildren] = React.Children.toArray(children);

	return (
		<Wrapper {...rest} color="darkGray" sx={{ fontFamily: 'body', color: 'white' }}>
			{title}
			<h2 sx={{ variant: 'styles.subtitle.secondary', fontFamily: 'body', pb: 3, mb: 4, color: 'white' }}>
				{subtitle.props.children}
			</h2>
			<MetaList>{meta.props.children}</MetaList>
			<p>
				<Small as="span">{footer.props.children}</Small>
			</p>
			{restChildren}
		</Wrapper>
	);
};

export default Fronted;
