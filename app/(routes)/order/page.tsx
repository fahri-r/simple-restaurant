"use client";

import random from "@/app/_lib/random";
import Menu from "@/app/_types/Menu";
import Order from "@/app/_types/Order";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, FormEvent } from "react";

const TABLE_COUNT = Number(process.env.TABLE_COUNT);

export default function Order() {
  const [selectedTable, setSelectedTable] = useState<number>(0);
  const [tables, setTables] = useState<number[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<Menu>();
  const [menus, setMenus] = useState<Menu[]>([]);
  const [order, setOrder] = useState<Order[]>([]);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    if (localStorage.getItem("menus")) {
      const data = JSON.parse(localStorage!.getItem("menus")!);
      setMenus(data);
      setSelectedMenu(data[0]);
    }

    if (localStorage.getItem("orders")) {
      const data = JSON.parse(localStorage!.getItem("orders")!);
      setOrder(data);
    }

    for (let index = 1; index <= TABLE_COUNT; index++) {
      setTables((oldData: number[]) => [...oldData, index]);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newOrder: Order = {
      id: random(1, 999999),
      tableId: selectedTable,
      menuId: selectedMenu!.id,
      quantity,
    };

    if (newOrder) {
      setOrder((oldData: Order[]) => [...oldData, newOrder]);
    }

    (e.target as HTMLFormElement).reset();
    setSelectedMenu(menus[0]);
    setSelectedTable(0);
  };

  useEffect(() => {
    if (order.length > 0) {
      localStorage.setItem("orders", JSON.stringify(order));
    }
  }, [order]);

  return (
    <section className="space-y-3">
      <form onSubmit={handleSubmit}>
        <div className="flex border rounded-md">
          {tables?.map((x, i) => (
            <div
              key={i}
              className={`flex-1 p-2 text-center cursor-pointer transition-colors ${
                selectedTable === x
                  ? "bg-black text-white"
                  : "bg-white hover:bg-muted text-foreground"
              } text-sm h-[60px] flex items-center justify-center ${
                x == 1 ? "rounded-l-md" : ""
              } ${x == tables.length ? "rounded-r-md" : ""}`}
              onClick={() => setSelectedTable(x)}
            >
              Meja {x}
            </div>
          ))}
        </div>
        {selectedMenu && (
          <div className="flex flex-col md:flex-row md:space-x-2">
            <div className="space-y-1 w-full">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Menu
              </label>
              <Listbox
                as="div"
                className="relative"
                value={selectedMenu}
                onChange={setSelectedMenu}
              >
                <Listbox.Button className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground">
                  <span className="block truncate">{selectedMenu.menu}</span>
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
                  {menus.map((x, i) => (
                    <Listbox.Option key={i} value={x}>
                      {({ active, selected }) => (
                        <div
                          className={`flex w-full hover:bg-muted py-2 px-3 rounded-sm items-center gap-2 ${
                            selected ? "bg-muted" : ""
                          }`}
                        >
                          {selected && <CheckIcon className="h-4 w-4" />}
                          {x.menu}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <div className="space-y-1 w-full">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Jumlah
              </label>
              <input
                onChange={(e) => setQuantity(Number(e.target.value))}
                type="number"
                placeholder="Kuantitas"
                className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full md:w-[140px] text-muted-foreground"
              />
            </div>
          </div>
        )}
        <div className="text-right mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[100px]"
            disabled={
              !selectedMenu || !selectedTable || !quantity ? true : false
            }
          >
            Tambah
          </button>
        </div>
      </form>
    </section>
  );
}
