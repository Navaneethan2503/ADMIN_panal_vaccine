import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col, Table } from "react-bootstrap";
import { getAllConfirmed } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const Confirmed = (props) => {

  const confirmed = useSelector(state => state.confirmed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllConfirmed());
  }, [] );


  return(
       <Layout sidebar >
    <Table style={{ fontSize: 12 }} class="table-responsive"  >
        <thead class="thead-dark" >
          <tr>
            <th>#</th>
            <th>Age</th>
            <th>Gender</th>
            <th>CoronaAffected</th>
            <th>No_of_Times</th>
            <th>currentstatus</th>
            <th>problems</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody class="table table-striped">
          {confirmed.confirm.length > 0
            ? confirmed.confirm.map((confirmed) => (
                <tr key={confirmed._id}>
                  <td>#</td>
                  <td>{confirmed.age}</td>
                  <td>{confirmed.gender}</td>
                  <td>{confirmed.coronaAffected}</td>
                  <td>{confirmed.notimes}</td>
                  <td>
                   { confirmed.currentstatus }
                  </td>
                  <td>
                   { confirmed.problems }
                  </td>
                  <td>
                   { confirmed.token }
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      </Layout>
     ); 
  };

export default Confirmed