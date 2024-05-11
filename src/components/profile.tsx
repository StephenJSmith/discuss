'use client';

import { useSession } from 'next-auth/react';

const Profile = () => {
  const session = useSession();

  if (!session.data?.user) {
    return <div>From client: User is NOT signed in</div>
  }

  return (
    <div>From client: {JSON.stringify(session.data.user)}</div>
  )
};

export default Profile;
