
import { useState } from "react";

export default function AllOrders(data) {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isSorted, setIsSorted] = useState(false);
    const [sortedOrders, setSortedOrders] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [isFilteredByDate, setIsFilteredByDate] = useState(false);
    const [filteredOrdersByDate, setFilteredOrdersByDate] = useState([]);
    const [isFilteredByRegNo, setIsFilteredByRegNo] = useState(false);
    const [filteredOrdersByRegNo, setFilteredOrdersByRegNo] = useState([]);
    const [isFilteredByCustomerName, setIsFilteredByCustomerName] = useState(false);
    const [filteredOrdersByCustomerName, setFilteredOrdersByCustomerName] = useState([]);
    const [isFilteredByMechanic, setIsFilteredByMechanic] = useState(false);
    const [filteredOrdersByMechanic, setFilteredOrdersByMechanic] = useState([]);
    return (
        <div>
            <h1>All Orders</h1>
            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => {
                if (search === '') {
                    alert('Please enter a search term!');
                    return;
                }
                setSearchResults(orders.filter((order) => order.customerName.toLowerCase().includes(search.toLowerCase())));
                setIsFiltered(true);
                setIsFilteredByDate(false);
                setIsFilteredByRegNo(false);
                setIsFilteredByCustomerName(false);
                setIsFilteredByMechanic(false);
            }}>Search</button>
            <button onClick={() => {
                if (isFiltered) {
                    setIsFiltered(false);
                    setSearchResults([]);
                }
                if (isFilteredByDate) {
                    setIsFilteredByDate(false);
                    setFilteredOrdersByDate([]);
                }
                if (isFilteredByRegNo) {
                    setIsFilteredByRegNo(false);
                    setFilteredOrdersByRegNo([]);
                }
                if (isFilteredByCustomerName) {
                    setIsFilteredByCustomerName(false);
                    setFilteredOrdersByCustomerName([]);
                }
                if (isFilteredByMechanic) {
                    setIsFilteredByMechanic(false);
                    setFilteredOrdersByMechanic([]);
                }
            }}>Clear</button>
            <button onClick={() => {
                if (isSorted) {
                    setIsSorted(false);
                    setSortedOrders([]);
                }
                if (isFiltered) {
                    setIsFiltered(false);
                    setSearchResults([]);
                }
                if (isFilteredByDate) {
                    setIsFilteredByDate(false);
                    setFilteredOrdersByDate([]);
                }
                if (isFilteredByRegNo) {
                    setIsFilteredByRegNo(false);
                    setFilteredOrdersByRegNo([]);
                }
                if (isFilteredByCustomerName) {
                    setIsFilteredByCustomerName(false);
                    setFilteredOrdersByCustomerName([]);
                }
                if (isFilteredByMechanic) {
                    setIsFilteredByMechanic(false);
                    setFilteredOrdersByMechanic([]);
                }
                setIsLoaded(false);
                fetch('http://localhost:3030/jsonstore/carService')
                    .then(res => res.json())
                    .then(data => {
                        setOrders(data);
                        setIsLoaded(true);
                    })
                    .catch(err => {
                        setIsLoaded(true);
                        setError(err);
                    });
            }}>Refresh</button>
            <button onClick={() => {
                if (isSorted) {
                    setIsSorted(false);
                    setSortedOrders([]);
                }   
                if (isFiltered) {
                    setIsFiltered(false);
                    setSearchResults([]);
                }
                if (isFilteredByDate) {
                    setIsFilteredByDate(false);
                    setFilteredOrdersByDate([]);
                }
                if (isFilteredByRegNo) {
                    setIsFilteredByRegNo(false);
                    setFilteredOrdersByRegNo([]);
                }
                if (isFilteredByCustomerName) {
                    setIsFilteredByCustomerName(false);
                    setFilteredOrdersByCustomerName([]);
                }
                if (isFilteredByMechanic) {
                    setIsFilteredByMechanic(false);
                    setFilteredOrdersByMechanic([]);
                }
                setIsLoaded(false);
                fetch('http://localhost:3030/jsonstore/carService')
                    .then(res => res.json())
                    .then(data => {
                        setOrders(data);
                        setIsLoaded(true);
                    })
                    .catch(err => {
                        setIsLoaded(true);
                        setError(err);
                    });
            }
            }>Sort</button>
            
            <button onClick={() => {
                if (isFiltered) {
                    setIsFiltered(false);
                    setSearchResults([]);
                }
                if (isSorted) {
                    setIsSorted(false);
                    setSortedOrders([]);
                }
                if (isFilteredByDate) {
                    setIsFilteredByDate(false);
                    setFilteredOrdersByDate([]);
                }
                if (isFilteredByRegNo) {
                    setIsFilteredByRegNo(false);
                    setFilteredOrdersByRegNo([]);
                }
                if (isFilteredByCustomerName) {
                    setIsFilteredByCustomerName(false);
                    setFilteredOrdersByCustomerName([]);
                }
                if (isFilteredByMechanic) {
                    setIsFilteredByMechanic(false);
                    setFilteredOrdersByMechanic([]);
                }
                setIsLoaded(false);
                fetch('http://localhost:3030/jsonstore/carService')
                    .then(res => res.json())
                    .then(data => {
                        setOrders(data);
                        setIsLoaded(true);
                    })
                    .catch(err => {
                        setIsLoaded(true);
                        setError(err);
                    });
            }
            }>Filter</button>   

            <button onClick={() => {
                if (isFiltered) {
                    setIsFiltered(false);
                    setSearchResults([]);
                }
                if (isSorted) {
                    setIsSorted(false);
                    setSortedOrders([]);
                }
                if (isFilteredByDate) {
                    setIsFilteredByDate(false);
                    setFilteredOrdersByDate([]);
                }
                if (isFilteredByRegNo) {
                    setIsFilteredByRegNo(false);
                    setFilteredOrdersByRegNo([]);
                }
                if (isFilteredByCustomerName) {
                    setIsFilteredByCustomerName(false);
                    setFilteredOrdersByCustomerName([]);
                }
                if (isFilteredByMechanic) {
                    setIsFilteredByMechanic(false);
                    setFilteredOrdersByMechanic([]);
                }
                setIsLoaded(false);
                fetch('http://localhost:3030/jsonstore/carService')
                    .then(res => res.json())
                    .then(data => {
                        setOrders(data);
                        setIsLoaded(true);
                    })
                    .catch(err => {
                        setIsLoaded(true);
                        setError(err);
                    });
            }
            }>Filter by date</button>


            <button onClick={() => {
                if (isFiltered) {
                    setIsFiltered(false);
                    setSearchResults([]);
                }
                if (isSorted) {
                    setIsSorted(false);
                    setSortedOrders([]);
                }
                if (isFilteredByDate) {
                    setIsFilteredByDate(false);
                    setFilteredOrdersByDate([]);
                }
                if (isFilteredByRegNo) {
                    setIsFilteredByRegNo(false);
                    setFilteredOrdersByRegNo([]);
                }
                if (isFilteredByCustomerName) {
                    setIsFilteredByCustomerName(false);
                    setFilteredOrdersByCustomerName([]);
                }
                if (isFilteredByMechanic) {
                    setIsFilteredByMechanic(false);
                    setFilteredOrdersByMechanic([]);
                }
                setIsLoaded(false);
                fetch('http://localhost:3030/jsonstore/carService')
                    .then(res => res.json())
                    .then(data => {
                        setOrders(data);
                        setIsLoaded(true);
                    })
                    .catch(err => {
                        setIsLoaded(true);
                        setError(err);
                    });
            }
            }>Filter by reg no</button>


            <button onClick={() => {
                if (isFiltered) {
                    setIsFiltered(false);
                    setSearchResults([]);
                }
                if (isSorted) {
                    setIsSorted(false);
                    setSortedOrders([]);
                }
                if (isFilteredByDate) {
                    setIsFilteredByDate(false);
                    setFilteredOrdersByDate([]);
                }
                if (isFilteredByRegNo) {
                    setIsFilteredByRegNo(false);
                    setFilteredOrdersByRegNo([]);
                }
                if (isFilteredByCustomerName) {
                    setIsFilteredByCustomerName(false);
                    setFilteredOrdersByCustomerName([]);
                }
                if (isFilteredByMechanic) {
                    setIsFilteredByMechanic(false);
                    setFilteredOrdersByMechanic([]);
                }
                setIsLoaded(false);
                fetch('http://localhost:3030/jsonstore/carService')
                    .then(res => res.json())
                    .then(data => {
                        setOrders(data);
                        setIsLoaded(true);
                    })
                    .catch(err => {
                        setIsLoaded(true);
                        setError(err);
                    });
            }
            }>Filter by customer name</button>


        </div>

    )
}

            
        
            
        
