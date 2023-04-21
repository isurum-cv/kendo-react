import TableKU from "../../../components/Dashboard/Table"
import { TableHeader } from "../../../components/Dashboard/Table/types"
import { Accessories } from "../../../pages/Dashboard/types"

const Table = () => {
    const accessories: Accessories[] = [
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          price: 65,
        },
        {
          id: '1001',
          code: 'nvklal433',
          name: 'Black Watch',
          description: 'Product Description',
          price: 72,
        },
        {
          id: '1002',
          code: 'zz21cz3c1',
          name: 'Blue Band',
          description: 'Product Description',
          price: 79,
        },
        {
          id: '1003',
          code: '244wgerg2',
          name: 'Blue T-Shirt',
          description: 'Product Description',
          price: 29,
        },
        {
          id: '1004',
          code: 'h456wer53',
          name: 'Bracelet',
          description: 'Product Description',
          price: 15,
        },
        {
          id: '1005',
          code: 'av2231fwg',
          name: 'Brown Purse',
          description: 'Product Description',
          price: 120,
        },
        {
          id: '1006',
          code: 'bib36pfvm',
          name: 'Chakra Bracelet',
          description: 'Product Description',
          price: 32,
        },
      ]
    
    
      const headers: TableHeader[] = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'description', header: 'Description' },
        { field: 'price', header: 'Price' },
      ]

      return <TableKU headers={headers} values={accessories} />
}

export default Table