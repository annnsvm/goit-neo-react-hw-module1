import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ list }) => {
  return (
    <>
      <ul className={css.list}>
        {list.map((friend) => {
          return (
            <li key={friend.id} className={css.item}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FriendList;

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
