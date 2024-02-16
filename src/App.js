import Header from "./component/Header";
import CategoryClassView from "./views/CategoryClassView";
import Home from "./views/HomeView";
import Footer from "./component/Footer";
import { Paper,styled } from "@mui/material";
import { Routes, Route} from 'react-router-dom';
import ClassDetailView from "./views/ClassDetailView";
import MyOwnClassView from "./views/MyOwnClassView";
import MyOpenClassView from "./views/MyOpenClassView";
import MyClassRoomView from "./views/MyClassRoomView";
import MyOpenClassRoomView from "./views/MyOpenClassRoomView";
import OpenClassView from "./views/OpenClassView";
import RegisterClassView from "./views/RegisterClassView";
function App() {
  const CategoryPaper = styled(Paper)(({ theme }) => ({
    width: 1512,
    textAlign: 'center',
  }));
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CategoryPaper alignItems="center">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/classes" element={<CategoryClassView/>}/>
          <Route path="/classes/:category" element={<CategoryClassView/>}/>
          <Route path="/class/:id" element={<ClassDetailView/>}/>
          <Route path="/class/register/:id" element={<RegisterClassView/>}/>
          <Route path="/class/open" element={<OpenClassView/>}/>
          <Route path="/user/register" element={<MyOwnClassView/>}/>
          <Route path="/user/open" element={<MyOpenClassView/>}/>
          <Route path="/class/classroom/:id" element={<MyClassRoomView/>}/>
          <Route path="/class/teachingroom/:id" element={<MyOpenClassRoomView/>}/>
        </Routes>
        <Footer></Footer>
      </CategoryPaper>
    </div>
  );
}


export default App;
