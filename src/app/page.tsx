'use client';
import React, { useEffect, useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { tabsButtonsList } from '@/constant/variables';
import ProfileCard from '@/components/ui/ProfileCard';
import useUser from '@/services/hooks';
import { TabButton } from '@/types';
import { useLogContext } from '@/providers/LogProvider';
import useClock from '@/hooks/useClock';

const Home: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const { enableLogs } = useLogContext();
  const { data, error, isFetching } = useUser(active);
  const time = useClock();
  const getClickedItem = (rec: TabButton) => {
    setActive(rec.email);
  };
  useEffect(() => {
    if (enableLogs && data) {
      console.log(`data: ${JSON.stringify(data)}, time: ${time}`);
    }
  }, [data]);
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
