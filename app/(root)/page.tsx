import HeaderBox from '@/components/ui/header-box';
import RightSidebar from '@/components/ui/right-sidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content overflow-auto'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title={'Welcome'}
            userName={loggedIn?.name || 'Guest'}
            subtext='Page description'
          />
        </header>
      </div>
      {loggedIn && <RightSidebar
        user={loggedIn}
      />}
    </section>
  )
}

export default Home