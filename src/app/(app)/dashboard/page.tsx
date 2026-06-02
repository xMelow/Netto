import TotalNetWorth from "@/components/TotalNetWorth";


export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[var(--background)] p-8">
            <TotalNetWorth netWorth={20000} goal={100000} monthlyChange={200}/>
        </div>

    )
}
