import React from 'react'
import { GiExpense, GiProfit, GiReceiveMoney } from "react-icons/gi";
import data from '../datas/Bardata';
import data2 from '../datas/Bar2data';
import img from "../images/card-img.webp"
import Invoice from './Invoice';
import { FaLongArrowAltUp, FaLongArrowAltDown, FaApple,FaPlaystation, FaUserAlt, FaCreditCard, FaPaypal  } from "react-icons/fa";
import Topgrid from './Topgrid';
import Overview from './Overview';
import Weekly from './Weekly';
import Quickt from './Quick';
import Outcome from './Outcome';
import Resent from './Resent';

function Home() {
    return (
        <main className='main-container'>
            {/* Topgrid-starts  */}

            <div className='main-cards'>

                <Topgrid icon={<GiExpense className='card_icon ci1' />} heading={"Earning"} cost={"$2.4K"} arrow={<FaLongArrowAltDown className='icon down' />} monthly={"2%"} />

                <Topgrid icon={<GiReceiveMoney className='card_icon ci2' />} heading={"Expences"} cost={"$198K"} arrow={<FaLongArrowAltUp className='icon Up' />} monthly={"2%"} />

                <Topgrid icon={<GiProfit className='card_icon ci3' />} heading={"Profit"} cost={"$156K"} arrow={<FaLongArrowAltUp className='icon Up' />} monthly={"2%"} />

            </div>

             {/* Topgrid-Ends  */}


            <div className="midgrid main-cards ">
                {/* MyCard-section start */}
                <div className="midgrid1 midd "><h3>MyCard </h3>  <div className="img"><img src={img} alt="card"  /></div> </div>
                {/* MyCard-section end */}
                
                {/* Overview start */}

                <Overview data={data}/>

                {/* Overview start */}
    

                {/* Invouce card start */}

                   <div className="midgrid3 midd "><h3>Invoice sent</h3>

                    <Invoice name='Apple store' rs='$450' className='inv' icon={<FaApple className='icon'
                    style={{color:"rgb(0, 255, 149)", backgroundColor:"rgb(165, 250, 214)"}}  />}
                    time={"5hr"} />

                    <Invoice name='Michael' rs='$160' className='inv' icon={<FaUserAlt className='icon'
                    style={{color:"rgb(255, 213, 0)", backgroundColor:"rgb(248, 239, 193)"}} />} 
                    time={"2 days"}/>

                    <Invoice name='Playstation' rs='$1085' className='inv' icon={<FaPlaystation className='icon'
                    style={{color:"rgb(8, 0, 255)", backgroundColor:" rgb(185, 183, 247)"}}/>}
                    time={"5 days"} />

                    <Invoice name='William' rs='$90' className='inv' icon={<FaUserAlt className='icon'
                    style={{color:"rgb(255, 89, 0)", backgroundColor:"rgb(243, 206, 186)"}}/>}
                    time={"10 days"}/>

                </div>

                {/* invoice card end */}

            </div>
            <div className="bottom-main">
                <div className="btminn">

                    {/* Weekly activity starts */}
                    <Weekly data2={data2} />
                     {/* Weekly activity Ends */}
                    
                    <div className="btmlft2">

                        {/* resent transaction starts  */}
                        <div className="btm-lft-inn"><h3>Recent Transaction </h3>
                            <div className="mp">
                                <Resent from={"Deposit from my card"} date={"28 jan 2023"}
                                 icon={<FaCreditCard className='Resicon' style={{color:"rgb(255, 213, 0)", backgroundColor:"rgb(248, 239, 193)"}}/>}
                                 money={"-$850"} color={"red"}/>

                                <Resent from={"Deposit PayPal"} date={"25 jan 2023"}  
                                icon={<FaPaypal className='Resicon' style={{color:"rgb(8, 0, 255)", backgroundColor:" rgb(185, 183, 247)"}} />}
                                 money={"+$2500"} color={"green"}/>

                                <Resent from={"Jemi witson"} date={"21 jan 2023"}
                                 icon={<FaUserAlt className='Resicon' style={{color:"rgb(0, 255, 149)", backgroundColor:"rgb(165, 250, 214)"}}   />} money={"+$5400"} color={"green"}/>
                            </div>
                        </div>
                         {/* resent transaction ends  */}

                         {/* Quick transfer section starts  */}

                        <div className="btm-lft-inn quick"><h3>Quick Transfer </h3>
                        
                        <Quickt />
                        
                        </div>

                        {/* Quick transfer section ends  */}
                    </div>
                </div>
                {/* Outcome section starts  */}
                <Outcome />
                {/* Outcome section ends  */}
            </div>

        </main>
    )
}

export default Home