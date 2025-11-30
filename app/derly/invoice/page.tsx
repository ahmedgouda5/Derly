"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Image from "next/image";

// Extend jsPDF type to include autoTable properties
interface jsPDFWithAutoTable extends jsPDF {
  lastAutoTable: {
    finalY: number;
  };
}

interface Product {
  name: string;
  quantity: number;
  price: number;
}

export default function InvoiceForm() {
  const [customer, setCustomer] = useState("");
  const [products, setProducts] = useState<Product[]>([
    { name: "", quantity: 1, price: 0 },
  ]);

  const handleProductChange = (
    index: number,
    field: keyof Product,
    value: string | number
  ) => {
    const newProducts = [...products];
    if (field === "name") {
      newProducts[index][field] = value as string;
    } else {
      newProducts[index][field] = Number(value);
    }
    setProducts(newProducts);
  };

  const addProduct = () =>
    setProducts([...products, { name: "", quantity: 1, price: 0 }]);

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text("Invoice", 105, 20, { align: "center" });

    // Customer
    doc.setFontSize(12);
    doc.text(`Customer: ${customer}`, 20, 40);

    // Table of Products
    const tableData = products.map((p) => [
      p.name,
      p.quantity,
      `$${p.price.toFixed(2)}`,
      `$${(p.quantity * p.price).toFixed(2)}`,
    ]);

    autoTable(doc, {
      startY: 50,
      head: [["Product", "Quantity", "Price", "Amount"]],
      body: tableData,
      styles: { fontSize: 11, cellPadding: 3 },
      headStyles: { fillColor: [54, 162, 235], textColor: 255 },
    });

    // Total
    const total = products.reduce((sum, p) => sum + p.quantity * p.price, 0);
    doc.setFontSize(14);
    doc.text(`Total: $${total.toFixed(2)}`, 160, (doc as jsPDFWithAutoTable).lastAutoTable.finalY + 10);

    // Footer
    doc.setFontSize(10);
    doc.text("Thank you for your business!", 105, 290, { align: "center" });

    doc.save(`${customer}.pdf`);
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl flex items-center justify-center gap-3 font-bold mb-6 text-black dark:text-white">
        Create Invoice
        <Image
          src="/Subtract.jpg"
          width={50}
          height={50}
          className="h-10 w-10 rounded-full"
          priority
          alt="Avatar"
        />
      </h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        className="mb-4 p-4 border border-gray-300 dark:border-neutral-700 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
      />

      {products.map((p, i) => (
        <div key={i} className="flex flex-col sm:flex-row gap-3 mb-4">
  <div className="flex-1 flex flex-col">
    <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
      Product Name
    </label>
    <input
      type="text"
      placeholder="Enter product name"
      value={p.name}
      onChange={(e) => handleProductChange(i, "name", e.target.value)}
      className="p-4 border border-gray-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
    />
  </div>

  <div className="w-full sm:w-28 flex flex-col">
    <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
      Qty
    </label>
    <input
      type="number"
      placeholder="0"
      value={p.quantity}
      onChange={(e) => handleProductChange(i, "quantity", e.target.value)}
      className="p-4 border border-gray-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
    />
  </div>

  <div className="w-full sm:w-32 flex flex-col">
    <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
      Price
    </label>
    <input
      type="number"
      placeholder="0.00"
      value={p.price}
      onChange={(e) => handleProductChange(i, "price", e.target.value)}
      className="p-4 border border-gray-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
    />
  </div>
</div>

      ))}

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={addProduct}
          className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Add Product
        </button>

        <button
          onClick={handleGeneratePDF}
          className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
}
