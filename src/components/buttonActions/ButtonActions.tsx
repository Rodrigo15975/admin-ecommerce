import React from "react"
import { Edit2, Trash2Icon } from "lucide-react"
import { Button } from "primereact/button"

type Props = {
  hanledDelete: (e: React.SyntheticEvent) => void
  hanledEdit: () => void
  isPendingDisabledEdit?: boolean
  isPendingDisabledDelete?: boolean
  newButton?: boolean
  children?: React.ReactNode
}

const ButtonActions = ({
  hanledDelete,
  hanledEdit,
  isPendingDisabledDelete,
  isPendingDisabledEdit,
  newButton,
  children,
}: Props) => {
  return (
    <>
      <Button
        tooltip="Delete"
        disabled={isPendingDisabledEdit}
        className="p-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-800/20 via-red-600/20 to-red-400/20"
        onClick={hanledDelete}
      >
        <Trash2Icon />
      </Button>
      <Button
        tooltip="Edit"
        disabled={isPendingDisabledDelete}
        className="p-2 border shadow"
        onClick={hanledEdit}
      >
        <Edit2 />
      </Button>
      {newButton && children}
    </>
  )
}

export default ButtonActions
