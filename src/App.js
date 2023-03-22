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
import Campagne from "./pages/campagne/Campagne";
import ViewCampagne from "./pages/campagne/ViewCampagne";
import ViewLead from "./pages/campagne/ViewLead";
import ListeRendezVous from "./pages/contact/ListeRendezVous";
import ListeOpportunite from "./pages/contact/ListeOpportunite";
import EditRendezVous from "./pages/contact/EditRendezVous";
import EditOpportunite from "./pages/contact/EditOpportunite";
import Vente from "./pages/contact/Vente";
import Produit from "./pages/contact/Produit";

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
              <Route path="editContact/:id" element={<EditContact />} />
              <Route path="opportunity" element={<Opportunity />} />
              <Route path="listeopportunity" element={<ListeOpportunite />} />
              <Route path="editOpportunity/:id" element={<EditOpportunite />} />
              <Route path="listerendezvous" element={<ListeRendezVous />} />
              <Route path="editRendezVous/:id" element={<EditRendezVous />} />
              <Route path="ventes" element={<Vente />} />
              <Route path="catalogue" element={<Produit />} />
            </Route>
            <Route path="campagnes">
              <Route index element={<Campagne />} />
              <Route path="editCampagne/:id" element={<ViewCampagne />} />
              <Route path="editLead/:id" element={<ViewLead />} />
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