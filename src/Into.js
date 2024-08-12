import styled from "styled-components";
import { Menu } from "./Menu";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { About } from "./About";
import { Customer } from "./Customer";
import { Game } from "./Game";
import { LectureList } from "./LectureList";
import { Lecture } from "./Lecture";
import { Login } from "./Login";
import { Main } from "./Main";
import { SignUp } from "./SignUp";
import { Store } from "./Store";
import { StudyRoom } from "./StudyRoom";
import { GameShop } from "./GameShop";
import { GroupLecRoom } from "./GroupLecRoom";
import { SpecialLecRoom } from "./SpecialLecRoom";
import { Error } from "./Error";
import { MyLecture } from "./MyLecture";
import { Cart } from "./Cart";
import { MyPage } from "./Mypage";
import { Purchased } from "./Purchased";
import { Curriculum } from "./Curriculum";
import { Address } from "./Address";
import { Intro } from "./Intro";
import { HallOfFame } from "./HallOfFame";
import { MyLank } from "./MyLank";
import { Mock } from "./Mock";

const Container = styled.div`
  width: 100%;
`;
const Menubar = styled.div``;
const Body = styled.div`
  width: 100%;
`;

function AppContent() {
  const location = useLocation();

  const hideMenubar =
    location.pathname === "/login" || location.pathname === "/signup";

  console.log("로드됨");
  return (
    <>
      <Container>
        {!hideMenubar && (
          <Menubar>
            <Menu />
          </Menubar>
        )}
        <Body>
          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/Intro" element={<Intro />}>
              <Route path="about" element={<About />} />
              <Route path="curriculum" index element={<Curriculum />} />
              <Route path="address" index element={<Address />} />
            </Route>

            <Route path="/lecturelist" element={<LectureList />}>
              <Route index element={<LectureList />} />
              <Route path=":id" element={<Lecture />} />
            </Route>

            <Route path="/store" element={<Store />} />

            <Route path="/mock" element={<Mock />}>
              <Route index element={<Mock />} />
            </Route>
            <Route path="/halloffame" element={<HallOfFame />} />

            <Route path="/game" element={<Game />} />
            <Route path="/gameshop" element={<GameShop />} />

            <Route path="/studyroom" element={<StudyRoom />} />
            <Route path="/grouplecroom" element={<GroupLecRoom />} />
            <Route path="/speciallecroom" element={<SpecialLecRoom />} />

            <Route path="/customer" element={<Customer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/mypage" element={<MyPage />}>
              <Route path="mylecture" element={<MyLecture />} />
              <Route path="mylank" element={<MyLank />} />
              <Route path="cart" element={<Cart />} />
              <Route path="purchased" element={<Purchased />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </Body>
      </Container>
    </>
  );
}

export function Into() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      ;
    </>
  );
}
