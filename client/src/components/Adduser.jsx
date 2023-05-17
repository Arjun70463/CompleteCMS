import { Typography, styled, FormControl, FormGroup, Button, InputLabel, Input } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 10px;
  }
`;

const defaultValue={
    title: '',
    author: '',
    link: '',
    context: ''
}

const Adduser = () => {
    const [user,setuser]=useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        setuser({...user, [e.target.name]:e.target.value});
    }

    const adduserdetails = async() =>{
        await addUser(user);
        navigate('/all')
    }
  return (
    <Container>
      <Typography variant="h3">Create Post</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='title'/>
      </FormControl>
      <FormControl>
        <InputLabel>Author</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='author'/>
      </FormControl>
      <FormControl>
        <InputLabel>Image Link (optional)</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='link'/>
      </FormControl>
      <FormControl>
        <InputLabel>Context</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='context'/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => adduserdetails()}>SUBMIT</Button>
      </FormControl>
    </Container>
  );
};

export default Adduser;
