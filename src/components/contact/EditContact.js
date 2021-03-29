import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { addContact, getContact, updateContact } from '../../actions/contactAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const EditContact = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const contact = useSelector((state) => state.contact.contact);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    }, [contact]);


    const onUpdateContact = (e) => {
        e.preventDefault();
        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        });

        dispatch(updateContact(update_contact));
        history.push('/');
    }

    return (
        <Row>
            <Form onSubmit={(e) => onUpdateContact(e)}>
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
                    <button className="btn btn-warning" type="submit">Update Contact</button>
                </Col>
            </Form>
        </Row>
    )
}

export default EditContact
