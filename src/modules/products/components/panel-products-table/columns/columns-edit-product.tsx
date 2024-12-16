import { Edit2 } from 'lucide-react'
import { Button } from 'primereact/button'

import { InputField } from '@/components/common/inputField/InputField'
import { Form, FormField } from '@/components/ui/form'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { useForm } from 'react-hook-form'

const ColumnsEditProduct = (data: FindAllProducts) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const formProducts = useForm({
    defaultValues: {
      product: 'Hola hola',
    },
  })
  const onSubmit = (dataUpdate: unknown) => {
    console.log(data, dataUpdate)
    // const dataForm = convertToFormData(data)
    // mutateCreateProduct(dataForm, {
    //   onSuccess() {
    //     formProducts.reset()
    //     formProducts.setValue('products', initialValues.products)
    //     formProducts.clearErrors()
    //     incrementReset()
    //   },
    // })
  }

  return (
    <>
      <Button
        tooltip="Edit"
        tooltipOptions={{
          position: 'top',
        }}
        onClick={onOpen}
        className="rounded-full font-poppins p-2 border shadow"
      >
        <Edit2 className="text-green-400" />
      </Button>
      <Modal
        scrollBehavior="inside"
        backdrop="opaque"
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-600 to-zinc-900/10 backdrop-opacity-20',
          wrapper: 'max-w-6xl  mx-auto',
        }}
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update</ModalHeader>
              <ModalBody>
                <Form {...formProducts}>
                  <form
                    onSubmit={formProducts.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-6 grid-rows-4 gap-6">
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                      <FormField
                        control={formProducts.control}
                        name={`product`}
                        render={({ field }) => (
                          <InputField field={field} label="Product" />
                        )}
                      />
                    </div>
                  </form>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>
                  <span>Close</span>
                </Button>
                <Button type="submit">Save</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ColumnsEditProduct
