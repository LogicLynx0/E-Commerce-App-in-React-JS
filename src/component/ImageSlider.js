import { Stack } from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

function ImageSlider(){
	return (
		<>	
		<div style={{width: '100%', height:'300px', marginTop:'10px'}}>

		        <img style={{ width: '100%' ,height: '300px', objectFit: "contain"}} src = '/img/nature.jpg' alt='slider' />
			</div>

		

		</>
	)
}
export default ImageSlider;