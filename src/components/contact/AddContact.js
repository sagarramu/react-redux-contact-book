import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { addContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';


const AddContact = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const craeteContact = (e) => {
        e.preventDefault();
        const newContact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }

        dispatch(addContact(newContact));
        history.push('/');
    }

    return (
        <Form onSubmit={(e) => craeteContact(e)}>
            <Col sm={12} lg={12} md={12}>
                <br />
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Col>

            <Col sm={12} lg={12} md={12}>
                <br />
                <label>Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Col>

            <Col sm={12} lg={12} md={12}>
                <br />
                <label>E-mail</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Col>

            <Col sm={12} lg={12} md={12}>
                <br /><br />
                <button className="btn btn-primary" type="submit">Create Contact</button>
            </Col>
        </Form>
    )
}

export default AddContact
