import React from 'react'

const RightSidebar = (props: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-blue-500'>{props.user?.name[0]}</span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name'>{props.user?.firstName} {props.user?.lastName}</h1>
            <p className='profile-email'>{props.user?.email}</p>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default RightSidebar;