import './HeaderStyles.scss';

export function Header() {
  return `
    <header>
      <h1>Header</h1>
      <nav class="nav">
        <ul class="nav__list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Foods</a></li>
        </ul>
      </nav>
    </header>
  `;
}
