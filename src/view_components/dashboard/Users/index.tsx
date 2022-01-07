import React from "react";
import styles from "styles/card.module.scss";
import UserItem from "../UserItem";

const Users: React.FC = (props) => {
  return (
    <div className={styles.card__wrapper}>
      {/* {usersQuery?.data?.users &&
        usersQuery?.data?.users?.map((item) => {
          return <UserItem key={item._id} name={item.name} />;
        })} */}
    </div>
  );
};

export default Users;
