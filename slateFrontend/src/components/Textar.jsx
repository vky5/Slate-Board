import './style/textar.css'

function Textar() {
  return (
    <div className='text'>
      <input type="text" className='notes-heading' />
      <textarea name="notes" id="notes"></textarea>
    </div>
  )
}

export default Textar;
