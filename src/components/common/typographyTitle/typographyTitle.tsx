import React from "react"

const TypographyTitle = ({ title }: { title: string }) => (
  <h1 className="text-3xl max-sm:w-full max-sm:order-1 max-sm:text-center font-medium text-primary">
    {title}
  </h1>
)

export default TypographyTitle
