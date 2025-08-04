import Main from "@/pages/main/UI/Page";
import { Header } from "@/widgets/header";
import { useTheme } from "../providers/ThemeProvider";
import '@/shared/index.css'

function BaseLayout() {
  const {isDark,toggleTheme} = useTheme();
  return (
      <div className={`app ${isDark?'dark':'light' }`}>
      <Header/>
      <div className="container">
        <Main/>
      </div>
    </div>
  );
}

export default BaseLayout;