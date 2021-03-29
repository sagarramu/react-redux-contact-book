import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contactAction';

const Contact = ({ contact, selectAll }) => {
    const { name, phone, email, id } = contact;
    const dispatch = useDispatch();
    return (

        <tr>
            <td> <input
                checked={selectAll}
                type="checkbox"
            /></td>
            <td>
                {name}
            </td>
            <td>
                {phone}
            </td>
            <td>
                {email}
            </td>
            <td>
                <Link to={`contact/edit/${id}`}>
                    EDIT |
                </Link>
                <Link to={''} onClick={() => dispatch(deleteContact(id))} >
                    &nbsp;DELETE
                </Link>
            </td>
        </tr >
    )
}

export default Contact;