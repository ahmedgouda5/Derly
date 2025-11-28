"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { month: "January", salary: 186 },
  { month: "February", salary: 305 },
  { month: "March", salary: 237 },
  { month: "April", salary: 73 },
  { month: "May", salary: 209 },
  { month: "June", salary: 214 },
];

const chartConfig = {
  salary: {
    label: "Salary",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaGradient() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Area Chart - Gradient</CardTitle>
          <CardDescription>
            Showing total visitors for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            style={{ height: "400px", width: "100%" }}
          >
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <Area
                dataKey="salary"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="#3b82f6"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
