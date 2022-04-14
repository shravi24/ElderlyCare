// import React, { useState } from 'react';
// import MenuAdmin from './adminComponents/menuAdmin';
// import UpMenuAdmin from './adminComponents/upMenuAdmin';
// import OfferDisplayer from './adminComponents/offerDisplayer';
// import AddOffer from './adminComponents/addOffer';
// import Settings from './adminComponents/settings';
// import Demand from './adminComponents/demand';
// import Login from './adminComponents/login';
// import SingUp from './adminComponents/signUp';
// import EditOffer from './adminComponents/editOffer';
// import app from './styles/app.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function AdminIndex() {
//   const [openMenu, setOpenMenu] = useState(false)

//   return (
//     <div className="app">
//         <MenuAdmin openMenu={openMenu} setOpenMenu={setOpenMenu} />
//         <div style={{ width: '100%' }}>
//           <UpMenuAdmin openMenu={openMenu} setOpenMenu={setOpenMenu} />
//           <Routes>
//             <Route path="offer" exact element={<OfferDisplayer/>}/>
//             {/* <Route path="offer/add" exact element={<AddOffer/>}/> */}
//             <Route path="demands" exact element={<Demand/>}/>
//             <Route path="settings" exact element={<Settings/>}/>
//             <Route path="offer/edit/:id" exact element={<EditOffer/>}/>
//           </Routes>
//         </div>
//     </div>
//   );
// }


// export default AdminIndex;


import React, { useState } from 'react';
import MenuAdmin from './adminComponents/menuAdmin';
import UpMenuAdmin from './adminComponents/upMenuAdmin';
import OfferDisplayer from './adminComponents/offerDisplayer';
import AddOffer from './adminComponents/addOffer';
import Settings from './adminComponents/settings';
import Demand from './adminComponents/demand';
import Login from './adminComponents/login';
import SingUp from './adminComponents/signUp';
import EditOffer from './adminComponents/editOffer';
import Dashboard from './adminComponents/dashboard';
import app from './styles/app.css';


import Dashboardadmin from './adminComponents/dashboardadmin';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ListMealComponent from './adminComponents/ListMealComponent';
import AddMealComponent from './adminComponents/AddMealComponent';

import ListDoctorComponent from './adminComponents/ListDoctorComponent';
import AddDoctorComponent from './adminComponents/AddDoctorComponent';

import ListProductComponent from './adminComponents/ListProductComponent';
import AddProductComponent from './adminComponents/AddProductComponent';

import ListAssistantComponent from './adminComponents/ListAssistantComponent'
import AddAssistantComponent from './adminComponents/AddAssistantComponent'
import BookingDisplayer from './adminComponents/bookingDisplayer';


function AdminIndex() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
        <MenuAdmin openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ width: '100%' }}>
          <UpMenuAdmin openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Routes>
          <Route path="offer" exact element={<OfferDisplayer/>}/>
          <Route path="offer/add" exact element={<AddOffer/>}/>
          <Route path="dashboard" exact element={<Dashboard/>}/>
{/* 
            <Route path="settings" exact element={<Settings/>}/> */}
            {/* <Route path="dashboard/meals" exact element={<ListMealComponent/>}/>
            <Route path="dashboard/meals/add-meal" exact element={<AddMealComponent/>}/>
            <Route path='dashboard/meals/edit-meal/:id' element={<AddMealComponent />}/> */}
            {/* <Route path="offer/edit/:id" exact element={<EditOffer/>}/> */}
            {/* <Route path="offer" exact element={<OfferDisplayer/>}/>
            <Route path="offer/add" exact element={<AddOffer/>}/>
            <Route path="demands" exact element={<Demand/>}/>
            <Route path="settings" exact element={<Settings/>}/>
            <Route path="offer/edit/:id" exact element={<EditOffer/>}/> */}

            <Route path="dashboardadmin" exact element={< Dashboardadmin/>}/>
            
            <Route path="subscriptions" exact element={<BookingDisplayer/>}/>
           
            <Route path="dashboardadmin/meals" exact element={<ListMealComponent/>}/>
            <Route path="dashboardadmin/meals/add-meal" exact element={<AddMealComponent/>}/>
            <Route path='dashboardadmin/meals/edit-meal/:id' element={<AddMealComponent />}/>


            <Route path="dashboardadmin/doctors" exact element={<ListDoctorComponent/>}/>
            <Route path="dashboardadmin/doctors/add-doctor" exact element={<AddDoctorComponent/>}/>
            <Route path='dashboardadmin/doctors/edit-doctor/:id' element={<AddDoctorComponent />}/>
         
            
            <Route path="dashboardadmin/Product" exact element={<ListProductComponent/>}/>
            <Route path="dashboardadmin/Product/Product-add" exact element={<AddProductComponent/>}/>
            <Route path='dashboardadmin/Product/Product-edit/:id' element={<AddProductComponent />}/>


            <Route path="dashboardadmin/assistants" exact element={<ListAssistantComponent/>}/>
            <Route path="dashboardadmin/assistants/Assistant-add" exact element={<AddAssistantComponent/>}/>
            <Route path='dashboardadmin/assistants/Assistant-edit/:id' element={<AddAssistantComponent />}/>


          </Routes>
        </div>
    </div>
  );
}


export default AdminIndex;
