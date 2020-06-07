import styled from '@emotion/styled';

const Inverted = styled.div([], {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

Inverted.defaultProps = {
	color: 'text',
	bg: 'link',
};

export default Inverted;
