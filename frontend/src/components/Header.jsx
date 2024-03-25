

function Header() {

  return (

    <nav className="navbar bg-body-tertiary "> 
      <div className="container-fluid">
        <a className="navbar-brand">NoticeBoard</a>
        <div className="d-flex">
          <a 
          
href="/Login" className="me-2">Login</a>
          <a href="/registration">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
<button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>