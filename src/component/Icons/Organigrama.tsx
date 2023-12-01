import React from "react";
import { Svg,Path } from "react-native-svg";


const Org =()=>{
   return(
           <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
           <Path d="M22.1797 8.5625C22.5312 8.75781 22.8516 8.99609 23.1406 9.27734C23.4297 9.55859 23.6719 9.87109 23.8672 10.2148C24.0625 10.5586 24.2188 10.9219 24.3359 11.3047C24.4531 11.6875 24.5078 12.0859 24.5 12.5H23C23 12.0938 22.9219 11.707 22.7656 11.3398C22.6094 10.9727 22.3945 10.6562 22.1211 10.3906C21.8477 10.125 21.5273 9.91016 21.1602 9.74609C20.793 9.58203 20.4062 9.5 20 9.5C19.5859 9.5 19.1992 9.57812 18.8398 9.73438C18.4805 9.89062 18.1641 10.1055 17.8906 10.3789C17.6172 10.6523 17.4023 10.9727 17.2461 11.3398C17.0898 11.707 17.0078 12.0938 17 12.5C17 13.2109 16.8398 13.8867 16.5195 14.5273C16.1992 15.168 15.75 15.6992 15.1719 16.1211C15.6797 16.3789 16.1367 16.6953 16.543 17.0703C16.9492 17.4453 17.3008 17.8672 17.5977 18.3359C17.8945 18.8047 18.1172 19.3047 18.2656 19.8359C18.4141 20.3672 18.4922 20.9219 18.5 21.5H17C17 20.8828 16.8828 20.3008 16.6484 19.7539C16.4141 19.207 16.0898 18.7305 15.6758 18.3242C15.2617 17.918 14.7852 17.5977 14.2461 17.3633C13.707 17.1289 13.125 17.0078 12.5 17C11.8828 17 11.3008 17.1172 10.7539 17.3516C10.207 17.5859 9.73047 17.9102 9.32422 18.3242C8.91797 18.7383 8.59766 19.2148 8.36328 19.7539C8.12891 20.293 8.00781 20.875 8 21.5H6.5C6.5 20.9297 6.57812 20.3789 6.73438 19.8477C6.89062 19.3164 7.11328 18.8164 7.40234 18.3477C7.69141 17.8789 8.03906 17.457 8.44531 17.082C8.85156 16.707 9.3125 16.3867 9.82812 16.1211C9.25781 15.6992 8.8125 15.168 8.49219 14.5273C8.17188 13.8867 8.00781 13.2109 8 12.5C8 12.0938 7.92188 11.707 7.76562 11.3398C7.60938 10.9727 7.39453 10.6562 7.12109 10.3906C6.84766 10.125 6.52734 9.91016 6.16016 9.74609C5.79297 9.58203 5.40625 9.5 5 9.5C4.58594 9.5 4.19922 9.57812 3.83984 9.73438C3.48047 9.89062 3.16406 10.1055 2.89062 10.3789C2.61719 10.6523 2.40234 10.9727 2.24609 11.3398C2.08984 11.707 2.00781 12.0938 2 12.5H0.5C0.5 12.0938 0.554688 11.6992 0.664062 11.3164C0.773438 10.9336 0.925781 10.5703 1.12109 10.2266C1.31641 9.88281 1.5625 9.57031 1.85938 9.28906C2.15625 9.00781 2.47656 8.76562 2.82031 8.5625C2.5625 8.28906 2.36328 7.97266 2.22266 7.61328C2.08203 7.25391 2.00781 6.88281 2 6.5C2 6.09375 2.07812 5.70703 2.23438 5.33984C2.39062 4.97266 2.60547 4.65625 2.87891 4.39062C3.15234 4.125 3.46875 3.91016 3.82812 3.74609C4.1875 3.58203 4.57812 3.5 5 3.5C5.40625 3.5 5.79297 3.57812 6.16016 3.73438C6.52734 3.89062 6.84375 4.10547 7.10938 4.37891C7.375 4.65234 7.58984 4.97266 7.75391 5.33984C7.91797 5.70703 8 6.09375 8 6.5C8 6.88281 7.92969 7.25391 7.78906 7.61328C7.64844 7.97266 7.44531 8.28906 7.17969 8.5625C7.82031 8.91406 8.34375 9.39844 8.75 10.0156C9.17188 9.39062 9.71094 8.89844 10.3672 8.53906C11.0234 8.17969 11.7344 8 12.5 8C13.2578 8 13.9648 8.17969 14.6211 8.53906C15.2773 8.89844 15.8203 9.39062 16.25 10.0156C16.6562 9.39844 17.1797 8.91406 17.8203 8.5625C17.5625 8.28906 17.3633 7.97266 17.2227 7.61328C17.082 7.25391 17.0078 6.88281 17 6.5C17 6.09375 17.0781 5.70703 17.2344 5.33984C17.3906 4.97266 17.6055 4.65625 17.8789 4.39062C18.1523 4.125 18.4688 3.91016 18.8281 3.74609C19.1875 3.58203 19.5781 3.5 20 3.5C20.4062 3.5 20.793 3.57812 21.1602 3.73438C21.5273 3.89062 21.8438 4.10547 22.1094 4.37891C22.375 4.65234 22.5898 4.97266 22.7539 5.33984C22.918 5.70703 23 6.09375 23 6.5C23 6.88281 22.9297 7.25391 22.7891 7.61328C22.6484 7.97266 22.4453 8.28906 22.1797 8.5625ZM3.5 6.5C3.5 6.71094 3.53906 6.90625 3.61719 7.08594C3.69531 7.26562 3.80078 7.42188 3.93359 7.55469C4.06641 7.6875 4.22656 7.79688 4.41406 7.88281C4.60156 7.96875 4.79688 8.00781 5 8C5.21094 8 5.40625 7.96094 5.58594 7.88281C5.76562 7.80469 5.92188 7.69922 6.05469 7.56641C6.1875 7.43359 6.29688 7.27344 6.38281 7.08594C6.46875 6.89844 6.50781 6.70312 6.5 6.5C6.5 6.28906 6.46094 6.09375 6.38281 5.91406C6.30469 5.73438 6.19922 5.57812 6.06641 5.44531C5.93359 5.3125 5.77344 5.20312 5.58594 5.11719C5.39844 5.03125 5.20312 4.99219 5 5C4.78906 5 4.59375 5.03906 4.41406 5.11719C4.23438 5.19531 4.07812 5.30078 3.94531 5.43359C3.8125 5.56641 3.70312 5.72656 3.61719 5.91406C3.53125 6.10156 3.49219 6.29688 3.5 6.5ZM12.5 15.5C12.9062 15.5 13.293 15.4219 13.6602 15.2656C14.0273 15.1094 14.3438 14.8945 14.6094 14.6211C14.875 14.3477 15.0898 14.0312 15.2539 13.6719C15.418 13.3125 15.5 12.9219 15.5 12.5C15.5 12.0938 15.4219 11.707 15.2656 11.3398C15.1094 10.9727 14.8945 10.6562 14.6211 10.3906C14.3477 10.125 14.0273 9.91016 13.6602 9.74609C13.293 9.58203 12.9062 9.5 12.5 9.5C12.0859 9.5 11.6992 9.57812 11.3398 9.73438C10.9805 9.89062 10.6641 10.1055 10.3906 10.3789C10.1172 10.6523 9.90234 10.9727 9.74609 11.3398C9.58984 11.707 9.50781 12.0938 9.5 12.5C9.5 12.9141 9.57812 13.3008 9.73438 13.6602C9.89062 14.0195 10.1055 14.3359 10.3789 14.6094C10.6523 14.8828 10.9688 15.0977 11.3281 15.2539C11.6875 15.4102 12.0781 15.4922 12.5 15.5ZM18.5 6.5C18.5 6.71094 18.5391 6.90625 18.6172 7.08594C18.6953 7.26562 18.8008 7.42188 18.9336 7.55469C19.0664 7.6875 19.2266 7.79688 19.4141 7.88281C19.6016 7.96875 19.7969 8.00781 20 8C20.2109 8 20.4062 7.96094 20.5859 7.88281C20.7656 7.80469 20.9219 7.69922 21.0547 7.56641C21.1875 7.43359 21.2969 7.27344 21.3828 7.08594C21.4688 6.89844 21.5078 6.70312 21.5 6.5C21.5 6.28906 21.4609 6.09375 21.3828 5.91406C21.3047 5.73438 21.1992 5.57812 21.0664 5.44531C20.9336 5.3125 20.7734 5.20312 20.5859 5.11719C20.3984 5.03125 20.2031 4.99219 20 5C19.7891 5 19.5938 5.03906 19.4141 5.11719C19.2344 5.19531 19.0781 5.30078 18.9453 5.43359C18.8125 5.56641 18.7031 5.72656 18.6172 5.91406C18.5312 6.10156 18.4922 6.29688 18.5 6.5Z"/>
           <Path d="M22.1797 8.5625C22.5312 8.75781 22.8516 8.99609 23.1406 9.27734C23.4297 9.55859 23.6719 9.87109 23.8672 10.2148C24.0625 10.5586 24.2188 10.9219 24.3359 11.3047C24.4531 11.6875 24.5078 12.0859 24.5 12.5H23C23 12.0938 22.9219 11.707 22.7656 11.3398C22.6094 10.9727 22.3945 10.6562 22.1211 10.3906C21.8477 10.125 21.5273 9.91016 21.1602 9.74609C20.793 9.58203 20.4062 9.5 20 9.5C19.5859 9.5 19.1992 9.57812 18.8398 9.73438C18.4805 9.89062 18.1641 10.1055 17.8906 10.3789C17.6172 10.6523 17.4023 10.9727 17.2461 11.3398C17.0898 11.707 17.0078 12.0938 17 12.5C17 13.2109 16.8398 13.8867 16.5195 14.5273C16.1992 15.168 15.75 15.6992 15.1719 16.1211C15.6797 16.3789 16.1367 16.6953 16.543 17.0703C16.9492 17.4453 17.3008 17.8672 17.5977 18.3359C17.8945 18.8047 18.1172 19.3047 18.2656 19.8359C18.4141 20.3672 18.4922 20.9219 18.5 21.5H17C17 20.8828 16.8828 20.3008 16.6484 19.7539C16.4141 19.207 16.0898 18.7305 15.6758 18.3242C15.2617 17.918 14.7852 17.5977 14.2461 17.3633C13.707 17.1289 13.125 17.0078 12.5 17C11.8828 17 11.3008 17.1172 10.7539 17.3516C10.207 17.5859 9.73047 17.9102 9.32422 18.3242C8.91797 18.7383 8.59766 19.2148 8.36328 19.7539C8.12891 20.293 8.00781 20.875 8 21.5H6.5C6.5 20.9297 6.57812 20.3789 6.73438 19.8477C6.89062 19.3164 7.11328 18.8164 7.40234 18.3477C7.69141 17.8789 8.03906 17.457 8.44531 17.082C8.85156 16.707 9.3125 16.3867 9.82812 16.1211C9.25781 15.6992 8.8125 15.168 8.49219 14.5273C8.17188 13.8867 8.00781 13.2109 8 12.5C8 12.0938 7.92188 11.707 7.76562 11.3398C7.60938 10.9727 7.39453 10.6562 7.12109 10.3906C6.84766 10.125 6.52734 9.91016 6.16016 9.74609C5.79297 9.58203 5.40625 9.5 5 9.5C4.58594 9.5 4.19922 9.57812 3.83984 9.73438C3.48047 9.89062 3.16406 10.1055 2.89062 10.3789C2.61719 10.6523 2.40234 10.9727 2.24609 11.3398C2.08984 11.707 2.00781 12.0938 2 12.5H0.5C0.5 12.0938 0.554688 11.6992 0.664062 11.3164C0.773438 10.9336 0.925781 10.5703 1.12109 10.2266C1.31641 9.88281 1.5625 9.57031 1.85938 9.28906C2.15625 9.00781 2.47656 8.76562 2.82031 8.5625C2.5625 8.28906 2.36328 7.97266 2.22266 7.61328C2.08203 7.25391 2.00781 6.88281 2 6.5C2 6.09375 2.07812 5.70703 2.23438 5.33984C2.39062 4.97266 2.60547 4.65625 2.87891 4.39062C3.15234 4.125 3.46875 3.91016 3.82812 3.74609C4.1875 3.58203 4.57812 3.5 5 3.5C5.40625 3.5 5.79297 3.57812 6.16016 3.73438C6.52734 3.89062 6.84375 4.10547 7.10938 4.37891C7.375 4.65234 7.58984 4.97266 7.75391 5.33984C7.91797 5.70703 8 6.09375 8 6.5C8 6.88281 7.92969 7.25391 7.78906 7.61328C7.64844 7.97266 7.44531 8.28906 7.17969 8.5625C7.82031 8.91406 8.34375 9.39844 8.75 10.0156C9.17188 9.39062 9.71094 8.89844 10.3672 8.53906C11.0234 8.17969 11.7344 8 12.5 8C13.2578 8 13.9648 8.17969 14.6211 8.53906C15.2773 8.89844 15.8203 9.39062 16.25 10.0156C16.6562 9.39844 17.1797 8.91406 17.8203 8.5625C17.5625 8.28906 17.3633 7.97266 17.2227 7.61328C17.082 7.25391 17.0078 6.88281 17 6.5C17 6.09375 17.0781 5.70703 17.2344 5.33984C17.3906 4.97266 17.6055 4.65625 17.8789 4.39062C18.1523 4.125 18.4688 3.91016 18.8281 3.74609C19.1875 3.58203 19.5781 3.5 20 3.5C20.4062 3.5 20.793 3.57812 21.1602 3.73438C21.5273 3.89062 21.8438 4.10547 22.1094 4.37891C22.375 4.65234 22.5898 4.97266 22.7539 5.33984C22.918 5.70703 23 6.09375 23 6.5C23 6.88281 22.9297 7.25391 22.7891 7.61328C22.6484 7.97266 22.4453 8.28906 22.1797 8.5625ZM3.5 6.5C3.5 6.71094 3.53906 6.90625 3.61719 7.08594C3.69531 7.26562 3.80078 7.42188 3.93359 7.55469C4.06641 7.6875 4.22656 7.79688 4.41406 7.88281C4.60156 7.96875 4.79688 8.00781 5 8C5.21094 8 5.40625 7.96094 5.58594 7.88281C5.76562 7.80469 5.92188 7.69922 6.05469 7.56641C6.1875 7.43359 6.29688 7.27344 6.38281 7.08594C6.46875 6.89844 6.50781 6.70312 6.5 6.5C6.5 6.28906 6.46094 6.09375 6.38281 5.91406C6.30469 5.73438 6.19922 5.57812 6.06641 5.44531C5.93359 5.3125 5.77344 5.20312 5.58594 5.11719C5.39844 5.03125 5.20312 4.99219 5 5C4.78906 5 4.59375 5.03906 4.41406 5.11719C4.23438 5.19531 4.07812 5.30078 3.94531 5.43359C3.8125 5.56641 3.70312 5.72656 3.61719 5.91406C3.53125 6.10156 3.49219 6.29688 3.5 6.5ZM12.5 15.5C12.9062 15.5 13.293 15.4219 13.6602 15.2656C14.0273 15.1094 14.3438 14.8945 14.6094 14.6211C14.875 14.3477 15.0898 14.0312 15.2539 13.6719C15.418 13.3125 15.5 12.9219 15.5 12.5C15.5 12.0938 15.4219 11.707 15.2656 11.3398C15.1094 10.9727 14.8945 10.6562 14.6211 10.3906C14.3477 10.125 14.0273 9.91016 13.6602 9.74609C13.293 9.58203 12.9062 9.5 12.5 9.5C12.0859 9.5 11.6992 9.57812 11.3398 9.73438C10.9805 9.89062 10.6641 10.1055 10.3906 10.3789C10.1172 10.6523 9.90234 10.9727 9.74609 11.3398C9.58984 11.707 9.50781 12.0938 9.5 12.5C9.5 12.9141 9.57812 13.3008 9.73438 13.6602C9.89062 14.0195 10.1055 14.3359 10.3789 14.6094C10.6523 14.8828 10.9688 15.0977 11.3281 15.2539C11.6875 15.4102 12.0781 15.4922 12.5 15.5ZM18.5 6.5C18.5 6.71094 18.5391 6.90625 18.6172 7.08594C18.6953 7.26562 18.8008 7.42188 18.9336 7.55469C19.0664 7.6875 19.2266 7.79688 19.4141 7.88281C19.6016 7.96875 19.7969 8.00781 20 8C20.2109 8 20.4062 7.96094 20.5859 7.88281C20.7656 7.80469 20.9219 7.69922 21.0547 7.56641C21.1875 7.43359 21.2969 7.27344 21.3828 7.08594C21.4688 6.89844 21.5078 6.70312 21.5 6.5C21.5 6.28906 21.4609 6.09375 21.3828 5.91406C21.3047 5.73438 21.1992 5.57812 21.0664 5.44531C20.9336 5.3125 20.7734 5.20312 20.5859 5.11719C20.3984 5.03125 20.2031 4.99219 20 5C19.7891 5 19.5938 5.03906 19.4141 5.11719C19.2344 5.19531 19.0781 5.30078 18.9453 5.43359C18.8125 5.56641 18.7031 5.72656 18.6172 5.91406C18.5312 6.10156 18.4922 6.29688 18.5 6.5Z" fill="white" stroke="white" stroke-width="0.114258" mask="url(#path-1-inside-1_1039_9882)"/>
           </Svg>
   );
}
export default Org;