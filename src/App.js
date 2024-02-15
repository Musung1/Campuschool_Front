import CarouselView from "./component/CarouselView";
import CategoryHeader from "./component/CategoryHeader";
import Header from "./component/Header";
import CategoryClassView from "./views/CategoryClassView";
import Home from "./views/HomeView";
import Tail from "./component/Tail";
import { Paper,styled } from "@mui/material";
import ClassDetailView from "./views/ClassDetailView";
import MyOwnClassView from "./views/MyOwnClassView";
import MyOpenClassView from "./views/MyOpenClassView";
function App() {
  const CategoryPaper = styled(Paper)(({ theme }) => ({
    width: 1512,
    textAlign: 'center',
  }));
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CategoryPaper alignItems="center">
        <Header></Header>
        <MyOpenClassView></MyOpenClassView>
        <Tail></Tail>
      </CategoryPaper>
    </div>
  );
}


export default App;
