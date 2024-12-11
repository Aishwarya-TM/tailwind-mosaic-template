import React from 'react'

const Navbar = () => {
    const toggleDropdown = (e) => {
        const dropdown = e.target.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };
  return (
    <nav className="fixed top-0 left-0 bg-white shadow-lg w-64 h-screen p-8 pl-12 leading-8">
                <div className="logo"></div>
                <h2 className="text-base font-normal mb-4 text-blue-600">PAGES</h2>
                <ul>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Dashboard
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            E-Commerce
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="/customers">Customers</a></li>
                            <li><a href="#">Orders</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Community
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Finance
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Job board
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Task
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Message
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Inbox
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-300"
                            onClick={toggleDropdown}
                        >
                            Calender
                        </button>
                        <ul style={{ display: 'none' }} className="dropdown-content">
                            <li><a href="#">Option 1</a></li>
                            <li><a href="#">Option 2</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
  )
}

export default Navbar