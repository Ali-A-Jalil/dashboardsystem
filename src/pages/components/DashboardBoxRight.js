import React from 'react'

const DashboardBoxRight = (props) => {
return (
    <div className='dashboardBoxRight'style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
    }}>


                <div className='d-flex w-100'>
                    <div className="colOne">
                        <h4 className="text-white mb-0">{props.title}</h4>
                        <span className="text-white">{props.count}</span>     
                    </div>

                    <div className="ml-auto">
                        {
                            props.icon ?
                            <span className="icon">
                                {
                                    props.icon ? props.icon : ''
                                }
                            </span>
                            : 
                            ''
                        }
                    </div>
                </div>

    </div>
)
}

export default DashboardBoxRight