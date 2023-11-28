import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import DashboardTab from './DashboardTab';

function Dashboard() {
    const context = useContext(myContext)
    const { mode} = context
  return (
        <section className="text-gray-600 body-font mt-10 mb-10">
            <DashboardTab/>
        </section>
  )
}

export default Dashboard