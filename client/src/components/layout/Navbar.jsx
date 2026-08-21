import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';


const navLinks = [
  {
    label: 'Home',
    path: '/'
  },

  {
    label: 'About Us',
    path: '/about'
  },

  {
    label: 'Services',
    path: '/services'
  },

  {
    label: 'Projects',
    path: '/portfolio'
  },

  {
    label: 'Contact',
    path: '/contact'
  }
];


export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);


  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 10
      );
    };


    handleScroll();


    window.addEventListener(
      'scroll',
      handleScroll
    );


    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);


  /* =========================================================
     CLOSE MENU ON RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };


    window.addEventListener(
      'resize',
      handleResize
    );


    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);


  return (
    <>

      <header
        className={`engix-navbar ${
          scrolled
            ? 'engix-navbar-scrolled'
            : ''
        }`}
      >

        <div className="engix-navbar-container">


          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            to="/"
            className="engix-navbar-logo"
            onClick={() =>
              setOpen(false)
            }
            aria-label="Engix Home"
          >

            <span className="engix-navbar-logo-icon">

              <img
                src="/logo.png"
                alt="Engix"
                className="engix-navbar-logo-image"
              />

            </span>


            <strong className="engix-navbar-logo-name">
              Engix
            </strong>

          </Link>



          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav className="engix-navbar-desktop">

            {navLinks.map(
              (item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({
                    isActive
                  }) =>
                    isActive
                      ? 'engix-navbar-link active'
                      : 'engix-navbar-link'
                  }
                >
                  {item.label}
                </NavLink>

              )
            )}

          </nav>



          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}

          <div className="engix-navbar-actions">

            <Link
              to="/contact"
              className="engix-navbar-contact"
            >
              Contact Us
            </Link>


            <button
              type="button"
              className="engix-navbar-mobile-button"
              onClick={() =>
                setOpen(
                  (previous) =>
                    !previous
                )
              }
              aria-label="Toggle navigation"
              aria-expanded={open}
            >

              {open ? (

                <X
                  size={29}
                  strokeWidth={1.8}
                />

              ) : (

                <Menu
                  size={29}
                  strokeWidth={1.8}
                />

              )}

            </button>

          </div>


        </div>



        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          className={`engix-mobile-navigation ${
            open
              ? 'engix-mobile-navigation-open'
              : ''
          }`}
        >

          <div className="engix-mobile-navigation-inner">


            {navLinks.map(
              (item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({
                    isActive
                  }) =>
                    isActive
                      ? 'engix-mobile-navigation-link active'
                      : 'engix-mobile-navigation-link'
                  }
                  onClick={() =>
                    setOpen(false)
                  }
                >

                  <span>
                    {item.label}
                  </span>


                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.7}
                  />

                </NavLink>

              )
            )}


            <Link
              to="/contact"
              className="engix-mobile-contact"
              onClick={() =>
                setOpen(false)
              }
            >

              <span>
                Start a conversation
              </span>


              <ArrowUpRight
                size={23}
                strokeWidth={1.7}
              />

            </Link>


          </div>

        </div>


      </header>



      <style>{`

        /* =====================================================
           NAVBAR ROOT
        ====================================================== */

        .engix-navbar {
          position: sticky;

          top: 0;

          z-index: 1000;

          width: 100%;

          background:
            #ffffff;

          border-bottom:
            1px solid transparent;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }


        .engix-navbar-scrolled {
          background:
            rgba(
              255,
              255,
              255,
              0.97
            );

          border-bottom:
            1px solid
            rgba(
              5,
              5,
              5,
              0.07
            );

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);

          box-shadow:
            0 8px 28px
            rgba(
              0,
              0,
              0,
              0.045
            );
        }



        /* =====================================================
           NAVBAR CONTAINER
        ====================================================== */

        .engix-navbar-container {
          width:
            min(
              1240px,
              calc(
                100% - 56px
              )
            );

          min-height:
            82px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items:
            center;

          gap:
            42px;
        }



        /* =====================================================
           LOGO
        ====================================================== */

        .engix-navbar-logo {
          width:
            max-content;

          min-width:
            0;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            9px;

          flex-shrink:
            0;

          color:
            #111318;

          text-decoration:
            none;

          white-space:
            nowrap;

          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }


        .engix-navbar-logo:hover {
          opacity:
            0.88;

          transform:
            translateY(-1px);
        }



        /*
          LOGO WRAPPER

          Desktop:
          46 × 46px

          This keeps the PNG
          inside a controlled area.
        */

        .engix-navbar-logo-icon {
          width:
            46px;

          height:
            46px;

          min-width:
            46px;

          min-height:
            46px;

          max-width:
            46px;

          max-height:
            46px;

          flex:
            0 0 46px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          padding:
            0;

          margin:
            0;

          overflow:
            hidden;

          box-sizing:
            border-box;

          background:
            transparent;

          border:
            0;

          border-radius:
            0;
        }



        /*
          ACTUAL LOGO IMAGE
        */

        .engix-navbar-logo-image {
          width:
            100%;

          height:
            100%;

          max-width:
            46px;

          max-height:
            46px;

          display:
            block;

          object-fit:
            contain;

          object-position:
            center;

          flex-shrink:
            0;

          margin:
            0;

          padding:
            0;
        }



        /*
          ENGIX NAME
        */

        .engix-navbar-logo-name {
          display:
            block;

          margin:
            0;

          padding:
            0;

          color:
            #111318;

          font-size:
            24px;

          font-weight:
            750;

          line-height:
            1;

          letter-spacing:
            -0.045em;
        }



        /* =====================================================
           DESKTOP NAVIGATION
        ====================================================== */

        .engix-navbar-desktop {
          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            39px;
        }


        .engix-navbar-link {
          position:
            relative;

          padding:
            31px 0;

          color:
            #4e5057;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            520;

          line-height:
            1;

          transition:
            color 0.2s ease;
        }


        .engix-navbar-link:hover {
          color:
            #050505;
        }


        .engix-navbar-link.active {
          color:
            #050505;

          font-weight:
            650;
        }


        .engix-navbar-link.active::after {
          content:
            '';

          position:
            absolute;

          left:
            50%;

          bottom:
            20px;

          width:
            5px;

          height:
            5px;

          transform:
            translateX(-50%);

          border-radius:
            50%;

          background:
            #050505;
        }



        /* =====================================================
           RIGHT ACTIONS
        ====================================================== */

        .engix-navbar-actions {
          justify-self:
            end;

          display:
            flex;

          align-items:
            center;

          gap:
            12px;
        }


        .engix-navbar-contact {
          min-height:
            44px;

          padding:
            0 22px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            999px;

          background:
            #050505;

          color:
            #ffffff;

          text-decoration:
            none;

          font-size:
            13px;

          font-weight:
            650;

          white-space:
            nowrap;

          transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }


        .engix-navbar-contact:hover {
          background:
            #242424;

          transform:
            translateY(-1px);

          box-shadow:
            0 8px 20px
            rgba(
              0,
              0,
              0,
              0.08
            );
        }



        /* =====================================================
           MOBILE MENU BUTTON
        ====================================================== */

        .engix-navbar-mobile-button {
          display:
            none;

          width:
            46px;

          height:
            46px;

          padding:
            0;

          border:
            0;

          border-radius:
            8px;

          background:
            transparent;

          color:
            #050505;

          cursor:
            pointer;

          transition:
            background 0.2s ease;
        }


        .engix-navbar-mobile-button:hover {
          background:
            #f4f4f2;
        }



        /* =====================================================
           MOBILE NAVIGATION
        ====================================================== */

        .engix-mobile-navigation {
          display:
            none;
        }



        /* =====================================================
           TABLET
        ====================================================== */

        @media (
          max-width: 900px
        ) {

          .engix-navbar-container {
            width:
              calc(
                100% - 32px
              );

            min-height:
              76px;

            grid-template-columns:
              1fr auto;

            gap:
              20px;
          }


          /*
            HIDE DESKTOP LINKS
          */

          .engix-navbar-desktop,
          .engix-navbar-contact {
            display:
              none;
          }


          /*
            TABLET LOGO
          */

          .engix-navbar-logo {
            gap:
              8px;
          }


          .engix-navbar-logo-icon {
            width:
              43px;

            height:
              43px;

            min-width:
              43px;

            min-height:
              43px;

            max-width:
              43px;

            max-height:
              43px;

            flex-basis:
              43px;
          }


          .engix-navbar-logo-image {
            max-width:
              43px;

            max-height:
              43px;
          }


          .engix-navbar-logo-name {
            font-size:
              23px;
          }


          /*
            MOBILE BUTTON
          */

          .engix-navbar-mobile-button {
            display:
              grid;

            place-items:
              center;
          }


          /*
            MOBILE NAV WRAPPER
          */

          .engix-mobile-navigation {
            display:
              block;

            max-height:
              0;

            overflow:
              hidden;

            opacity:
              0;

            visibility:
              hidden;

            background:
              #ffffff;

            border-top:
              1px solid
              transparent;

            transition:
              max-height 0.35s ease,
              opacity 0.25s ease,
              visibility 0.25s ease,
              border-color 0.25s ease;
          }


          .engix-mobile-navigation-open {
            max-height:
              600px;

            opacity:
              1;

            visibility:
              visible;

            border-top:
              1px solid
              rgba(
                5,
                5,
                5,
                0.07
              );

            border-bottom:
              1px solid
              rgba(
                5,
                5,
                5,
                0.07
              );

            box-shadow:
              0 18px 35px
              rgba(
                0,
                0,
                0,
                0.04
              );
          }


          .engix-mobile-navigation-inner {
            width:
              calc(
                100% - 32px
              );

            margin:
              0 auto;

            padding:
              5px 0 24px;
          }


          .engix-mobile-navigation-link {
            min-height:
              62px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              space-between;

            gap:
              20px;

            color:
              #292a2f;

            text-decoration:
              none;

            border-bottom:
              1px solid
              rgba(
                5,
                5,
                5,
                0.08
              );

            font-size:
              17px;

            font-weight:
              520;

            transition:
              color 0.2s ease,
              padding-left 0.2s ease;
          }


          .engix-mobile-navigation-link:hover {
            color:
              #050505;

            padding-left:
              4px;
          }


          .engix-mobile-navigation-link.active {
            color:
              #050505;

            font-weight:
              700;
          }


          .engix-mobile-navigation-link svg {
            flex-shrink:
              0;

            color:
              #050505;
          }


          /*
            MOBILE CTA
          */

          .engix-mobile-contact {
            min-height:
              59px;

            margin-top:
              22px;

            padding:
              0 20px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              space-between;

            gap:
              20px;

            border-radius:
              8px;

            background:
              #050505;

            color:
              #ffffff;

            text-decoration:
              none;

            font-size:
              15px;

            font-weight:
              650;
          }


          .engix-mobile-contact svg {
            flex-shrink:
              0;

            color:
              #ffffff;
          }

        }



        /* =====================================================
           MOBILE
        ====================================================== */

        @media (
          max-width: 600px
        ) {

          .engix-navbar-container {
            min-height:
              72px;
          }


          .engix-navbar-logo {
            gap:
              7px;
          }


          /*
            MOBILE LOGO
          */

          .engix-navbar-logo-icon {
            width:
              40px;

            height:
              40px;

            min-width:
              40px;

            min-height:
              40px;

            max-width:
              40px;

            max-height:
              40px;

            flex-basis:
              40px;
          }


          .engix-navbar-logo-image {
            max-width:
              40px;

            max-height:
              40px;
          }


          .engix-navbar-logo-name {
            font-size:
              21px;
          }


          .engix-navbar-mobile-button {
            width:
              44px;

            height:
              44px;
          }


          .engix-mobile-navigation-link {
            min-height:
              60px;

            font-size:
              16px;
          }

        }



        /* =====================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (
          max-width: 380px
        ) {

          .engix-navbar-container {
            width:
              calc(
                100% - 24px
              );
          }


          .engix-navbar-logo-icon {
            width:
              37px;

            height:
              37px;

            min-width:
              37px;

            min-height:
              37px;

            max-width:
              37px;

            max-height:
              37px;

            flex-basis:
              37px;
          }


          .engix-navbar-logo-image {
            max-width:
              37px;

            max-height:
              37px;
          }


          .engix-navbar-logo-name {
            font-size:
              20px;
          }


          .engix-navbar-mobile-button {
            width:
              41px;

            height:
              41px;
          }

        }

      `}</style>

    </>
  );
}