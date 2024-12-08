'use client'
import { useResetStore } from '@/modules/create-products/store/clearUpload'
import { ImageIcon } from 'lucide-react'
import { FileUpload } from 'primereact/fileupload'
import { Image } from 'primereact/image'
import { useEffect, useRef } from 'react'
interface DynamicUploadFileProps {
  onUpload: (file: File | null) => void
  [key: string]: any
}

const defaultEmptyTemplate = () => (
  <div className="flex xl:shadow xl:px-4 py-4 gap-2 flex-col items-center justify-center">
    <div className="flex  justify-center  flex-col gap-2 items-center">
      <ImageIcon />
      <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }}>
        Drag and Drop Image Here
      </span>
    </div>
    <div className="block">
      <Image
        src="https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg"
        alt="default"
        className="ring-1"
        imageClassName="backdrop-blur-sm shadow opacity-[0.3]"
        height="200"
        width="200"
      />
    </div>
  </div>
)

export default function DynamicUploadFile({
  emptyTemplateContent,
  onUpload,
  onSubmitClear,
  ...props
}: DynamicUploadFileProps) {
  const fileUploadRef = useRef<FileUpload>(null)
  // escucha el cambio este compon ente, cuando el resetCount se ejecuta en el osSumit
  const resetCount = useResetStore((state) => state.resetCount)
  useEffect(() => {
    // Limpia el FileUpload cuando cambie el resetCount
    fileUploadRef.current?.clear()
  }, [resetCount])

  const handleSelect = (e: { files: File[] }) =>
    e.files[0] ? onUpload(e.files[0]) : null
  // const file = e.files[0] || null
  // onUpload(file)
  // }

  return (
    <article className="">
      <FileUpload
        ref={fileUploadRef}
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
        chooseOptions={{
          className: 'font-poppins',
        }}
        uploadOptions={{
          className: 'hidden',
        }}
        progressBarTemplate
        onSelect={handleSelect}
        onClear={onSubmitClear}
        contentClassName="font-poppins"
        headerClassName="font-poppins"
        className="!font-poppins"
        emptyTemplate={emptyTemplateContent || defaultEmptyTemplate}
        {...props}
      />
    </article>
  )
}
