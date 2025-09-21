import React from 'react';
import DefaultSvg from '../../assets/icons/default.svg';
import EcommerceSvg from '../../assets/icons/ecommerce.svg';
import ProjectsSvg from '../../assets/icons/projects.svg';
import OnlineCourseSvg from '../../assets/icons/online_course.svg';
import AccountsSvg from '../../assets/icons/accounts.svg';
import CorporateSvg from '../../assets/icons/corporate.svg';
import BlogSvg from '../../assets/icons/blog.svg';
import SocialSvg from '../../assets/icons/social.svg';
import UserProfileSvg from '../../assets/icons/user_profile.svg';

interface IconProps {
  className?: string;
  size?: number;
}
  
export const StarIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 1l2.5 6.5H19l-5.5 4 2 6.5L10 14l-5.5 4 2-6.5L1 7.5h6.5L10 1z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10zM13 13l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14.375 10C14.375 10.8653 14.1184 11.7112 13.6377 12.4306C13.157 13.1501 12.4737 13.7108 11.6742 14.042C10.8748 14.3731 9.99515 14.4597 9.14648 14.2909C8.29781 14.1221 7.51826 13.7054 6.90641 13.0936C6.29456 12.4817 5.87788 11.7022 5.70907 10.8535C5.54026 10.0049 5.6269 9.12519 5.95803 8.32576C6.28916 7.52633 6.84992 6.84305 7.56938 6.36232C8.28885 5.88159 9.13471 5.625 10 5.625C11.1603 5.625 12.2731 6.08594 13.0936 6.90641C13.9141 7.72688 14.375 8.83968 14.375 10Z" fill="currentColor" opacity="0.1"/>
    <path d="M9.375 3.125V1.25C9.375 1.08424 9.44085 0.925268 9.55806 0.808058C9.67527 0.690848 9.83424 0.625 10 0.625C10.1658 0.625 10.3247 0.690848 10.4419 0.808058C10.5592 0.925268 10.625 1.08424 10.625 1.25V3.125C10.625 3.29076 10.5592 3.44973 10.4419 3.56694C10.3247 3.68415 10.1658 3.75 10 3.75C9.83424 3.75 9.67527 3.68415 9.55806 3.56694C9.44085 3.44973 9.375 3.29076 9.375 3.125ZM15 10C15 10.9889 14.7068 11.9556 14.1573 12.7779C13.6079 13.6001 12.827 14.241 11.9134 14.6194C10.9998 14.9978 9.99445 15.0969 9.02455 14.9039C8.05464 14.711 7.16373 14.2348 6.46447 13.5355C5.7652 12.8363 5.289 11.9454 5.09607 10.9755C4.90315 10.0055 5.00216 9.00021 5.3806 8.08658C5.75904 7.17295 6.3999 6.39206 7.22215 5.84265C8.04439 5.29324 9.01109 5 10 5C11.3256 5.00145 12.5966 5.5287 13.5339 6.46606C14.4713 7.40343 14.9986 8.67436 15 10ZM13.75 10C13.75 9.25832 13.5301 8.5333 13.118 7.91661C12.706 7.29993 12.1203 6.81928 11.4351 6.53545C10.7498 6.25162 9.99584 6.17736 9.26841 6.32206C8.54098 6.46675 7.8728 6.8239 7.34835 7.34835C6.8239 7.8728 6.46675 8.54098 6.32206 9.26841C6.17736 9.99584 6.25162 10.7498 6.53545 11.4351C6.81928 12.1203 7.29993 12.706 7.91661 13.118C8.5333 13.5301 9.25832 13.75 10 13.75C10.9942 13.749 11.9475 13.3535 12.6505 12.6505C13.3535 11.9475 13.749 10.9942 13.75 10ZM4.55781 5.44219C4.67509 5.55946 4.83415 5.62535 5 5.62535C5.16585 5.62535 5.32491 5.55946 5.44219 5.44219C5.55946 5.32491 5.62535 5.16585 5.62535 5C5.62535 4.83415 5.55946 4.67509 5.44219 4.55781L4.19219 3.30781C4.07491 3.19054 3.91585 3.12465 3.75 3.12465C3.58415 3.12465 3.42509 3.19054 3.30781 3.30781C3.19054 3.42509 3.12465 3.58415 3.12465 3.75C3.12465 3.91585 3.19054 4.07491 3.30781 4.19219L4.55781 5.44219ZM4.55781 14.5578L3.30781 15.8078C3.19054 15.9251 3.12465 16.0841 3.12465 16.25C3.12465 16.4159 3.19054 16.5749 3.30781 16.6922C3.42509 16.8095 3.58415 16.8753 3.75 16.8753C3.91585 16.8753 4.07491 16.8095 4.19219 16.6922L5.44219 15.4422C5.50026 15.3841 5.54632 15.3152 5.57775 15.2393C5.60917 15.1634 5.62535 15.0821 5.62535 15C5.62535 14.9179 5.60917 14.8366 5.57775 14.7607C5.54632 14.6848 5.50026 14.6159 5.44219 14.5578C5.38412 14.4997 5.31518 14.4537 5.23931 14.4223C5.16344 14.3908 5.08212 14.3747 5 14.3747C4.91788 14.3747 4.83656 14.3908 4.76069 14.4223C4.68482 14.4537 4.61588 14.4997 4.55781 14.5578ZM15 5.625C15.0821 5.62506 15.1634 5.60895 15.2393 5.57759C15.3152 5.54622 15.3841 5.50021 15.4422 5.44219L16.6922 4.19219C16.8095 4.07491 16.8753 3.91585 16.8753 3.75C16.8753 3.58415 16.8095 3.42509 16.6922 3.30781C16.5749 3.19054 16.4159 3.12465 16.25 3.12465C16.0841 3.12465 15.9251 3.19054 15.8078 3.30781L14.5578 4.55781C14.4703 4.64522 14.4107 4.75663 14.3865 4.87793C14.3624 4.99924 14.3748 5.12498 14.4221 5.23924C14.4695 5.35351 14.5496 5.45116 14.6525 5.51982C14.7554 5.58849 14.8763 5.6251 15 5.625ZM15.4422 14.5578C15.3249 14.4405 15.1659 14.3747 15 14.3747C14.8341 14.3747 14.6751 14.4405 14.5578 14.5578C14.4405 14.6751 14.3747 14.8341 14.3747 15C14.3747 15.1659 14.4405 15.3249 14.5578 15.4422L15.8078 16.6922C15.8659 16.7503 15.9348 16.7963 16.0107 16.8277C16.0866 16.8592 16.1679 16.8753 16.25 16.8753C16.3321 16.8753 16.4134 16.8592 16.4893 16.8277C16.5652 16.7963 16.6341 16.7503 16.6922 16.6922C16.7503 16.6341 16.7963 16.5652 16.8277 16.4893C16.8592 16.4134 16.8753 16.3321 16.8753 16.25C16.8753 16.1679 16.8592 16.0866 16.8277 16.0107C16.7963 15.9348 16.7503 15.8659 16.6922 15.8078L15.4422 14.5578ZM3.75 10C3.75 9.83424 3.68415 9.67527 3.56694 9.55806C3.44973 9.44085 3.29076 9.375 3.125 9.375H1.25C1.08424 9.375 0.925268 9.44085 0.808058 9.55806C0.690848 9.67527 0.625 9.83424 0.625 10C0.625 10.1658 0.690848 10.3247 0.808058 10.4419C0.925268 10.5592 1.08424 10.625 1.25 10.625H3.125C3.29076 10.625 3.44973 10.5592 3.56694 10.4419C3.68415 10.3247 3.75 10.1658 3.75 10ZM10 16.25C9.83424 16.25 9.67527 16.3158 9.55806 16.4331C9.44085 16.5503 9.375 16.7092 9.375 16.875V18.75C9.375 18.9158 9.44085 19.0747 9.55806 19.1919C9.67527 19.3092 9.83424 19.375 10 19.375C10.1658 19.375 10.3247 19.3092 10.4419 19.1919C10.5592 19.0747 10.625 18.9158 10.625 18.75V16.875C10.625 16.7092 10.5592 16.5503 10.4419 16.4331C10.3247 16.3158 10.1658 16.25 10 16.25ZM18.75 9.375H16.875C16.7092 9.375 16.5503 9.44085 16.4331 9.55806C16.3158 9.67527 16.25 9.83424 16.25 10C16.25 10.1658 16.3158 10.3247 16.4331 10.4419C16.5503 10.5592 16.7092 10.625 16.875 10.625H18.75C18.9158 10.625 19.0747 10.5592 19.1919 10.4419C19.3092 10.3247 19.375 10.1658 19.375 10C19.375 9.83424 19.3092 9.67527 19.1919 9.55806C19.0747 9.44085 18.9158 9.375 18.75 9.375Z" fill="currentColor"/>
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16.875 10C16.875 11.3597 16.4718 12.689 15.7164 13.8195C14.9609 14.9501 13.8872 15.8313 12.631 16.3517C11.3747 16.872 9.99238 17.0082 8.65876 16.7429C7.32514 16.4776 6.10013 15.8228 5.13864 14.8614C4.17716 13.8999 3.52238 12.6749 3.2571 11.3412C2.99183 10.0076 3.12798 8.62529 3.64833 7.36905C4.16868 6.11281 5.04987 5.03908 6.18046 4.28365C7.31104 3.52821 8.64026 3.125 10 3.125C11.8234 3.125 13.572 3.84933 14.8614 5.13864C16.1507 6.42795 16.875 8.17664 16.875 10Z" fill="currentColor" opacity="0.1"/>
    <path d="M10.625 6.25002V9.64612L13.4469 11.3391C13.589 11.4245 13.6914 11.5628 13.7316 11.7237C13.7717 11.8845 13.7463 12.0548 13.6609 12.1969C13.5756 12.339 13.4372 12.4414 13.2764 12.4816C13.1155 12.5217 12.9453 12.4963 12.8031 12.411L9.67812 10.536C9.58563 10.4804 9.50911 10.4018 9.45599 10.3079C9.40287 10.214 9.37497 10.1079 9.375 10V6.25002C9.375 6.08426 9.44085 5.92529 9.55806 5.80808C9.67527 5.69087 9.83424 5.62502 10 5.62502C10.1658 5.62502 10.3247 5.69087 10.4419 5.80808C10.5592 5.92529 10.625 6.08426 10.625 6.25002ZM10 2.50002C9.01406 2.49757 8.03742 2.69067 7.12661 3.06817C6.21579 3.44566 5.38889 4.00005 4.69375 4.69924C4.12578 5.27424 3.62109 5.82737 3.125 6.40627V5.00002C3.125 4.83426 3.05915 4.67529 2.94194 4.55808C2.82473 4.44087 2.66576 4.37502 2.5 4.37502C2.33424 4.37502 2.17527 4.44087 2.05806 4.55808C1.94085 4.67529 1.875 4.83426 1.875 5.00002V8.12502C1.875 8.29078 1.94085 8.44975 2.05806 8.56696C2.17527 8.68418 2.33424 8.75002 2.5 8.75002H5.625C5.79076 8.75002 5.94973 8.68418 6.06694 8.56696C6.18415 8.44975 6.25 8.29078 6.25 8.12502C6.25 7.95926 6.18415 7.80029 6.06694 7.68308C5.94973 7.56587 5.79076 7.50002 5.625 7.50002H3.82812C4.38672 6.84221 4.94297 6.22268 5.57734 5.58049C6.44598 4.71186 7.55133 4.11847 8.75529 3.87446C9.95924 3.63045 11.2084 3.74665 12.3467 4.20853C13.485 4.67041 14.4619 5.45749 15.1555 6.47144C15.849 7.48538 16.2283 8.68121 16.2461 9.90952C16.2639 11.1378 15.9193 12.3441 15.2554 13.3777C14.5915 14.4113 13.6377 15.2263 12.5132 15.7209C11.3888 16.2155 10.1435 16.3678 8.93299 16.1587C7.72248 15.9496 6.60043 15.3885 5.70703 14.5453C5.64732 14.4889 5.57708 14.4448 5.50032 14.4155C5.42356 14.3862 5.34179 14.3724 5.25967 14.3747C5.17754 14.377 5.09668 14.3955 5.0217 14.429C4.94672 14.4626 4.87908 14.5106 4.82266 14.5703C4.76623 14.63 4.72212 14.7003 4.69283 14.777C4.66355 14.8538 4.64967 14.9356 4.652 15.0177C4.65432 15.0998 4.67279 15.1807 4.70636 15.2557C4.73993 15.3306 4.78795 15.3983 4.84766 15.4547C5.73785 16.2948 6.82012 16.9042 8 17.2298C9.17989 17.5554 10.4215 17.5873 11.6166 17.3226C12.8116 17.058 13.9237 16.505 14.8559 15.7117C15.788 14.9184 16.5118 13.9091 16.9642 12.7718C17.4165 11.6344 17.5836 10.4037 17.4509 9.18689C17.3182 7.97011 16.8897 6.80431 16.2029 5.79122C15.516 4.77813 14.5916 3.94854 13.5104 3.37485C12.4292 2.80117 11.224 2.50082 10 2.50002Z" fill="currentColor"/>
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M15 7a5 5 0 1 0-10 0c0 5-2 7-2 7h14s-2-2-2-7zM11.73 16a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const DotIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="8" cy="8" r="2" fill="currentColor"/>
  </svg>
);

export const ChartPieIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 2v8l6-6A8 8 0 0 0 10 2z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ShoppingBagIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M6 2L3 6v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-3-4zM3 6h14M8 10a2 2 0 1 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const FolderIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M2 5a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v9a3 3 0 0 0-3-3H2V3zM18 3h-6a4 4 0 0 0-4 4v9a3 3 0 0 1 3-3h7V3z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M16 17v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M14 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 19v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const NotebookIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM6 6h8M6 10h8M6 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ChatIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M18 8A8 8 0 1 1 2 8c0 2.5 1.5 4.7 3.8 6L4 18l4.2-1.8A8 8 0 0 0 18 8z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FilterIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M3 6h14M6 12h8M9 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const AddIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SortIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M7 3v14M7 3l-3 3M7 3l3 3M13 17V3M13 17l3-3M13 17l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 1v4M10 1v4M2 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DotsIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <circle cx="8" cy="3" r="1" fill="currentColor"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="8" cy="13" r="1" fill="currentColor"/>
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "", size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const TrendUpIcon: React.FC<IconProps> = ({ className = "", size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M2 12l5-5 3 3 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 6h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TrendDownIcon: React.FC<IconProps> = ({ className = "", size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M2 4l5 5 3-3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10h4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className = "", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M3 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 5V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 5l1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 9v6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SidebarIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z" fill="currentColor" opacity="0.1"/>
    <path d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z" fill="currentColor"/>
  </svg>
);

// Themed SVG via CSS mask utility; colors with currentColor
export const ThemedSvgIcon: React.FC<IconProps & { src: string }> = ({ className = "", size = 20, src }) => (
  <span
    className={`inline-block ${className}`}
    style={{ width: size, height: size, WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`, WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskSize: 'contain', maskSize: 'contain', backgroundColor: 'currentColor' }}
    aria-hidden="true"
  />
);

// Navbar icon components backed by asset SVGs
export const DefaultNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={DefaultSvg} className={className} size={size} />
);
export const EcommerceNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={EcommerceSvg} className={className} size={size} />
);
export const ProjectsNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={ProjectsSvg} className={className} size={size} />
);
export const CoursesNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={OnlineCourseSvg} className={className} size={size} />
);
export const AccountsNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={AccountsSvg} className={className} size={size} />
);
export const CorporateNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={CorporateSvg} className={className} size={size} />
);
export const BlogNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={BlogSvg} className={className} size={size} />
);
export const SocialNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={SocialSvg} className={className} size={size} />
);
export const UserProfileNavIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <ThemedSvgIcon src={UserProfileSvg} className={className} size={size} />
);