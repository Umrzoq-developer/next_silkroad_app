// import { useUsersQuery } from "@/graphql/user";
import React, { lazy, Suspense } from "react";
// import UserItem from '../UserItem';
import styles from "styles/card.module.scss";
import UserItem from "../UserItem";

const Users: React.FC = () => {
  // const usersQuery = useUsersQuery();

  return (
    <Suspense fallback={<div>card uploading</div>}>
      <div className={styles.card__wrapper}>
        {/* {usersQuery?.data?.users &&
          usersQuery?.data?.users?.map((item) => {
            return <UserItem key={item._id} name={item.name} />;
          })} */}
      </div>
    </Suspense>
  );
};

export default Users;
