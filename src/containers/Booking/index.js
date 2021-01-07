import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col, Table } from "react-bootstrap";
import { getAllBooking } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const Booking = (props) => {

	const booking = useSelector(state => state.booking);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllBooking());
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
          </tr>
        </thead>
        <tbody class="table table-striped">
          {booking.bookings.length > 0
            ? booking.bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>#</td>
                  <td>{booking.age}</td>
                  <td>{booking.gender}</td>
                  <td>{booking.coronaAffected}</td>
                  <td>{booking.notimes}</td>
                  <td>
                   { booking.currentstatus }
                  </td>
                  <td>
                   { booking.problems }
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      </Layout>
     ); 
  };


export default Booking