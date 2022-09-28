import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
function Pricecard(props) {
    return  <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.data.title}</h5>
        <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
            {
                props.data.features.map((list)=>{
                    return  <li  className={list.isEnable ? '':'text-muted'} >
                      {
                        list.isEnable? <FontAwesomeIcon id='weight' icon={faCheck } />: <FontAwesomeIcon icon={faTimes } />
                      }
                      {/* <span className="fa-li">
                    <i className="fas fa-check"></i></span> */}
                    { list.name}</li>
                })
              }
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
}

export default Pricecard;