

function  Album (props){
  const {albums}=props;

  let elements = albums.map(album => {
    return (
      <li key={album.id} className="element">
        <p>
          <span className="element-id">Id:  {album.id}</span>
          <span className="element-title">Title:  {album.title}</span>
        </p>
      </li>
    )
})

return (
  <>
    <ul>
      {elements}
    </ul>
  </>
)
}

export default Album;