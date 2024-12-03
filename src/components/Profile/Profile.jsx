import css from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrap}>
      <div className={css.profile}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.spanTitle}>Followers</span>
          <span className={css.spanValue}>{stats.followers}</span>
        </li>

        <li className={css.item}>
          <span className={css.spanTitle}>Views</span>
          <span className={css.spanValue}>{stats.views}</span>
        </li>

        <li className={css.item}>
          <span className={css.spanTitle}>Likes</span>
          <span className={css.spanValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
