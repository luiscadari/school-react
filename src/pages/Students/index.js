import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/global.styles';
import { ProfilePicture, StudentContainer } from './styled';
import axios from '../../config/axios.config';

export default function Students() {
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    async function getStudents() {
      const response = await axios.get('/students');
      console.log(response.data);
      setStudents(response.data);
    }

    getStudents().catch((e) => {
      console.error('Error fetching students:', e);
      toast('Failed to fetch students. Please try again later.');
    });
  }, []);
  return (
    <>
      <Container>
        <h1>Students Page - Home</h1>
        <StudentContainer>
          {students.map((student) => (
            <div key={String(student.id)}>
              <ProfilePicture>
                {get(student, 'Fotos[0].url', false) ? (
                  <img src={student.Fotos[0].url} alt="User avatar" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
              <span>{student.name}</span>
              <span>{student.email}</span>
              <Link to={`/student/${student.id}/edit`}>
                <FaEdit size={16}></FaEdit>
              </Link>
              <Link to={`/student/${student.id}/delete`}>
                <FaWindowClose size={16}></FaWindowClose>
              </Link>
            </div>
          ))}
        </StudentContainer>
      </Container>
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}
