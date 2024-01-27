import React from 'react'
import './AnalysisBox.css'
import WebIcon from '@mui/icons-material/Web';
import GroupIcon from '@mui/icons-material/Group';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import ListIcon from '@mui/icons-material/List';
import MessageIcon from '@mui/icons-material/Message';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function AnalysisBox() {
  return (
    <div className='analysisBoxes'>
        <div className="analysisBox">
            <div className="analysisBoxTitle">
                <p>صفحات</p>
                <WebIcon />
            </div>
            <span className='analysisBoxNum'>12,233</span>
            <div className="analysisBoxBtn">
                <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
               <a href="#" className='analysisBoxIcon'>
               <AddCircleIcon />
               </a>
            </div>
        </div>
        <div className="analysisBox">
            <div className="analysisBoxTitle">
                <p>پست ها</p>
                <ListIcon />
            </div>
            <span className='analysisBoxNum'> 456</span>
            <div className="analysisBoxBtn">
                <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
               <a href="#" className='analysisBoxIcon'>
               <AddCircleIcon />
               </a>
            </div>
        </div>
        <div className="analysisBox">
            <div className="analysisBoxTitle">
                <p>کاربران</p>
                <GroupIcon />
            </div>
            <span className='analysisBoxNum'>220</span>
            <div className="analysisBoxBtn">
                <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
               <a href="#" className='analysisBoxIcon'>
               <AddCircleIcon />
               </a>
            </div>
        </div>
        <div className="analysisBox">
            <div className="analysisBoxTitle">
                <p>فایل ها</p>
                <FolderZipIcon />
            </div>
            <span className='analysisBoxNum'>928</span>
            <div className="analysisBoxBtn">
                <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
               <a href="#" className='analysisBoxIcon'>
               <AddCircleIcon />
               </a>
            </div>
        </div>
        <div className="analysisBox">
            <div className="analysisBoxTitle">
                <p>نظرات</p>
                <MessageIcon />
            </div>
            <span className='analysisBoxNum'>453</span>
            <div className="analysisBoxBtn">
                <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
               <a href="#" className='analysisBoxIcon'>
               <AddCircleIcon />
               </a>
            </div>
        </div>
    </div>
  )
}
