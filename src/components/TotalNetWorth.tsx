type TotalNetworthProps = {
    netWorth: number
    goal: number
    monthlyChange: number
}

export default function TotalNetWorth({ netWorth, goal, monthlyChange }: TotalNetworthProps) {
    const percentage = Math.min((netWorth / goal) * 100, 100)
    const isPositive = monthlyChange >= 0

    return (
        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] flex flex-col gap-3">
            <div className="flex items-baseline gap-3">
                <h2 className="text-4xl font-bold text-[var(--foreground)]">
                    {"€ " + netWorth.toLocaleString()}
                </h2>
                <span className={`text-sm font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? "+ " : "-"}€ {monthlyChange.toLocaleString()} this month
                </span>
            </div>

            <div className="relative">
                <div className="w-full bg-[var(--background)] h-4 rounded">
                    <div
                        className={`h-4 rounded ${isPositive ? "bg-green-500" : "bg-red-500"}`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>€ 0</span>
                    <span>{"€ " + goal.toLocaleString()}</span>
                </div>
                <div className="relative h-5">
                    <span
                        className="absolute text-sm text-[var(--foreground)] -translate-x-1/2"
                        style={{ left: `${percentage}%` }}
                    >
                        {"€ " + netWorth.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
}
