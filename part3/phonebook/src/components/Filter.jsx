const Filter = (props) => {
    const handleFilter = (event) => {
        console.log(event.target.value)
        const query = event.target.value;
        let updatedList = [...props.persons];
        updatedList = updatedList.filter((name) => {
          return name.name.indexOf(query) !== -1;
        });
        props.setFilter(updatedList)
      }
    
    return(
        <div>
        Filter shown with: <input
          onChange={handleFilter}
        />
      </div>
    )
}

export default Filter