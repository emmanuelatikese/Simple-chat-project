
const checkComponent = ({ChangeGender, GenderSelect}) => {
  return (
    <div className="flex flex-row gap-1">
    <label className={`label cursor-pointer flex flex-row gap-2 ${GenderSelect === 'male' ? 'selected' : ''}`}>
    <span className="label-text">Male</span>
    <input type="checkbox" checked={GenderSelect === 'male'} onChange={() => ChangeGender('male')} className="checkbox" />
    </label>
    <label className={`label cursor-pointer flex flex-row gap-2 ${GenderSelect === 'male' ? 'selected' : ''}`}>
    <span className="label-text">Female</span>
    <input type="checkbox" checked={GenderSelect === 'female'} onChange={() => ChangeGender('female')} className="checkbox" />
    </label>
    </div>
  )
}

export default checkComponent
