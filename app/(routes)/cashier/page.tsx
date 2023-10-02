"use client";

import Menu from "@/app/_types/Menu";
import Order from "@/app/_types/Order";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const TABLE_COUNT = Number(process.env.TABLE_COUNT);

export default function Cashier() {
  const [orders, setOrders] = useState<Order[][]>([]);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [tables, setTables] = useState<number[]>([]);
  const [selectedTable, setSelectedTable] = useState<number>();

  useEffect(() => {
    if (localStorage.getItem("orders")) {
      const data = JSON.parse(localStorage!.getItem("orders")!);
      const grouppedOrders = [];
      for (let index = 0; index < TABLE_COUNT; index++) {
        const item = data.filter((x: Order) => x.tableId === index + 1);
        grouppedOrders.push(item);
      }
      setOrders(grouppedOrders);
    }

    if (localStorage.getItem("menus")) {
      const data = JSON.parse(localStorage!.getItem("menus")!);
      setMenus(data);
    }

    for (let index = 1; index <= TABLE_COUNT; index++) {
      setTables((oldData: number[]) => [...oldData, index]);
    }
  }, []);

  useEffect(() => {}, [orders]);

  const findMenu = (id: number): Menu => {
    const filteredMenu = menus.filter((x: Menu) => x.id === id);
    return filteredMenu[0];
  };

  const handleEmptyTable = () => {
    const data = JSON.parse(localStorage!.getItem("orders")!);
    const filteredData = data.filter((x: Order) => x.tableId !== selectedTable);
    localStorage.setItem("orders", JSON.stringify(filteredData));

    const grouppedOrders = [];
    for (let index = 0; index < TABLE_COUNT; index++) {
      const item = filteredData.filter((x: Order) => x.tableId === index + 1);
      grouppedOrders.push(item);
    }
    setOrders(grouppedOrders);
  };

  return (
    <section className="space-y-2">
      <div className="space-y-1">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Meja
        </label>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
          <div className="flex space-x-2 w-full md:w-[180px]">
            <Listbox
              as="div"
              className="relative w-full"
              value={selectedTable}
              onChange={setSelectedTable}
              disabled={
                orders.every(function (a) {
                  return !a.length;
                })
                  ? true
                  : false
              }
            >
              <Listbox.Button className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full">
                <span className="block truncate">
                  {selectedTable ?? "Print Struk"}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Listbox.Options
                className={
                  "absolute mt-0.5 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground text-muted-foreground"
                }
              >
                {tables.map((x, i) => (
                  <Listbox.Option key={i} value={x}>
                    {({ active, selected }) => (
                      <div
                        className={`flex w-full hover:bg-muted py-2 px-3 rounded-sm items-center gap-2 ${
                          selected ? "bg-muted" : ""
                        }`}
                      >
                        {selected && <CheckIcon className="h-4 w-4" />}
                        {x}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
          <button
            onClick={handleEmptyTable}
            className="w-full md:w-fit inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
            disabled={selectedTable ? false : true}
          >
            Kosongkan Meja
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <caption className="mt-4 text-sm text-muted-foreground">
              Terima kasih sudah makan di <b>Restoran</b>
            </caption>
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right w-[100px]">
                  Jumlah
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Menu
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">
                  Harga
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">
                  Total Harga
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {selectedTable &&
                orders[selectedTable! - 1].map((x) => (
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-right">
                      {x.quantity}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {findMenu(x.menuId).menu}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {findMenu(x.menuId).price}
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      {findMenu(x.menuId).price * x.quantity}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
