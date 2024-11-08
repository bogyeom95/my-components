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
                  <span className="font-semibold">{item.label}</span>
                </summary>
                {renderMenu(item.children)}
              </details>
            ) : (
              <a href={item.link}>
                {/* {item.icon && <span className="mr-2">{item.icon}</span>} */}
                <span className="font-semibold">{item.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="drawer-side top-16 lg:top-0 h-[calc(100svh-4rem)]">
      <label
        htmlFor="drawer"
        className="drawer-overlay"
        aria-label="Close menu"
      ></label>
      <aside className="h-full w-80 text-base-content space-y-4 bg-base-200 z-1">
        <ul className="menu px-4 py-0">{renderMenu(links)}</ul>
      </aside>
    </div>
  );

  // return <>{renderMenu(links)}</>;
}
