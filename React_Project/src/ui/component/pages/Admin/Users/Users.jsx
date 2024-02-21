import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { Visibility } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { BE_URL } from '../../../../../../config';

export default function Users() {
  let[user, setUser] = useState([]);
  let {token} = useSelector((state)=>state?.authReducer);
  useEffect(()=>{
    axios({
      method: "get",
      url:`${BE_URL}/user/getAll`,
      headers:{
        authorization: `Bearer ${token}`,
      },  
    })
    .then((res)=>{
      setUser(res?.data?.data);
      console.log("---res---",res);
    })
    .catch((err)=>{
      toast.error(err.message);
      console.log("---err---",err);
    })
  },[]);
  return (
    <>
    <div className="m-4">
        <Table striped>
          <thead>
            <tr>
              <th>SR</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {user?.map?.((e, i) => {
              return (
                <tr key={e?._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.age}</td>
                  {/* <td>{"city name"}</td> */}
                  <td>
                    <Visibility role="button" color="#747272" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}
