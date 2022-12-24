import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  // selectUserName,
  selectToken,
  selectStaff,
  logout,
  selectLogged,
  selectUserId,
} from "../app/Authentication/authenticationSlice";
import { selectCategoryList } from "../app/Category/categorySlice";


const Header = () => {
  const dispatch = useDispatch();
  const isStaff = useSelector(selectStaff);
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  const categories = useSelector(selectCategoryList);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
        <div className="container">
            <Link className="navbar-brand font-weight-bold" to={{ pathname: "/"}}>Django shop</Link>
            {/* Home page */}

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
            aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse " id="main-navbar">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                <Link className="nav-link" to={{ pathname: "/"}}>Home</Link>
                </li>
                {/* Home page */}

                <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
                </li>
                {/* About us page */}
              
                <li className="nav-item dropdown dropdown-slide">
                <Link className="nav-link dropdown-toggle" to="/category" id="navbarDropdown4" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  Categories</Link>
               
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                {/* {categories.map((cat) => (
          <Link className="nav-link" key={cat._id} to={`/category/${cat._id}`}>
            {cat.name + " id: " + cat._id} <br></br>
            <br></br>
          </Link>
        ))} */}

                  <li>{categories.map((cat)=> <Link className="nav-link" key={cat._id} to={`/category/${cat._id}`}> {cat.name}</Link>)}</li>

                    {/* <li><a href="#">Blog</a></li>
                    <li><a href="#">Blog Single</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">404 Page</a></li>
                    <li><a href="#">FAQ</a></li> */}
                </ul>
                </li>
               {/* Possible category loop with links */}

                <li className="nav-item dropdown dropdown-slide">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account.
                </a>
                {/* Login/Register pages */}

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
                    <li><Link to={{ pathname: "/login"}}>Login Page</Link></li>
                    {/* Login Page */}

                    <li><Link to={{ pathname: "/signup"}}>SignUp Page</Link></li>
                    {/* SignUp Page */}
                    
                </ul>
                </li>
            </ul>
            </div>
        
            <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
            <li class="list-inline-item">
                <a href="#" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></a>
            </li>
            {/* serach  */}


            <li class="dropdown cart-nav dropdown-slide list-inline-item">
                <a href="#" class="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">

                <i class="tf-ion-android-cart"></i>
                </a>
                <div class="dropdown-menu cart-dropdown">
             
               {/* Cart content  */}
                <div class="media">
                    <a href="/product-single">
                    <img class="media-object img-fluid mr-3" src="assets/images/cart-2.jpg" alt="image" />
                    </a>
                    <div class="media-body">
                    <h6>Skinny Jeans</h6>
                    {/* Cart list loop */}


                    <div class="cart-price">
                        <span>1 x</span>
                        {/* amount per product */}
                        <span>1250.00</span>
                        {/* total price per prudct */}
                    </div>
                    </div>
                    <a href="#" class="remove"><i class="tf-ion-close"></i></a>
                    {/* Delete from cart */}
                </div>


                <div class="cart-summary">
                    <span class="h6">Total</span>
                    <span class="total-price h6">$1799.00</span>
                    {/* all products price */}


                    <div class="text-center cart-buttons mt-3">
                    <Link to={{ pathname: "/cart"}}><a href="#" class="btn btn-small btn-transparent btn-block">View Cart</a></Link>
                    {/* Cart page */}

                    <Link to={{ pathname: "/checkout"}}><a href="#" class="btn btn-small btn-main btn-block">Checkout</a></Link>
                    {/* Checkout Page */}
                    </div>
                </div>
                </div>
            </li>
            {/* Cart */}

            <li class="list-inline-item"><a href="#"><i class="tf-ion-ios-person mr-3"></i></a></li>
            {/* profile icon */}
            </ul>
        </div>
        </nav>
    );


    //#################################
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
        {/* <div className="container-fluid"> */}
        <ul className="navbar-nav ">
          {token && <button onClick={() => dispatch(logout())}>logout</button>}

          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/product">
              ALL Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="/cart">
              MyCart
            </Link>
          </li>
          {token && (
            <li className="nav-item">
              <Link className="nav-link " to={`/profile/${userId}`}>
                My Profile
              </Link>
            </li>
          )}
          {!token && (
            <li className="nav-item">
              <Link className="nav-link " to="/login">
                Login\Register
              </Link>
            </li>
          )}

          {isStaff && (
            <li className="nav-item">
              <Link className="nav-link " to="/staffGUI">
                STAFF GUI
              </Link>
            </li>
          )}
          {isStaff && (
            <li className="nav-item">
              <Link className="nav-link " to="/Admin">
                ADMIN WEB
              </Link>
            </li>
          )}
        </ul>
        {/* </div> */}
      </nav>
    </div>
  // );
};

export default Header;

