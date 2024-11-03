import ButtonActions from "@/components/buttonActions/ButtonActions"
import { ColumnProps } from "primereact/column"
import { confirmPopup } from "primereact/confirmpopup"
import { storeEditCategorie } from "../../store/storeEditCategorie"
import { storeOpenDialogForm } from "@/utils/storeOpenDialogForm"
import { useDeleteCategorie } from "../../services/mutation"

const ColumnsCategoryPanel = () => {
  const { setId } = storeEditCategorie()
  const { setIsOpenDialogForm } = storeOpenDialogForm()
  const { mutate: deleteCategory } = useDeleteCategorie()
  const buttonActions = (data: Categories) => {
    const { id } = data

    const accept = () => deleteCategory(id)

    const confirmDelete = (e: React.SyntheticEvent) => {
      confirmPopup({
        target: e?.currentTarget as HTMLButtonElement,
        message: `Deleted categories ${data.category} ?`,
        accept,
        acceptClassName: "ml-4 p-2 bg-primary text-white ",
      })
    }

    const updateCategorie = () => {
      setId(id)
      setIsOpenDialogForm()
    }

    return (
      <>
        <div className="space-x-4">
          <ButtonActions
            hanledDelete={confirmDelete}
            hanledEdit={updateCategorie}
          />
        </div>
      </>
    )
  }

  const columns: ColumnProps[] = [
    {
      field: "category",
      header: "Category",
      sortable: true,
    },

    {
      header: "Actions",
      body: (data: Categories) => buttonActions(data),
    },
  ]
  return {
    columns,
  }
}

export default ColumnsCategoryPanel
