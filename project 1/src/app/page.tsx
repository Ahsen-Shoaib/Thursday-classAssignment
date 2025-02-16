import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";


const MyPage = () => {
  return (
    <main>

      <div></div>
      <Header></Header>
      <h1 style={{ color: "red",background: "blue" }}>Welcome to Next.js!</h1>
      <p style={{color:"blue", background:"yellow"}}>This is my main page.</p>
      <p>Everyone is welcome here.</p>    
      <Footer></Footer> 
    </main>  
  );
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
        <a href="/contact">contact</a>
        </li>
        <li>
          <a href="services">Web-Development</a>
        </li>
      </ul>
    </nav>
  );
};


const Page = () => {
  return (
    <>
      <Navigation />
      <MyPage />
    </>
  );
};

export default Page;






