import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // This import is now used
import '../assets/style/navbarstyle.css'; // Import the new CSS file

const Navigation = ({ isOpen, onNavigate = () => {} }) => {
    const [activeItem, setActiveItem] = useState('home');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { id: 'home', label: 'Home', icon: 'fa-house', path: '/' },
        { id: 'staff', label: 'Staff Management', icon: 'fa-user', path: '/staff' },
        { id: 'field', label: 'Field Management', icon: 'fa-map', path: '/field' },
        { id: 'crop', label: 'Crop Management', icon: 'fa-seedling', path: '/crop' },
        { id: 'mlog', label: 'Monitoring Log', icon: 'fa-book', path: '/mlog' },
        { id: 'equipment', label: 'Equipment', icon: 'fa-wrench', path: '/equipment' },
        { id: 'vehicle', label: 'Vehicle', icon: 'fa-truck', path: '/vehicle' },
        { id: 'settings', label: 'Settings', icon: 'fa-gear', path: '/settings' },
        { id: 'logout', label: 'Logout', icon: 'fa-right-from-bracket', path: '/logout' },
    ];

    const handleNavigation = (item) => {
        setActiveItem(item.id);
        setMenuOpen(false);
        onNavigate(item.path);
    };

    return (
        <>
            <div className="relative">
                {/* Burger Menu Button - Only shows on mobile */}
                {!isMenuOpen && (
                    <button
                        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-lg bg-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-gray-50"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <i className="fas fa-bars-staggered text-gray-700 text-xl"></i>
                    </button>
                )}

                {/* Sidebar */}
                <aside
                    className={`fixed inset-y-0 left-0 z-40 bg-white/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out
                        ${isMenuOpen || isOpen ? 'translate-x-0' : '-translate-x-full'} 
                        ${isCollapsed ? 'w-16' : 'w-72'}
                        md:translate-x-0 border-r border-gray-100`}
                >
                    {/* Logo Section */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            {!isCollapsed && (
                                <span className="text-lg font-semibold text-gray-800">Dashboard</span>
                            )}
                        </div>
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            <i className={`fas ${isCollapsed ? 'fa-arrow-right' : 'fa-arrow-left'} text-gray-600`}></i>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="p-3 mt-2">
                        <div className="space-y-1">
                            {menuItems.map((item) => (
                                item.id !== 'logout' && (
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        onClick={() => handleNavigation(item)}
                                        className={`flex items-center w-full px-3 py-3 rounded-lg transition-all duration-200 group
                                            ${activeItem === item.id
                                            ? 'bg-green-50 text-green-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                                    >
                                        <i className={`fas ${item.icon} text-xl w-8 
                                            ${activeItem === item.id
                                            ? 'text-green-600'
                                            : 'text-gray-400 group-hover:text-gray-600'}`}></i>
                                        {!isCollapsed && (
                                            <span className="font-medium ml-3 whitespace-nowrap">{item.label}</span>
                                        )}
                                    </Link>
                                )
                            ))}
                        </div>
                    </nav>

                    {/* Logout Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-100">
                        <Link
                            to={menuItems.find(item => item.id === 'logout').path}
                            onClick={() => handleNavigation(menuItems.find(item => item.id === 'logout'))}
                            className="flex items-center w-full px-3 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                        >
                            <i className="fas fa-right-from-bracket text-xl w-8 text-gray-400"></i>
                            {!isCollapsed && (
                                <span className="font-medium ml-3">Logout</span>
                            )}
                        </Link>
                    </div>
                </aside>
            </div>

            {/* Main Content Container */}
            <div className={`transition-all duration-300 ease-in-out
                ${isCollapsed ? 'md:ml-16' : 'md:ml-72'}`}>
                {/* Your main content goes here */}
            </div>
        </>
    );
};

export default Navigation;
