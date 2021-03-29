import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllContact, clearAllContact, deleteAllContact } from "../../actions/contactAction";

import { Table } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = () => {

    const contacts = useSelector((state) => state.contact.contacts);
    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch();
    const selctedContcats = useSelector(
        (state) => state.contact.selectedContacts
    );


    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        } else {
            dispatch(clearAllContact());
        }
    }, [selectAll]);


    return (
        <div>
            {selctedContcats.length > 0 ? (
                <button
                    className="btn btn-danger mb-3"
                    onClick={() => dispatch(deleteAllContact())}
                >
                    delete all
                </button>
            ) : null}
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th> <input
                            id="selectAll"
                            type="checkbox"
                            value={selectAll}
                            onClick={() => setSelectAll(!selectAll)}
                        /></th>
                        <th> Name </th>
                        <th> Phone </th>
                        <th> Email </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Contact contact={contact} key={contact.id}  selectAll={selectAll} />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Contacts;