import {
    WaitlistTableData,
    WaitlistTableHeader,
  } from "@/constants/waitlistTableData";
  import React, { useState } from "react";
  import Image from "next/image";
  
  const WaitlistTable = () => {
    const [selectedRows, setSelectedRows] = useState([]);
  
    const handleSelectAll = (e: { target: { checked: any; }; }) => {
      if (e.target.checked) {
        setSelectedRows(WaitlistTableData.map((_, index) => index));
      } else {
        setSelectedRows([]);
      }
    };
  
    const handleSelectRow = (index: never) => {
      if (selectedRows.includes(index)) {
        setSelectedRows(selectedRows.filter((i) => i !== index));
      } else {
        setSelectedRows([...selectedRows, index]);
      }
    };
  
    return (
      <div className="mt-2">
        <div className="bg-white rounded-lg">
          <div className="overflow-auto rounded-lg" style={{ maxHeight: 'calc(100vh - 250px)' }}>
            <table className="bg-white w-full ">
              <thead className="sticky top-0 bg-slate-100 z-0">
                <tr>
                  <th className="py-2 px-4 border-b">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedRows.length === WaitlistTableData.length}
                      className="accent-black cursor-pointer"
                    />
                  </th>
                  {WaitlistTableHeader.map((header, indx) => (
                    <th className="py-2 px-4 border-b" key={indx}>
                      <div className="flex items-center gap-1">
                        <div>
                          <Image
                            className="w-[16px]"
                            src={header.tableHeaderIcon}
                            alt="header icon"
                          />
                        </div>
                        <div className="text-[12px]">
                          {header.tabledHeaderName}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WaitlistTableData.map((row, index) => (
                  <tr
                    className="text-[12px] font-semibold hover:bg-slate-400/20"
                    key={index}
                  >
                    <td className="py-2 px-4 border-b">
                      <input
                        type="checkbox"
                        onChange={() => handleSelectRow(index)}
                        checked={selectedRows.includes(index)}
                        className="accent-black cursor-pointer"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">{row.createdOn}</td>
                    <td className="py-2 px-4 border-b">{row.payer}</td>
                    <td className="py-2 px-4 border-b">
                      <div
                        className={`text-[10px] gap-1 font-semibold flex justify-end items-center rounded-xl ${
                          row.status === "Active"
                            ? "bg-green-300/40"
                            : row.status === "Inactive"
                            ? "bg-slate-300/40"
                            : "bg-blue-300/20"
                        } p-1 ${
                          row.status === "Active"
                            ? "text-green-700"
                            : row.status === "Inactive"
                            ? "text-slate-600"
                            : "text-blue-600"
                        }`}
                      >
                        <div className="w-[5%]">
                          <div
                            className={`w-[3px] h-[3px] bg-black rounded-3xl ${
                              row.status === "Active"
                                ? "bg-green-700"
                                : row.status === "Inactive"
                                ? "bg-slate-600"
                                : "bg-blue-600"
                            }`}
                          ></div>
                        </div>
                        <div className="w-[80%]">{row.status}</div>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">{row.email}</td>
                    <td className="py-2 px-4 border-b w-[140px]">{row.phone}</td>
                    <td className="py-2 px-4 border-b">{row.service}</td>
                    <td className="py-2 px-4 border-b">{row.scheduled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>Displaying {WaitlistTableData.length} of 100</div>
            <div className="flex gap-4">
              <button className="w-[5rem] border p-2 font-medium rounded bg-slate-200 cursor-pointer hover:bg-slate-300">
                Previous
              </button>
              <button className="w-[5rem] border p-2 font-medium rounded bg-slate-200 cursor-pointer hover:bg-slate-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WaitlistTable;
  