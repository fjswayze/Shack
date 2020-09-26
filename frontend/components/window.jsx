import Sidebar from './sidebar/sidebar'; 
import MainWindow from './main_window/main_window'; 
import React from 'react';


const Window = () => (
    <div className="window">
        <Sidebar/> 
        <MainWindow/> 
    </div>
)

export default Window; 