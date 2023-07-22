import '../styles/estimate.css'

function Estimate() {
  return (
<div className="estimate">
    <div className='estimate-heading'>
        <h3>Get an Estimate</h3>
        <p>Know how much it would cost you to get a package delivered through us.</p>
    </div>
  <div className="group-1">
    <div className="pickup">
      <div><label htmlFor="pickup">Pickup Location</label></div>
      <div><input type="text" id="pickup" name="pickup" required /></div>
    </div>
    <div className="dropoff">
      <div><label htmlFor="dropoff">Drop-Off Location</label></div>
      <div><input type="text" id="dropoff" name="dropoff" required /></div>
    </div>
  </div>
  <div className="group-2">
    <div className="category">
      <div><label htmlFor="category">Item Category</label></div>
      <div><input type="text" id="category" name="category" required /></div>
    </div>
    <div className="size">
      <div><label htmlFor="size">Item Size</label></div>
      <div><input type="text" id="size" name="size" required /></div>
    </div>
  </div>
  <div className="getestimate">
    <button type="submit">Get Estimate</button>
  </div>
</div>

  )
}

export default Estimate