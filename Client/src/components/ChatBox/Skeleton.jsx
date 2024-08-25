
const Skeleton = () => {
  return (
<div className="flex w-52 flex-col gap-4">
  <div className="flex items-center gap-5">
    <div className="skeleton h-8 w-8 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  
</div>
  )
}

export default Skeleton
