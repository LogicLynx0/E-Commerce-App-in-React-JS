import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function Tut1(){
    return(
        <>
        <Typography
            variant='contained'
            color='secondary'
            gutterBottom
        >
        Create a New Page</Typography>
        <Button
            onClick={() => console.log('ypu clicked me')}
            color='error'
            variant='contained'
            
        >
        Submit
        </Button>
        </>
    );
}

export default Tut1;