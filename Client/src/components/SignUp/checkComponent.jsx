
const checkComponent = () => {
  return (
    <div className="flex flex-row gap-1">
    <label className="label cursor-pointer flex flex-row gap-2">
    <span className="label-text">Male</span>
    <input type="checkbox" defaultChecked className="checkbox" />
    </label>
    <label className="label cursor-pointer flex flex-row gap-2">
    <span className="label-text">Female</span>
    <input type="checkbox" defaultChecked className="checkbox" />
    </label>
    </div>
  )
}

export default checkComponent
