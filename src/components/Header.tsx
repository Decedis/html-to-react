type NavElmType = {
  links: string[];
};

export function Header(list: NavElmType) {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {list.links.map((link: string) => (
          <li>{link}</li>
        ))}
      </nav>
    </header>
  );
}
