import Header from "../component/Header";
import CategoryHeader from "../component/CategoryHeader";
import CarouselView from "../component/CarouselView";
import CategoryList from "../component/CategoryList";
import { useLectureCardStore } from "../store/LectureCardStore";
import { useEffect } from "react";
function Home() {
  const {popularLectures, setPopularLectures } = useLectureCardStore();
  useEffect(() => {
    setPopularLectures()
}, []);
  return (
    <div>
      <CategoryHeader name="home"></CategoryHeader>
      <CategoryList></CategoryList>
      <CarouselView title="한동대 인기 클래스" type="popular" />
      <CarouselView title="신규 클래스"></CarouselView>
      <CarouselView title="포트폴리오 리스트"></CarouselView>
    </div>
  );
}

export default Home;
