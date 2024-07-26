/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { useAsyncDebounce } from "react-table";

// GlobalFilter Component
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const [value, setValue] = useState(globalFilter);
    const searchInputRef = useRef(null);
  
    const handleSearch = () => {
      setGlobalFilter(value || undefined);
    };
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if ((e.altKey && e.key === 'k') || (e.metaKey && e.key === 'k')) {
          e.preventDefault();
          searchInputRef.current.focus();
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
  
    return (
      <div className="mb-4 flex mt-4">
        <input
          ref={searchInputRef}
          className="border rounded p-2 w-64"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            if(e.target.value === ""){
                setGlobalFilter("");
            }
          }}
          placeholder={`Search by Title (alt+k or cmd+k)`}
          
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          className="ml-2 bg-[#6C6BAF] text-white p-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    );
  }

// Table Component
function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200 border-collapse border-l"
        >
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider sticky top-0 bg-gray-50 p-4 border border-gray-300"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200 border-r-1"
          >
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="whitespace-normal text-sm text-gray-900 p-4 border-r border-gray-300"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination flex justify-end mt-2 gap-2 items-center">
        <span>Rows per page</span>
        <select
          className="mt-1 w-14 h-6 border-gray-400 border shadow-sm text-center font-light"
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
    </>
  );
}

export default Table;
