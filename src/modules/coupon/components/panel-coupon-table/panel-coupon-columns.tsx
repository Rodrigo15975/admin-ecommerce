import ButtonActions from '@/components/buttonActions/ButtonActions'
import { ColumnProps } from 'primereact/column'

const ColumnsCouponPanel = () => {
  const buttonActions = () => {
    return (
      <>
        <div className="space-x-4">
          <ButtonActions
            isPendingDisabledDelete={false}
            hanledDelete={() => {}}
            hanledEdit={() => {}}
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
      field: 'code',
      header: 'Code',
      sortable: true,
    },

    {
      field: 'discount',
      header: 'Discount',
      sortable: true,
    },

    {
      field: 'espiryDate',
      header: 'EspiryDate',
      sortable: true,
    },

    {
      field: 'isGlobal',
      header: 'Coupon Global',
      sortable: true,
    },

    {
      field: 'isNew',
      header: 'Coupon New',
      sortable: true,
    },

    {
      header: 'Actions',
      // body: () => buttonActions(),
    },
  ]
  return {
    columns,
  }
}

export default ColumnsCouponPanel
