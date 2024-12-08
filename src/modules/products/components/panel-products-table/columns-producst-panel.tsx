import ButtonActions from '@/components/buttonActions/ButtonActions'
import { ColumnProps } from 'primereact/column'

const ColumnsProductsPanel = () => {
  const buttonActions = () => {
    return (
      <>
        <div className="space-x-4">
          <ButtonActions
            hanledDelete={() => {}}
            hanledEdit={() => {}}
            newButton
          />
        </div>
      </>
    )
  }
  const columns: ColumnProps[] = [
    {
      field: 'product',
      header: 'Product',
      sortable: true,
    },
    {
      field: 'productVariant',
      header: 'Variants',
      sortable: true,
    },
    {
      field: 'price',
      header: 'Price',
      sortable: true,
    },
    {
      field: 'size',
      header: 'Size',
      sortable: true,
    },
    {
      field: 'gender',
      header: 'Gender',
      sortable: true,
    },
    {
      field: 'brand',
      header: 'Brand',
      sortable: true,
    },
    {
      field: 'description',
      header: 'Description',
      sortable: true,
    },
    {
      field: 'quantity',
      header: 'Quantity',
      sortable: true,
    },
    {
      field: 'total_sold',
      header: 'Total sold',
      sortable: true,
    },
    {
      field: 'is_new',
      header: 'New Product',
      sortable: true,
    },
    {
      field: 'category',
      header: 'Category',
      sortable: true,
    },
    {
      field: 'discount',
      header: 'Discount',
      sortable: true,
    },
    {
      field: 'productInventory',
      header: 'Stock Inventory',
      sortable: true,
    },

    {
      header: 'Actions',
      body: () => buttonActions(),
    },
  ]

  return { columns }
}

export default ColumnsProductsPanel
