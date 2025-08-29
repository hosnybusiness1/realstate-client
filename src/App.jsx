import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";

import { toast, ToastBar, Toaster } from "react-hot-toast";
import LoginForm from "./features/authentication/LoginForm";
import PersistLogin from "./features/authentication/PersistLogin";
import SignupForm from "./features/authentication/SignupForm";
import AddProduct from "./features/product/AddProduct";
import About from "./pages/About";
import Buy from "./pages/Buy";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Flats from "./pages/Flats";
import Home from "./pages/Home";
import Lands from "./pages/Lands";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Rent from "./pages/Rent";
import Villas from "./pages/Villas";
import AppLayout from "./ui/AppLayout";
// const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<PersistLogin />}>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="buy" element={<Buy />} />
              <Route path="rent" element={<Rent />} />
              <Route path="flats" element={<Flats />} />
              <Route path="villas" element={<Villas />} />
              <Route path="lands" element={<Lands />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />

              <Route path="new-product" element={<AddProduct />} />
            </Route>
          </Route>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          styyle: {
            fontSize: "1.5rem",
            maxWidth: "500px",
            pading: "16px 24px",
            backgroundColor: "var(--colo-greyr-0)",
            color: "var(--color-grey-700)",
          },
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{ border: "1px solid var(--color-grey-600)" }}
          >
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: ".5rem",
                      fontSize: "1rem",
                      fontWeight: "900",
                      width: "3rem",
                      border: "1px solid var(--color-grey-500)",
                      borderRadius: "50%",
                    }}
                    onClick={() => toast.dismiss(t.id)}
                  >
                    X
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </>
  );
}
