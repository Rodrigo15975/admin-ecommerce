type Infile = {
  objectURL: string
}

export const itemTemplate = (file: object) => {
  const infile = file as Infile
  return (
    <div className="flex align-items-center flex-wrap">
      <div className="flex align-items-center justify-center m-auto flex-[0_1_15rem]">
        <img
          role="presentation"
          src={infile.objectURL}
          className="max-w-[12rem] border rounded-lg shadow-lg h-[12rem] object-cover"
        />
      </div>
    </div>
  )
}
