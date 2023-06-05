import PropTypes from 'prop-types';
import { DeleteBtn, Item, WrapItem, Wrap } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { BsFillTelephoneFill } from 'react-icons/bs';
export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(item.id));

  return (
    <Wrap>
      <BsFillTelephoneFill />
      <WrapItem>
        <Item>{item.name}:</Item>
        <Item>{item.phone}</Item>
      </WrapItem>
      <div>
        <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
      </div>
    </Wrap>
  );
};

ContactItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
}.isRequired;