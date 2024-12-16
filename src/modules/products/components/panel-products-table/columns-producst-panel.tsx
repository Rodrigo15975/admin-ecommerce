import ButtonActions from '@/components/buttonActions/ButtonActions'
import { Label } from '@/components/ui/label'
import { ColumnProps } from 'primereact/column'
import { confirmPopup } from 'primereact/confirmpopup'
import { Tag } from 'primereact/tag'
import { SyntheticEvent } from 'react'
import FormUploadVariants from '../create/form-upload-variants'
import ColumnDeleteProduct from './columns/column-delete-product'
import ColumnNewProduct from './columns/column-new-product'
import { ProductVariantsDetails } from './columns/column-product-variant'
import ColumnQuantityMin from './columns/column-quantity-min'

const ColumnsProductsPanel = () => {
  const DetailsVariant = (data: FindAllProducts) => (
    <ProductVariantsDetails data={data} />
  )

  const deleteProduct = (e: SyntheticEvent, data: FindAllProducts) => {
    confirmPopup({
      target: e.currentTarget as HTMLElement,
      message: (
        <>
          <Label className="font-poppins">
            Delete Product <span className="font-bold">{data.product}</span>
          </Label>
        </>
      ),
      icon: 'pi pi-exclamation-triangle',
      defaultFocus: 'accept',
      footer: ({ reject }) => (
        <ColumnDeleteProduct reject={reject} data={data} />
      ),
    })
  }
  const NewVariantProduct = (data: FindAllProducts) => (
    <FormUploadVariants dataProduct={data} />
  )

  const buttonActions = (data: FindAllProducts) => {
    return (
      <>
        <div className="space-x-4 flex items-center justify-center">
          <ButtonActions
            hanledDelete={(e) => deleteProduct(e, data)}
            hanledEdit={() => {}}
            newButton
          >
            <NewVariantProduct {...data} />
          </ButtonActions>
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
      field: 'category.category',
      header: 'Category',
      sortable: true,
    },
    {
      field: 'brand',
      header: 'Brand',
      sortable: true,
    },
    {
      field: 'quantity',
      header: 'Quantity',
      sortable: true,
    },

    {
      field: 'discount',
      header: 'Discount',
      sortable: true,
    },
    {
      header: 'Variants',
      body: (data: FindAllProducts) => DetailsVariant(data),
    },
    {
      field: 'price',
      header: 'Price',
      sortable: true,
    },
    // {
    //   field: 'size',
    //   header: 'Size',
    //   sortable: true,
    // },
    {
      field: 'gender',
      header: 'Gender',
      sortable: true,
    },

    {
      field: 'is_new',
      header: 'New',
      sortable: true,
      body: (data: FindAllProducts) => ColumnNewProduct(data),
    },
    {
      field: 'total_sold',
      header: 'Total sold',
      sortable: true,
    },
    {
      field: 'description',
      header: 'Description',
      sortable: true,
    },
    {
      field: 'productInventory.stock',
      header: 'In Stock',
      sortable: true,
      body: (data: FindAllProducts) => (
        <>
          {data.productInventory.stock ? (
            <Tag severity="success" value="Yes" />
          ) : (
            <Tag severity="danger" value="No" />
          )}
        </>
      ),
    },
    {
      field: 'productInventory.minStock',
      header: 'Quantity min',
      sortable: true,
      body: (data: FindAllProducts) => ColumnQuantityMin(data),
    },

    {
      header: 'Actions',
      body: (data: FindAllProducts) => buttonActions(data),
    },
  ]

  return { columns }
}

export default ColumnsProductsPanel
