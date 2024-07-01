'use client';
import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { tabsButtonsList } from '@/constant/variables';
import ProfileCard from '@/components/ui/ProfileCard';
import useUser from '@/services/hooks';

const Home: React.FC = () => {
  const [active, setActive] = useState<string | number>('');

  const { data, error, isFetching, refetch } = useUser(active);

  const getClickedItem = async (id: number) => {
    setActive(id);
    await refetch();
  };
  return (
    <div className="mx-auto px-4 z-10 w-full max-w-3xl text-sm">
      <Tabs
        buttonsList={tabsButtonsList}
        getClickedItem={getClickedItem}
        selected={active}
        loading={isFetching}
      />
      <div className="mt-8">
        {isFetching && active ? (
          <SkeletonLoader />
        ) : error ? (
          <div className="text-rose-600">Error loading user data</div>
        ) : active !== null && data ? (
          <ProfileCard user={data} />
        ) : (
          <div>Select a user to see their profile</div>
        )}
      </div>
    </div>
  );
};

export default Home;
