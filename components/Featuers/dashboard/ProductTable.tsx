"use client";

import { useState, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialProducts = [
  { name: "Product 1", costPrice: 100, sellingPrice: 150, quantity: 0, profit: 0 },
  { name: "Product 2", costPrice: 80, sellingPrice: 120, quantity: 0, profit: 0 },
  { name: "Product 3", costPrice: 200, sellingPrice: 250, quantity: 0, profit: 0 },
  { name: "Product 4", costPrice: 300, sellingPrice: 400, quantity: 0, profit: 0 },
];

export function TableDemo() {
  const [products, setProducts] = useState(initialProducts);

  const handlePurchase = useCallback((index: number) => {
    setProducts((prev) =>
      prev.map((p, i) => {
        if (i === index) {
          const newQuantity = p.quantity + 1;
          const newProfit = (p.sellingPrice - p.costPrice) * newQuantity;
          return { ...p, quantity: newQuantity, profit: newProfit };
        }
        return p;
      })
    );
  }, []);

  const totalProfit = products.reduce((sum, p) => sum + p.profit, 0);
  const totalSales = products.reduce((sum, p) => sum + p.quantity * p.sellingPrice, 0);

  return (
    <Table>
      <TableCaption>Derly Products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Product</TableHead>
          <TableHead>Cost Price</TableHead>
          <TableHead>Selling Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Profit</TableHead>
          <TableHead className="text-center">Purchase</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>${product.costPrice.toFixed(2)}</TableCell>
            <TableCell>${product.sellingPrice.toFixed(2)}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell className="text-right">${product.profit.toFixed(2)}</TableCell>
            <TableCell className="text-center">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handlePurchase(index)}
              >
                Purchase
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Profit</TableCell>
          <TableCell className="text-right">${totalProfit.toFixed(2)}</TableCell>
          <TableCell />
        </TableRow>
        <TableRow>
          <TableCell colSpan={4}>Total Sales</TableCell>
          <TableCell className="text-right">${totalSales.toFixed(2)}</TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
