import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Wrapper } from './Fronted';

const BrokeBase = styled(Wrapper)`
		color: ${ps => (ps.color === 'white' ? ps.theme.darkGray : null)};

		h1 {
			color: ${ps => (ps.color === 'white' ? ps.theme.colors.primary : null)};

			a {
					border-bottom-color: ${ps => (ps.color === 'white' ? ps.theme.colors.primary : null)};
			}
		}
	},
`;

const Broke = ({ children, ...rest }) => {
	const [title] = React.Children.toArray(children);

	return <BrokeBase {...rest}>{title}</BrokeBase>;
};

Broke.defaultProps = {
	color: 'white',
};

Broke.propTypes = {
	children: PropTypes.node,
	color: PropTypes.oneOf(['red', 'green', 'blue', 'white']),
};

export default Broke;
