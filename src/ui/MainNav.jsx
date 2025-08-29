import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FcTimeline } from "react-icons/fc";
import { MdDashboard, MdPerson2 } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";
import BASE_URL from "../utils/baseUrl";

const StyledNavContainer = styled.div`
  display: flex;
  z-index: 1000;

  @media only screen and (max-width: 1120px) {
    position: relative;
  }
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: right;

  @media only screen and (max-width: 835px) {
    /* border: 1px solid var(--color-grey-100); */
    /* border: 1px solid red; */
    background-color: var(--color-grey-0);
    width: 25rem;
    position: absolute;
    top: 0rem;
    right: -5rem;
    bottom: 0;
    height: 100vh;
    padding-top: 8rem;
    flex-direction: column;
    justify-content: flex-start;
    z-index: -1;
    transition: 0.3s ease-in-out;
    &.close {
      /* border: 1px solid red; */
      right: -28rem !important;
    }
  }
`;

const MainLiButton = styled.li`
  /* margin-left: 0.2rem; */
`;

const StyledNavLink = styled(NavLink)`
  text-transform: capitalize;
  font-weight: bolder;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    color: var(--color-brand-900);
    font-size: 1.6rem;
    font-weight: 800;
    padding: 0.7rem 1.2rem;
    transition: all 0.3s;

    @media only screen and (max-width: 1120px) {
      font-size: 1.4rem;
      font-weight: 900;
      padding: 0.7rem 0.8rem;
    }

    @media only screen and (max-width: 996px) {
      font-size: 1.2rem;
      font-weight: 700;
      padding: 0.7rem 0.6rem;
    }

    @media only screen and (max-width: 835px) {
      font-size: 1.8rem;
      font-weight: 700;
      padding: 1rem 2.5rem;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  @media only screen and (max-width: 1120px) {
    font-size: 1.2rem;
    font-weight: 800;
    padding: 0.7rem 1.2rem;
  }
`;

const AuthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const UserMenu = styled.ul`
  padding: 2rem;
  width: 25rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 0.7rem;
  position: absolute;
  top: 5.3rem;
  right: 0rem;
  z-index: 1000;
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  font-weight: 700;
  box-shadow: 1px 1px 6px 1px var(--color-grey-200);

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  li {
    a {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      height: 4rem;
      span {
        /* border: 1px solid green; */
        :first-of-type {
          margin-right: 1rem;
        }
      }
    }
  }
`;

const IconSpan = styled.span`
  width: 4rem;
  height: 4rem;
  /* border: 1px solid red; */
  border-radius: 50%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-brand-50);

  svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0 !important;
  }
`;

const UserTag = styled.li`
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 1px 1px 6px 1px var(--color-grey-200);
  cursor: pointer;
`;

const MenuToggleBTN = styled.div`
  /* border: 1px solid red; */
  color: var(--color-brand-800);
  margin-right: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  display: none;

  svg {
    width: 3rem;
    height: 3rem;
  }

  @media only screen and (max-width: 835px) {
    display: block;
  }
`;

const Avatar = styled.img`
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export default function MainNav() {
  const navigate = useNavigate();
  const { auth, setAuth, loading, setLoading } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const menuRef = useRef(null);

  const [open, setOpen] = useState(false);

  // update on resize
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 810);
  //     if (window.innerWidth > 810) {
  //       setOpen(true); // keep menu always visible on desktop
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // initial check
  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const toggleUserMenu = () => setShowUserMenu((prev) => !prev);
  const handleMenuToggleBTN = () => setOpen((prev) => !prev);

  const handleSignout = async () => {
    try {
      await axios.get(`${BASE_URL}/users/logout`, {
        withCredentials: true,
      });
      setAuth({});
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!auth?.name) {
      setLoading(false);
    }
  }, [auth, setLoading]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    handleClickOutside();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledNavContainer>
      <MenuToggleBTN onClick={handleMenuToggleBTN}>
        {!open ? (
          // <MdDehaze />
          <FcTimeline />
        ) : (
          <FaTimes />
        )}
      </MenuToggleBTN>

      <StyledNav className={`${!open && "close"}`}>
        <MainLiButton>
          <StyledNavLink to="/">home</StyledNavLink>
        </MainLiButton>
        <MainLiButton>
          <StyledNavLink to="/buy">Buy</StyledNavLink>
        </MainLiButton>
        <MainLiButton>
          <StyledNavLink to="/rent">Rent</StyledNavLink>
        </MainLiButton>
        <MainLiButton>
          <StyledNavLink to="/flats">Flats</StyledNavLink>
        </MainLiButton>
        <MainLiButton>
          <StyledNavLink to="/villas">Villas</StyledNavLink>
        </MainLiButton>
        <MainLiButton>
          <StyledNavLink to="/lands">Lands</StyledNavLink>
        </MainLiButton>
        <MainLiButton>
          <StyledNavLink to="/about">About</StyledNavLink>
        </MainLiButton>
        <MainLiButton>
          <StyledNavLink to="/contact">Contacts</StyledNavLink>
        </MainLiButton>
      </StyledNav>

      <div style={{ position: "relative" }}>
        {!loading &&
          (auth?.name ? (
            <AuthDiv onClick={toggleUserMenu}>
              <Avatar src={auth?.avatar} alt="" />
            </AuthDiv>
          ) : (
            <StyledNavLink to="/login">login</StyledNavLink>
          ))}

        {showUserMenu && (
          <UserMenu ref={menuRef} className="user-menu">
            <UserTag>
              <Avatar src={auth?.avatar} alt="" />
              <span>{auth?.name}</span>
            </UserTag>

            {auth?.role === "vendor" && (
              <li onClick={toggleUserMenu}>
                <NavLink to="dashboard">
                  <IconSpan>
                    <MdDashboard />
                  </IconSpan>
                  <span>Dash Board</span>
                </NavLink>
              </li>
            )}
            <li onClick={toggleUserMenu}>
              <NavLink to="profile">
                <IconSpan>
                  <MdPerson2 />
                </IconSpan>
                <span>Profile</span>
              </NavLink>
            </li>
            <li
              onClick={() => {
                handleSignout();
                toggleUserMenu();
              }}
            >
              <NavLink>
                <IconSpan>
                  <TbLogout />
                </IconSpan>
                <span>Log Out</span>
              </NavLink>
            </li>
          </UserMenu>
        )}
      </div>
    </StyledNavContainer>
  );
}
