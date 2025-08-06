import React, { useState } from 'react';
import {
  ChevronDown, ChevronRight, Cloud, Server, Database, Network, Folder,
  FileText, BarChart3, TestTube, List, PieChart
} from 'lucide-react';

const NavLink = ({ to, children, className }: any) => {
  const [isActive] = useState(false);
  return (
    <a href={to} className={typeof className === 'function' ? className({ isActive }) : className}>
      {children}
    </a>
  );
};

const sidebarData = [
  {
    name: "AWS", icon: Cloud, color: "orange", children: [
      { name: "Compute", icon: Server, route: "aws/compute" },
      {
        name: "Storage", icon: Database, children: [
          { name: "Storage Analysis", icon: BarChart3, route: "aws/storage/analysis" },
          { name: "Storage Testing", icon: TestTube, route: "aws/storage/testing" }
        ]
      },
      { name: "Network", icon: Network, route: "aws/network" },
      {
        name: "Resource Group", icon: Folder, children: [
          { name: "Resource Group List", icon: List, route: "aws/resource-group/list" },
          { name: "Resource Group Analysis", icon: PieChart, route: "aws/resource-group/analysis" }
        ]
      }
    ]
  },
  {
    name: "Azure", icon: Cloud, color: "blue", children: [
      { name: "Compute", icon: Server, route: "azure/compute" },
      {
        name: "Storage", icon: Database, children: [
          { name: "Storage Analysis", icon: BarChart3, route: "azure/storage/analysis" },
          { name: "Storage Testing", icon: TestTube, route: "azure/storage/testing" }
        ]
      },
      { name: "Network", icon: Network, route: "azure/network" },
      {
        name: "Resource Group", icon: Folder, children: [
          { name: "Resource Group List", icon: List, route: "azure/resource-group/list" },
          { name: "Resource Group Analysis", icon: PieChart, route: "azure/resource-group/analysis" }
        ]
      }
    ]
  },
  {
    name: "GCP", icon: Cloud, color: "green", children: [
      { name: "Compute", icon: Server, route: "gcp/compute" },
      {
        name: "Storage", icon: Database, children: [
          { name: "Storage Analysis", icon: BarChart3, route: "gcp/storage/analysis" },
          { name: "Storage Testing", icon: TestTube, route: "gcp/storage/testing" }
        ]
      },
      { name: "Network", icon: Network, route: "gcp/network" },
      {
        name: "Resource Group", icon: Folder, children: [
          { name: "Resource Group List", icon: List, route: "gcp/resource-group/list" },
          { name: "Resource Group Analysis", icon: PieChart, route: "gcp/resource-group/analysis" }
        ]
      }
    ]
  }
];

const getColorClasses = (color: string, type = 'gradient') => {
  const colors: any = {
    orange: {
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
      text: 'text-orange-500',
      border: 'border-orange-500',
      bg: 'bg-orange-50 border-orange-200'
    },
    blue: {
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      text: 'text-blue-500',
      border: 'border-blue-500',
      bg: 'bg-blue-50 border-blue-200'
    },
    green: {
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
      text: 'text-green-500',
      border: 'border-green-500',
      bg: 'bg-green-50 border-green-200'
    }
  };
  return colors[color]?.[type] || colors.blue[type];
};

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(prev => (prev === name ? null : name));
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(prev => (prev === name ? null : name));
  };

  const linkClass = "flex items-center px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 group";
  const activeClass = "bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-500";

  const renderMainItem = (item: any) => {
    const Icon = item.icon || FileText;
    const isOpen = openMenu === item.name;
    const hasChildren = item.children?.length > 0;

    return (
      <li key={item.name} className="mb-2">
        <div
          onClick={() => toggleMenu(item.name)}
          className={`group flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${getColorClasses(item.color)} text-white shadow-md`}
        >
          {hasChildren && (
            <div className="mr-3">{isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}</div>
          )}
          <Icon className="w-5 h-5 text-white" />
          <span className="ml-3 font-semibold">{item.name}</span>
        </div>

        {hasChildren && isOpen && (
          <div className="mt-3 ml-4 space-y-1 animate-fadeIn">
            {item.children.map((child: any) => renderSubItem(child))}
          </div>
        )}
      </li>
    );
  };

  const renderSubItem = (item: any) => {
    const Icon = item.icon || FileText;
    const isOpen = openSubmenu === item.name;
    const hasChildren = item.children?.length > 0;

    if (hasChildren) {
      return (
        <div key={item.name} className="mb-1">
          <div
            onClick={() => toggleSubmenu(item.name)}
            className="flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-sm text-gray-700 hover:text-gray-900"
          >
            {isOpen ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
            <Icon className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>

          {isOpen && (
            <div className="ml-6 mt-1 space-y-1 animate-fadeIn">
              {item.children.map((child: any) => renderLeafItem(child))}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={item.name}
        to={`/${item.route}`}
        className={({ isActive }: any) =>
          `${linkClass} ml-2 ${isActive ? activeClass : "text-gray-700 hover:text-gray-900"}`
        }
      >
        <Icon className="w-4 h-4 mr-2 text-gray-600 group-hover:text-blue-500 transition-colors" />
        <span className="text-sm">{item.name}</span>
      </NavLink>
    );
  };

  const renderLeafItem = (item: any) => {
    const Icon = item.icon || FileText;
    return (
      <NavLink
        key={item.name}
        to={`/${item.route}`}
        className={({ isActive }: any) =>
          `${linkClass} ml-1 ${isActive ? activeClass : "text-gray-600 hover:text-gray-800"}`
        }
      >
        <Icon className="w-3 h-3 mr-2 text-gray-500 group-hover:text-blue-500 transition-colors" />
        <span className="text-xs">{item.name}</span>
      </NavLink>
    );
  };

  return (
    <aside className="h-screen w-64 bg-white border-r border-gray-200 shadow-xl fixed top-0 left-0 flex flex-col">
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Cloud App</h1>
        </div>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarData.map(section => renderMainItem(section))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
