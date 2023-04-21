import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { DashBoardTableProps } from './types';

const TableKU = (props: DashBoardTableProps) => {
  return <div  className="card">
    <DataTable value={props.values} sortMode="multiple" showGridlines paginator rows={2} tableStyle={{ minWidth: '50rem' }}>
      {props.headers.map((h) =>
        <Column field={h.field} sortable header={h.header}></Column>
      )}
    </DataTable>
  </div>;
}

export default TableKU
