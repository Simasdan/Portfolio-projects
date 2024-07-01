import { useEffect, useState } from 'react';
import { UserData } from '../../api/apiModel';
import AccountIcon from '../../assets/static/icons/icon_account.svg?react';
import styles from './commentItem.module.scss';

interface CommentItemProps {
  users: UserData[] | null;
  id: string;
  userId: number;
  comment: string;
}

function CommentItem({ users, id, userId, comment }: CommentItemProps) {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (!users) return;

    const currentUser = users.find((person) => person.id === userId.toString());
    if (currentUser) setUser(currentUser);
  }, [users, userId]);

  const getUserImg = () => user?.img;

  const getUserName = () => {
    if (!user) return 'Anonymous user';
    if (user.name && user.surname) return `${user.name} ${user.surname}`;
    return user.userName || 'Anonymous user';
  };

  return (
    <div key={id} className={styles.container}>
      <div className={styles.title}>
        {(!user || !user.img) && <AccountIcon className={styles.account} />}
        {user && user.img && (
          <img src={getUserImg()} alt="User avatar" referrerPolicy="no-referrer" />
        )}
        <p className={styles.name}>{getUserName()}</p>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
}

export default CommentItem;
