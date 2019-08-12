
import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	
	return (
		<View style = {viewStyle}>
			<Text style = {textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle:{
		backgroundColor: '#FA8072',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#454545',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.4,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

//Make components available to other parts of the App
export default Header;

/*
* Flexbox is a system of positioning elements within a container. 
*/