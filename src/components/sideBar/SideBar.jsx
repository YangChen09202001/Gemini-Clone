import React, { useContext, useState } from 'react';
import './SideBar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/ContextProvider';

const SideBar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt) 
    }


    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt='' />
                <div onClick={()=> newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt='' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended && (
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((value, index) => (
                            <div onClick={()=> loadPrompt(value)} className='recent-entry'>
                                <img src={assets.message_icon} alt='' />
                                <p>{value.slice(0,18)}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='bottom'>
                <div className='bottom_item recent-entry'>
                    <img src={assets.question_icon} alt='' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom_item recent-entry'>
                    <img src={assets.history_icon} alt='' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className='bottom_item recent-entry'>
                    <img src={assets.send_icon} alt='' />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
