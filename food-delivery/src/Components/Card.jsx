import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({foodName, options = [], imageSrc }) => {

    let priceOption = Object.keys(options)
    console.log(priceOption); 


  return (
        <div className="card m-3" style={{ "maxWidth":"400px"}}>
            <img src={imageSrc} className="card-img-top" alt="Product img" id='cardImg' style={{height:"200px", objectFit:"cover"}}/>
            <div className="card-body">
                <h5 className="card-title">{foodName}</h5>
                {/* <p className="card-text">Product duscription</p> */}
                <select name="" id="" className='m-2 w-33 bg-success rounded'>
                    {/* <option value="1" disabled selected>Quentity</option> */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select name="" id="" className='m-2 w-33 bg-success rounded'>
                    {
                        priceOption.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })
                    }                                       
                </select >
                <p className='m-2 w-33 d-inline'>Total Price</p>
            </div>
        </div>
  )
}

export default Card