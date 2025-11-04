import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const THEMES = ['light', 'dark', 'red'];
    const changeTheme = (e) => setTheme(e.target.value)
  return (
    <header className={`content-${theme}`}>
        {THEMES.map(t => {
          return (
            <label key={t}>
          <input
            key={t}
            type="radio"
            value={t}
            checked={theme === t}
            onChange={changeTheme}
          />
          {t}
        </label>
          )
        })}
      </header>
    );
};

export default Header;
