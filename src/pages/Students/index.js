import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';

import { Container } from '../../styles/global.styles';
import { ProfilePicture } from './styled';
import axios from '../../config/axios.config';

export default function Students() {
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    async function getStudents() {
      const response = await axios.get('/students');
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
        <ul>
          {students.map((student) => (
            <div key={String(student.id)}>
              <ProfilePicture>
                {get(student, 'Fotos[0].url', false) ? (
                  <img src={student.Fotos[0].url} alt="User avatar" />
                ) : (
                  <FaUserCircle size={50} />
                )}
                <span>{student.nome}</span>
                <span>{student.email}</span>
              </ProfilePicture>
            </div>
          ))}
        </ul>
      </Container>
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}
