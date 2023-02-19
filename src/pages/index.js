import Footer from "../components/Footer";
import Menu from "../components/Menu";
//import { Inter } from "@next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Menu />
      <Footer />
    </div>
  );
}
