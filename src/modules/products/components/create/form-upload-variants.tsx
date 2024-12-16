import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormField, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import DynamicUploadFile from '@/components/upload/upload'
import { useResetStore } from '@/modules/create-products/store/clearUpload'
import { zodResolver } from '@hookform/resolvers/zod'
import { BookPlusIcon } from 'lucide-react'
import { Button as ButtonPrime } from 'primereact/button'
import { SketchPicker } from 'react-color'
import { useForm } from 'react-hook-form'
import { ImageVariant, productVariantSchema } from './schema/schema'
import { useCreateArchiveProductVariant } from '../../services/mutation'

type Props = {
  dataProduct: FindAllProducts
}

const FormUploadVariants = ({ dataProduct }: Props) => {
  const { id, category, product } = dataProduct
  const { mutate: createArchive } = useCreateArchiveProductVariant()
  const disabledButton = dataProduct.productVariant.length === 3
  const formResetUpload = useResetStore((store) => store.incrementReset)
  const form = useForm<ImageVariant>({
    resolver: zodResolver(productVariantSchema),
    defaultValues: {
      color: '',
      image: null,
    },
  })

  const handleImageUpload = (image: File | null) =>
    form.setValue('image', image)

  const onSubmit = (newVariant: ImageVariant) => {
    const data = new FormData()
    data.append('image', newVariant.image as File)
    data.append('color', newVariant.color)

    createArchive(
      { data, id, categorie: category.category },
      {
        // onSuccess() {},
      }
    )
    return
    // form.reset({
    //   color: '',
    //   image: null,
    // })
    formResetUpload()
  }

  return (
    <>
      <Dialog modal={true}>
        <DialogTrigger asChild>
          <ButtonPrime
            tooltipOptions={{
              position: 'top',
            }}
            disabled={disabledButton}
            tooltip="New variant"
            className={`bg-blue-300 p-2 rounded-full  ${
              disabledButton && 'opacity-50 cursor-not-allowed '
            }`}
            icon={<BookPlusIcon className="text-white" />}
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-5xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-normal">
              Create new Variant for{' '}
              <span className="font-bold">{product}</span>{' '}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col w-full justify-between items-start"
            >
              <div className="flex w-full gap-2">
                <div className="flex-auto">
                  <FormField
                    name={`image`}
                    render={({ fieldState }) => (
                      <>
                        <DynamicUploadFile
                          error={fieldState.error?.message}
                          onUpload={(file) => handleImageUpload(file)}
                        />
                      </>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Choose to color</Label>
                  <FormField
                    control={form.control}
                    name={`color`}
                    render={({ field }) => (
                      <>
                        <SketchPicker
                          color={field.value}
                          onChangeComplete={({ hex }) =>
                            form.setValue('color', hex)
                          }
                        />
                        <FormMessage />
                      </>
                    )}
                  />
                </div>
              </div>
              <div>
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default FormUploadVariants
