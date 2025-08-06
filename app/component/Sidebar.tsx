import { useState } from "react";
import { NavLink } from 'react-router';
import sidebarData from "../../app/config/SideBar.json";

const linkClass = "block px-4 py-2 rounded hover:bg-gray-200";
const activeClass = "bg-gray-300 font-medium text-blue-700";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null); // ✅ Track only one open

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name)); // ✅ Accordion toggle
  };

  return (
    <aside className="h-screen w-64 bg-gray-100 shadow-md fixed top-0 left-0 overflow-y-auto">
      <div className="p-4 text-xl font-semibold border-b border-gray-300">
        Cloud App
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarData.map((section) => (
            <li key={section.name}>
              <div
                className="cursor-pointer font-semibold px-2 py-2 hover:bg-gray-200 rounded"
                onClick={() => toggleMenu(section.name)}
              >
                {section.name}
              </div>

              {openMenu === section.name && (
                <ul className="ml-4 space-y-1">
                  {section.children.map((child, idx) =>
                    child.children ? (
                      <li key={idx}>
                        <div className="font-medium text-sm">{child.name}</div>
                        <ul className="ml-4">
                          {child.children.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <NavLink
                                to={`/${sub.route}`}
                                className={({ isActive }) =>
                                  `${linkClass} ${
                                    isActive ? activeClass : "text-gray-700"
                                  }`
                                }
                              >
                                {sub.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={idx}>
                        <NavLink
                          to={`/${child.route}` || "#"}
                          className={({ isActive }) =>
                            `${linkClass} ${
                              isActive ? activeClass : "text-gray-700"
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
