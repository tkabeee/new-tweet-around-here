interface Props {
  value: string
  placeholder: string
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({ value, placeholder, onChangeText }: Props) => {
  return (
    <>
      <div>
        <input
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeText(e)}
        />
        <button>search</button>
      </div>
    </>
  )
}
