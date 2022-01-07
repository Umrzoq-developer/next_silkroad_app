// import { useUsersQuery } from "@/graphql/user";
import React from "react";
import styles from "styles/card.module.scss";

const Users: React.FC = () => {
  // const usersQuery = useUsersQuery();

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
