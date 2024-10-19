import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const LoanTransSelectionList = ({ onSelect }) => {
    const [loanTransData, setloanTransData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paginationParams, setPaginationParams] = useState({ page: 1, size: 10 });
    const [globalFilter, setGlobalFilter] = useState(""); // State for the global filter

    useEffect(() => {
        fetchMembers(paginationParams.page, paginationParams.size);
    }, [paginationParams]);

    const fetchMembers = async (page, size) => {
        setLoading(true);
        try {
            const response = await axios.get(`/main/approvals/loans/search-trans?page=${page}&size=${size}`);
            setloanTransData(response.data.data); // Adjust according to your API response structure
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
                value={loanTransData}
                loading={loading}
                resizableColumns
                stripedRows
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "50rem" }}
                globalFilter={globalFilter} // Apply global filter here
                header={header} // Set the header with search input
            >
                <Column field="no" header="#" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.no}</button>
                )} />
                <Column field="trans_no" header="Transaction No." sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.trans_no}</button>
                )} />
                <Column field="loan_collat_desc" header="Collateral" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.loan_collat_desc}</button>
                )} />
                <Column field="status" header="Status" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.status}</button>
                )} />
                <Column field="principal_amt" header="Principal Amount" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.principal_amt}</button>
                )} />
                <Column field="cbu" header="Capital Build Up" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.cbu}</button>
                )} />
                <Column field="net_amt" header="Net Amount" sortable body={(rowData) => (
                    <button onClick={() => handleSelect(rowData)}>{rowData.net_amt}</button>
                )} />
            </DataTable>
        </div>
    );
};
