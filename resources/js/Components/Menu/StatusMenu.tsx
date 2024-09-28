import StatusMenuItem from "./StatusMenuItem";

interface StatusMenuProps {
  className?: string;
}

export default function StatusMenu({ className }: StatusMenuProps) {
    return (
        <div className={className}>
            <StatusMenuItem
                text="Urgent"
                link="dashboard"
                color="bg-red-700"
            />
            <StatusMenuItem
                text="Reminder"
                link="organizations"
                color="bg-orange-700"
            />
            <StatusMenuItem
                text="Attention"
                link="contacts"
                color="bg-blue-700"
            />
            <StatusMenuItem
                text="Tracking"
                link="reports"
                color="bg-green-500"
            />
        </div>
    )
}
