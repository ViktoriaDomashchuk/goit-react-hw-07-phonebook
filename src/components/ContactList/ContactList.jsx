import PropTypes from 'prop-types';
import { List, Contact } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <List>
        <div>
          {contacts.map(contact => (
            <Contact key={contact.id}>
              <ContactItem item={contact} />
            </Contact>
          ))}
        </div>
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};