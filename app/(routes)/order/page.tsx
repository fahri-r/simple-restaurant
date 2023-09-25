"use client";

import random from "@/app/_lib/random";
import Menu from "@/app/_types/Menu";
import Order from "@/app/_types/Order";
import { Listbox } from "@headlessui/react";
import { useState, useEffect, FormEvent } from "react";
const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
export default function Order() {
  const [selectedTable, setSelectedTable] = useState<number>(0);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [menu, setMenu] = useState<Menu[]>([]);
  const [order, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    if (localStorage.getItem("menus")) {
      const data = JSON.parse(localStorage!.getItem("menus")!);
      setMenu(data);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newOrder: Order = {
      id: random(1, 999999),
      tableId: selectedTable,
      menuId: selectedPerson.id,
      quantity: 
    };

    if (newOrder) {
      setMenu((oldData: Menu[]) => [...oldData, newMenu]);
    }
    setForm(INITIAL_FORM);
  };

  return (
    <section className="space-y-3">
      <div className="flex border rounded-md">
        <div
          className={`flex-1 p-2 text-center hover:bg-muted cursor-pointer transition-colors ${
            selectedTable === 1
              ? "bg-black text-white"
              : "bg-white text-foreground"
          } text-sm h-[60px] flex items-center justify-center rounded-l-md`}
          onClick={() => setSelectedTable(1)}
        >
          Meja 1
        </div>
        <div
          className={`flex-1 p-2 text-center hover:bg-muted cursor-pointer transition-colors ${
            selectedTable === 2
              ? "bg-black text-white"
              : "bg-white text-foreground"
          } text-sm h-[60px] flex items-center justify-center`}
          onClick={() => setSelectedTable(2)}
        >
          Meja 2
        </div>
        <div
          className={`flex-1 p-2 text-center hover:bg-muted cursor-pointer transition-colors  ${
            selectedTable === 3
              ? "bg-black text-white"
              : "bg-white text-foreground"
          } text-sm h-[60px] flex items-center justify-center rounded-r-md`}
          onClick={() => setSelectedTable(3)}
        >
          Meja 3
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="space-y-1 w-full">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Menu
          </label>

          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground">
              {selectedPerson.name}
            </Listbox.Button>
            <Listbox.Options>
              {menu.map((x, i) => (
                <Listbox.Option key={i} value={x.id}>
                  {x.menu}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Jumlah
          </label>
          <input
            type="number"
            placeholder="Kuantitas"
            className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[140px] text-muted-foreground"
          />
        </div>
      </div>
      <div className="text-right">
        <button onClick={handleSubmit} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[100px]">Tambah</button>
      </div>
    </section>
  );
}
