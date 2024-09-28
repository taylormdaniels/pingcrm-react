import StatusMenuItem from "./StatusMenuItem";

interface StatusMenuProps {
  className?: string;
}

export default function StatusMenu({ className }: StatusMenuProps) {
    return (
        <div className={className}>
            <StatusMenuItem
                text="Behind Schedule"
                link="dashboard"
                color="bg-red-700"
            />
            <StatusMenuItem
                text="Needs Attention"
                link="organizations"
                color="bg-orange-700"
            />
            <StatusMenuItem
                text="Active Jobs"
                link="contacts"
                color="bg-green-700"
            />
            <StatusMenuItem
                text="Reports"
                link="reports"
                color="bg-gray-500"
            />
        </div>
    )
}
