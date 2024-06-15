function Header() {
  return (
    <nav className='#006064 cyan darken-4'>
      <div className='nav-wrapper'>
        <a href='#!' className='brand-logo'>
          React Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='#!'>Repository</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
