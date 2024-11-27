import { MenuItem } from "@/constants/menu-link";

interface MenuProps {
  links: MenuItem[];
}

export default function Menu({ links }: MenuProps) {
  const renderMenu = (menuItems: MenuItem[]) => {
    return (
      <ul className="menu menu-xs ">
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
    <div className="drawer-side mt-16 lg:mt-0">
      <label
        htmlFor="drawer"
        className="drawer-overlay"
        aria-label="Close menu"
      ></label>

      <div className="h-full  overflow-y-auto bg-base-200">
        <aside className="w-80 bg-base-200 text-base-content ">
          {renderMenu(links)}
        </aside>
      </div>
    </div>
  );

  // return <>{renderMenu(links)}</>;
}
