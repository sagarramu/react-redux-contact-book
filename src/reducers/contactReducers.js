import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_SELECTED_CONTACT } from '../constant/type';

const intialState = {

    contacts: [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "phone": "1-770-736-8031 x56442"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "phone": "010-692-6593 x09125"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "phone": "1-463-123-4447"
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "phone": "493-170-9623 x156"
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "phone": "(254)954-1289"
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "email": "Karley_Dach@jasper.info",
            "phone": "1-477-935-8478 x6430"
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "email": "Telly.Hoeger@billy.biz",
            "phone": "210.067.6132"
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "email": "Sherwood@rosamond.me",
            "phone": "586.493.6943 x140"
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "email": "Chaim_McDermott@dana.io",
            "phone": "(775)976-6794 x41206"
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "email": "Rey.Padberg@karina.biz",
            "phone": "024-648-3804"
        }
    ],
    contact: null,
    selectedContacts: [],
}

export const contactReducer = (state = intialState, action) => {
    switch (action.type) {

        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
            }
        case GET_CONTACT:
            let arr = state.contacts.filter(
                (contact) => contact.id == action.payload
            );

            arr = arr.values();

            for (let val of arr) {
                arr = val;
            }

            return {
                ...state,
                contact: arr
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id == action.payload.id ? action.payload : contact
                ),
            };

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id != action.payload
                )
            }
        case DELETE_SELECTED_CONTACT:
            return {
                ...state,
                contacts: [],
            };
        case SELECT_CONTACT:
            return {
                ...state,
                selectedContacts: action.payload,
            };

        case CLEAR_CONTACT:
            return {
                ...state,
                selectedContacts: [],
            };

        default:
            return state;

    }

}

