import React from "react";
import ScrollToTop from './components/ScrollToTop'
import Connection from './Connection';
import SignUp from './components/Register'
import Login from './components/Login'
import SinglePost from './components/Single'

import Activate from './components/Activate'
import ResetPassword from './components/ResetPassword'
import ResetPasswordConfirm from './components/ResetPasswordConfirm'
import Layout from './hocs/Layout'
import Google from './components/Google'
import { Provider } from 'react-redux';
import store from './store';
import StkInfo from './components/Payment/StkInfo'


import TicketCreate from "./components/Ticket/TicketCreate";
import Ticket from "./components/Ticket/Ticket";
import GetTicket from "./components/Ticket/GetTicket";

import Event from './components/Event/Event';
import EventDetail from './components/Event/EventDetail';
import Category from './components/Event/Category';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeCorrect from "./components/Ticket/CodeCorrect";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <Layout>
            <ScrollToTop />
            <Routes>



              
              <Route exact path="/ticket/create" element={<TicketCreate />} />
              <Route exact path="/ticket/get" element={<GetTicket />} />
              <Route exact path="/ticket/go" element={<CodeCorrect />} />
              <Route exact path="/ticket/:ticketCode" element={<Ticket />} />

              <Route exact path="/stkinfo" element={<StkInfo />} />


              <Route exact path="/event" element={<Event />} />
              <Route exact path="/event/:id" element={<EventDetail />} />
              <Route exact path="/category/:category" element={<Category />} />


              <Route exact path="/" element={<Connection />} />
              <Route exact path="/google" element={<Google />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/reset-password" element={<ResetPassword />} />
              <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
              <Route exact path="/activate/:uid/:token" element={<Activate />} />
				      <Route exact path="/post/:postId" element={<SinglePost />} />


            </Routes>
          </Layout>
        </React.StrictMode>

      </Router>
    </Provider>
  )
}

export default App
