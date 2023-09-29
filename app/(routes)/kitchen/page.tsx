"use client";

import Menu from "@/app/_types/Menu";
import Order from "@/app/_types/Order";
import { useEffect, useState } from "react";

const TABLE_COUNT = Number(process.env.TABLE_COUNT);

export default function Kitchen() {
  const [orders, setOrders] = useState<Order[][]>([[], [], []]);
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage!.getItem("orders")!);
    const grouppedOrders = [];
    for (let index = 0; index < TABLE_COUNT; index++) {
      const item = data?.filter((x: Order) => x.tableId === index + 1);
      grouppedOrders.push(item);
    }
    setOrders(grouppedOrders);
    if (localStorage.getItem("menus")) {
      const data = JSON.parse(localStorage!.getItem("menus")!);
      setMenus(data);
    }
  }, []);

  const findMenu = (id: number): Menu => {
    const filteredMenu = menus.filter((x: Menu) => x.id === id);
    return filteredMenu[0];
  };

  return (
    <section>
      <div className="flex">
        {orders &&
          orders.map((x, i) => (
            <div className="w-1/3 space-y-4" key={i}>
              <h3 className="font-semibold text-xl leading-none">
                Meja {i + 1}
              </h3>
              {x &&
                x.map((y, j) => (
                  <div className="space-y-1" key={j}>
                    <div className="flex text-sm text-muted-foreground">
                      <div className="w-[30px]">{y.quantity}x</div>
                      <div className="w-full">{findMenu(y.menuId).menu}</div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </section>
  );
}
