import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from './pages/login/Login';
import Home from './pages/home/Home';
import Admin from './pages/Admin';
import Liste from "./pages/list/Liste";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import EditUsers from "./pages/edit/EditUsers";
import NewProfile from "./pages/new/NewProfile";
import ListeProfile from "./pages/profile/ListeProfile";
import Contact from "./pages/contact/Contact";
import AddContact from "./pages/contact/AddContact";
import Opportunity from "./pages/opportunity/Opportunity";
import EditContact from "./pages/contact/EditContact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/admin" element={<Home />} />
            <Route path="users">
              <Route index element={<Liste />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
              <Route path="editUser" element={<EditUsers />} />
              <Route path="newProfile" element={<NewProfile />} />
              <Route path="listeProfile" element={<ListeProfile />} />
            </Route>
            <Route path="contacts">
              <Route index element={<Contact />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<AddContact />} />
              <Route path="editContact" element={<EditContact />} />
              <Route path="opportunity" element={<Opportunity />} />
            </Route>
          </Route>
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;