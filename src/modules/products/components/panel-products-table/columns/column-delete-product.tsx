import { Button } from '@/components/ui/button'
import { useDeleteProduct } from '@/modules/products/services/mutation'

type Props = {
  reject: () => void
  data: FindAllProducts
}

const ColumnDeleteProduct = ({ reject, data }: Props) => {
  const { mutate, isPending } = useDeleteProduct()

  const deleteProduct = () => mutate(data.id ?? 0)
  return (
    <>
      <div className="flex justify-between p-2 font-poppins">
        <Button disabled={isPending} variant={'link'} onClick={reject}>
          Cancelar
        </Button>
        <Button disabled={isPending} onClick={deleteProduct}>
          Delete
        </Button>
      </div>
    </>
  )
}

export default ColumnDeleteProduct
