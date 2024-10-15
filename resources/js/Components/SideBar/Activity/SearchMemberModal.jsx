import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const MemberSelectionList = ({ onSelect }) => {
    const [membersData, setMembersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paginationParams, setPaginationParams] = useState({ page: 1, size: 10 });
    const [globalFilter, setGlobalFilter] = useState(""); // State for the global filter

    useEffect(() => {
        fetchMembers(paginationParams.page, paginationParams.size);
    }, [paginationParams]);

    const fetchMembers = async (page, size) => {
        setLoading(true);
        try {
            const response = await axios.get(`/main/activities/transactions/loans/search-member?page=${page}&size=${size}`);
            setMembersData(response.data.data); // Adjust according to your API response structure
        } catch (error) {
            console.error('Error fetching members:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (member) => {
        onSelect(member);
    };

    const header = (
        <div className="table-header">
            <span className="p-input-icon-left">
                <input
                    className="w-full border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="search"
                    value={globalFilter}
                    onInput={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </span>
        </div>
    );

    return (
        <div>
            <DataTable
                value={membersData}
                loading={loading}
                resizableColumns
                stripedRows
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "50rem" }}
                globalFilter={globalFilter} // Apply global filter here
                header={header} // Set the header with search input
            >
                <Column field="first_name" header="First Name" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.first_name}</button>
                )} />
                <Column field="middle_name" header="Middle Name" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.middle_name}</button>
                )} />
                <Column field="last_name" header="Last Name" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.last_name}</button>
                )} />
            </DataTable>
        </div>
    );
};
