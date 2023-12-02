import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { deleteDoc, doc } from "firebase/firestore";
import { Db } from "../firebase.config";
import { toast } from "react-toastify";
import useGetData from "../Custom-hooks/usegetData";
const Users = () => {
  const { data: usersData, loading } =useGetData('users');

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(Db, "users", id));
      toast.success('User deleted!');
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error('Error deleting user');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4 className="fw-bold">Users</h4>
          </Col>

          <Col lg='12' className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="pt-5 fw-bold text-center">
                      Loading ....
                    </td>
                  </tr>
                ) : usersData && usersData.length > 0 ? (
                  usersData.map((user) => (
                    <tr key={user.uid}>
                      <td><img src={user.photoURL} alt="" /></td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => deleteUser(user.uid)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="pt-5 fw-bold text-center">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
