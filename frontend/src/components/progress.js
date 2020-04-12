import React from 'react';
import styled from 'styled-components';




const Container = styled.div`

	@media screen and (max-width: 840px)

	#app-progress {
	    z-index: 1014;
	}
	#app-progress {
	    left: 0;
	    position: fixed;
	    right: 0;
	    top: 0;
	    z-index: 1011;
	}
	devsite-progress {
	    pointer-events: none;
	    -webkit-transform-origin: 50% 0%;
	    transform-origin: 50% 0%;
	    -webkit-transform: scaleY(0);
	    transform: scaleY(0);
	    -webkit-transition: -webkit-transform .2s ease;
	    transition: -webkit-transform .2s ease;
	    transition: transform .2s ease;
	    transition: transform .2s ease, -webkit-transform .2s ease;
	}

`;


export const Progress = props => (

	<Container>
	</Container>
)




export default Progress