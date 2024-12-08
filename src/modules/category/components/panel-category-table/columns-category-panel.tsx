import ButtonActions from '@/components/buttonActions/ButtonActions'
import { storeOpenDialogForm } from '@/utils/storeOpenDialogForm'
import { ColumnProps } from 'primereact/column'
import { confirmPopup } from 'primereact/confirmpopup'
import { useDeleteCategorie } from '../../services/mutation'
import { storeCreateDiscountCategorie, storeEditCategorie } from '../../store'
import { Button } from 'primereact/button'
import { BookDown } from 'lucide-react'

const ColumnsCategoryPanel = () => {
  const { setId } = storeEditCategorie()
  const { setIsOpenDialogForm } = storeOpenDialogForm()
  const { setIdDiscount, setOpenFormCreateDiscount } =
    storeCreateDiscountCategorie()

  const { mutate: deleteCategory, isPending: isPendingDeleteCategorie } =
    useDeleteCategorie()

  const buttonActions = (data: Categories) => {
    const { id, discountRules = [] } = data
    const accept = () => deleteCategory(id)

    const confirmDelete = (e: React.SyntheticEvent) => {
      confirmPopup({
        target: e?.currentTarget as HTMLButtonElement,
        message: `Deleted categories ${data.category} ?`,
        accept,
        acceptClassName: 'ml-4 p-2 bg-primary text-white ',
      })
    }

    const updateCategorie = () => {
      setId(id)
      setIsOpenDialogForm()
    }

    const openEditDiscountCategory = () => {
      const index = discountRules.findIndex((discount) => discount.is_active)
      const discount = discountRules[index]
      setIdDiscount(discount.id)
      setOpenFormCreateDiscount()
    }

    return (
      <>
        <div className="space-x-4">
          <ButtonActions
            isPendingDisabledDelete={isPendingDeleteCategorie}
            hanledDelete={confirmDelete}
            hanledEdit={updateCategorie}
            newButton
          >
            {discountRules?.length > 0 && (
              <Button
                tooltip="Edit Discount Category"
                icon={<BookDown />}
                className="p-2 shadow border bg-blue-600/80 text-white"
                onClick={openEditDiscountCategory}
              />
            )}
          </ButtonActions>
        </div>
      </>
    )
  }

  const discountRules = (data: Categories) => {
    const { discountRules } = data

    if (discountRules) {
      return (
        <div className="flex gap-2 items-center justify-center">
          <span>{discountRules[0].discount}%</span>
          <div
            className={`h-4 w-4 rounded-full shadow ${
              discountRules[0].is_active && 'bg-green-300'
            } `}
          ></div>
        </div>
      )
    }
  }

  const columns: ColumnProps[] = [
    {
      field: 'category',
      header: 'Category',
      sortable: true,
    },
    {
      header: 'Discount rule all categorie',
      sortable: true,
      body: (data: Categories) => discountRules(data),
    },

    {
      header: 'Actions',
      body: (data: Categories) => buttonActions(data),
    },
  ]
  return {
    columns,
  }
}

export default ColumnsCategoryPanel
