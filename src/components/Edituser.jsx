import { Typography, styled, FormControl, FormGroup, Button, InputLabel, Input } from '@mui/material';
import { useState, useEffect } from 'react';
import { editUser, getUser } from '../service/api';
import {useNavigate, useParams} from 'react-router-dom';


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

const Edituser = () => {
    const [user,setUser]=useState(defaultValue);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        loaduserdetails();
        // eslint-disable-next-line
    }, []);


    const loaduserdetails= async() =>{
        let response = await getUser(id);
        setUser(response.data); 
    }

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value});
    }

    const edituserdetails = async() =>{
        await editUser(user, id);
        navigate('/all')
    }
  return (
    <Container>
      <Typography variant="h3">Update Post</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="title" />
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
        <Button variant="contained" onClick={() => edituserdetails()}>UPDATE</Button>
      </FormControl>
    </Container>
  );
};

export default Edituser;
