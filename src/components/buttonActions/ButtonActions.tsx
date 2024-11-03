import React from "react"
import { Button } from "../ui/button"
import { Edit2, Trash2Icon } from "lucide-react"

type Props = {
  hanledDelete: (e: React.SyntheticEvent) => void
  hanledEdit: () => void
  isPendingDisabledEdit?: boolean
  isPendingDisabledDelete?: boolean
}

const ButtonActions = ({
  hanledDelete,
  hanledEdit,
  isPendingDisabledDelete,
  isPendingDisabledEdit,
}: Props) => {
  return (
    <>
      <Button
        disabled={isPendingDisabledEdit}
        className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-800/20 via-red-600/20 to-red-400/20"
        onClick={hanledDelete}
      >
        <Trash2Icon />
      </Button>
      <Button
        disabled={isPendingDisabledDelete}
        variant={"ghost"}
        className="border shadow"
        onClick={hanledEdit}
      >
        <Edit2 />
      </Button>
    </>
  )
}

export default ButtonActions
