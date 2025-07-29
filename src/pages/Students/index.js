import React from 'react';
import { toast, ToastContainer } from 'react-toastify'

import { Container } from '../../styles/global.styles';
import axios from '../../config/axios.config';

export default function Students() {
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    async function getStudents() {
      const response = await axios.get('/students');
      setStudents(response.data);
    }

    getStudents().catch(e => {
      console.error("Error fetching students:", e);
      toast("Failed to fetch students. Please try again later.")
    })
  }, []);
  return (
    <>
      <Container>
        <h1>
          Students Page - Home
        </h1>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name} - {student.email}
            </li>
          ))}
        </ul>
      </Container>
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}
