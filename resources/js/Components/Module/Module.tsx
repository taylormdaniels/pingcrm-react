import Table from "../Table/Table";

interface ModuleProps {
    type?: string,
    children?: React.ReactNode    
}

export default function Module({type, children} : ModuleProps) {
    return(
        <div className="container p-12 text-white border border-solid bg-slate-700">
            This is a module test.
        </div>
    );
}