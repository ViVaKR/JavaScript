import React from 'react';
import TablePaginationActions from './TablePagination';
import TableStickyHeader from './TableStickyHeader';
export default function TableList() {
  return (
    <div>
      <h1>Table List</h1>

      <TableStickyHeader />

      <div className="my-8 bg-slate-400 h-2 w-full rounded-full"></div>
      <React.Fragment>
        <TablePaginationActions />
      </React.Fragment>
    </div>
  );
}
