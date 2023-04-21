export const Test = 0

export interface TableHeader {
    field: string;
    header: string;
}

export interface DashBoardTableProps {
    headers: TableHeader[];
    values: any[];
}