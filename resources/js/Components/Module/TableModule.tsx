import Table from "../Table/Table";

interface TableModuleProps {
    table?: BigInteger,
    user_id?: BigInteger,
    customer_id?: BigInteger
}

export default function TableModule({table, user_id, customer_id} : TableModuleProps) {
    return(
        <div>
            <Table 
        </div>
    )
}