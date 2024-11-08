import { MenuItem } from "@/constants/menu-link";

interface MenuProps {
  links: MenuItem[];
}

export default function Menu({ links }: MenuProps) {
  const renderMenu = (menuItems: MenuItem[]) => {
    return (
      <ul className="menu ">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.children && item.children.length > 0 ? (
              <details open>
                <summary>
                  {/* {item.icon && <span className="mr-2">{item.icon}</span>} */}
                  {item.label}
                </summary>
                {renderMenu(item.children)}
              </details>
            ) : (
              <a href={item.link}>
                {/* {item.icon && <span className="mr-2">{item.icon}</span>} */}
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="drawer-side top-16 ">
      <label
        htmlFor="drawer"
        className="drawer-overlay"
        aria-label="Close menu"
      ></label>
      <aside className="min-h-screen w-80 text-base-content space-y-4 bg-base-100 z-1">
        <ul className="menu px-4 py-0">{renderMenu(links)}</ul>
      </aside>
    </div>
  );

  // return <>{renderMenu(links)}</>;
}
