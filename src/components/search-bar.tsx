interface Props {
  value: string
  placeholder: string
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickSearch: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const SearchBar = ({
  value,
  placeholder,
  onChangeText,
  onClickSearch,
}: Props) => {
  return (
    <>
      <div>
        <input
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeText(e)}
        />
        <button onClick={(e) => onClickSearch(e)}>search</button>
      </div>
    </>
  )
}
