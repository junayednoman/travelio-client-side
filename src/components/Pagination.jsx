
"use client"
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function Pagination() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="card md:mt-12 mt-6">
            <Paginator first={first} rows={rows} totalRecords={60} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    );
}
