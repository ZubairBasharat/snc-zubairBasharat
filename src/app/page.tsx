'use client';
import Tabs from '@/components/ui/Tabs';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import React, { useState } from 'react';
import { tabsButtonsList } from '@/constant/variables';
import ProfileCard from '@/components/ui/ProfileCard';
const Home: React.FC = () => {
  const [active, setActive] = useState<string | number>('');
  const [loading, setLoading] = useState<boolean>(false);
  const getClickedItem = (id: number) => {
    setLoading(true);
    setActive(id);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="mx-auto px-4 z-10 w-full max-w-3xl text-sm">
      <Tabs
        buttonsList={tabsButtonsList}
        getClickedItem={getClickedItem}
        selected={active}
        loading={loading}
      />
      <div className="mt-8">
        {loading ? <SkeletonLoader /> : active ? <ProfileCard /> : null}
      </div>
    </div>
  );
};

export default Home;
