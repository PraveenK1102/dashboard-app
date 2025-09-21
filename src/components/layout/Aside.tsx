import React from 'react';
import { UserIcon } from '../icons';
import BugSvg from '../../assets/icons/bug.svg';
import SubscribeSvg from '../../assets/icons/subscibe.svg';
import Avatar1 from '../../assets/icons/activities/1.png';
import Avatar2 from '../../assets/icons/activities/2.png';
import Avatar3 from '../../assets/icons/activities/3.png';
import Avatar4 from '../../assets/icons/activities/4.png';
import Avatar5 from '../../assets/icons/activities/5.png';
import Contact1 from '../../assets/icons/contacts/1.png';
import Contact2 from '../../assets/icons/contacts/2.png';
import Contact3 from '../../assets/icons/contacts/3.png';
import Contact4 from '../../assets/icons/contacts/4.png';
import Contact5 from '../../assets/icons/contacts/5.png';
import Contact6 from '../../assets/icons/contacts/6.png';

interface AsideProps {
  isOpen: boolean;
}

const Aside: React.FC<AsideProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  const notifications = [
    { id: 'n1', icon: 'bug' as const, text: 'You have a bug that needs to be fixed.', time: 'Just now' },
    { id: 'n2', icon: 'user' as const, text: 'New user registered', time: '59 minutes ago' },
    { id: 'n3', icon: 'bug' as const, text: 'You have a bug that needs to be fixed.', time: '12 hours ago' },
    { id: 'n4', icon: 'subscribe' as const, text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
  ];

  const activities = [
    { id: 'a1', avatar: Avatar1, text: 'You have a bug that needs to be fixed.', time: 'Just now' },
    { id: 'a2', avatar: Avatar2, text: 'Released a new version', time: '59 minutes ago' },
    { id: 'a3', avatar: Avatar3, text: 'Submitted a bug', time: '12 hours ago' },
    { id: 'a4', avatar: Avatar4, text: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
    { id: 'a5', avatar: Avatar5, text: 'Deleted a page in Project X', time: 'Feb 2, 2023' },
  ];

  const contacts = [
    { id: 'c1', name: 'Natali Craig', avatar: Contact1 },
    { id: 'c2', name: 'Drew Cano', avatar: Contact2 },
    { id: 'c3', name: 'Orlando Diggs', avatar: Contact3 },
    { id: 'c4', name: 'Andi Lane', avatar: Contact4 },
    { id: 'c5', name: 'Kate Morrison', avatar: Contact5 },
    { id: 'c6', name: 'Koray Okumus', avatar: Contact6 },
  ];

  const renderNotificationIcon = (type: 'bug' | 'user' | 'subscribe') => {
    const baseWrapper = 'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0';
    if (type === 'bug') {
      return (
        <div className={baseWrapper} style={{ backgroundColor: '#E3F5FF' }}>
          <img src={BugSvg} alt="Bug" className="w-4 h-4" />
        </div>
      );
    }
    const neutralWrapperClass = `${baseWrapper} text-black-100`;
    const neutralStyle = { backgroundColor: '#E5ECF6' } as const;
    if (type === 'user') return <div className={neutralWrapperClass} style={neutralStyle}><UserIcon size={16} /></div>;
    return (
      <div className={neutralWrapperClass} style={neutralStyle}>
        <img src={SubscribeSvg} alt="Subscribe" className="w-4 h-4" />
      </div>
    );
  };

  return (
    <aside className="flex flex-col w-[280px] h-full border-l border-black-10 dark:border-white-10 bg-white dark:bg-black dark:bg-opacity-[0.7]   px-5 py-5 gap-6 overflow-y-auto">
      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-black-100 dark:text-white">Notifications</h2>
        <div className="space-y-4">
          {notifications.map(n => (
            <div key={n.id} className="flex gap-3 items-start">
              {renderNotificationIcon(n.icon)}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-black-100 dark:text-white truncate">{n.text}</p>
                <p className="text-xs text-black-40 dark:text-white-40 mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-black-100 dark:text-white">Activities</h2>
        <div className="space-y-4">
          {activities.map(a => (
            <div key={a.id} className="flex gap-2">
              <img src={a.avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-black-100 dark:text-white truncate">{a.text}</p>
                <p className="text-xs text-black-40 dark:text-white-40 mt-1">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-black-100 dark:text-white">Contacts</h2>
        <div className="space-y-3">
          {contacts.map(c => (
            <div key={c.id} className="flex items-center gap-2 min-w-0">
              <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
              <span className="text-sm text-black-100 dark:text-white truncate flex-1">{c.name}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Aside;